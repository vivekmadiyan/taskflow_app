"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");


  const token =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    fetchTasks();
  }, []);

    const fetchTasks = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setTasks(data);
  };

  // 🔥 ADD THESE TWO FUNCTIONS HERE

  const deleteTask = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchTasks();
  };

  const toggleTask = async (task) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });

    fetchTasks();
  };
const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return task.completed && matchesSearch;
    }

    if (filter === "pending") {
      return !task.completed && matchesSearch;
    }

    return matchesSearch;
  });

  const addTask = async () => {
    if (!title) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="New Task"
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
<div className="flex gap-4 mb-4">
  <input
    type="text"
    placeholder="Search tasks..."
    className="border p-2"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="border p-2"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="pending">Pending</option>
  </select>
</div>

   <ul>
  {filteredTasks.map((task) => (
    <li
      key={task._id}
      className="border p-3 mb-2 flex justify-between items-center"
    >
      <div>
        <p
          className={`font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => deleteTask(task._id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}
