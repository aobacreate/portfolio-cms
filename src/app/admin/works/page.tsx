'use client';
import { useEffect, useState } from "react";
import { Work } from "@/generated/prisma/client";
import Link from "next/link";

export default function ShowTable() {
  
  const [data, setData] = useState<Work[]>([]);

  useEffect(() => {
    const fetchData = async () => {    
      const res = await fetch('/api/works');
      const works = await res.json();
      setData(works);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this work?")) return;

    try {
      await fetch(`/api/works/${id}`, {
        method: "DELETE",
      });

      setData((prev) => prev.filter((w) => w.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Works</h1>

        <Link
          href="/admin/works/new"
          className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Create
        </Link>
      </div>

      <table className="table-auto w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">ID</th>
            <th className="border px-3 py-2 text-left">Title</th>
            <th className="border px-3 py-2 text-left">Category</th>
            <th className="border px-3 py-2 text-left">Published</th>
            <th className="border px-3 py-2 text-left">Featured</th>
            <th className="border px-3 py-2 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((work) => (
            <tr key={work.id} className="hover:bg-gray-50">
              <td className="border px-3 py-2">{work.id}</td>

              <td className="border px-3 py-2">
                {work.title}
              </td>

              <td className="border px-3 py-2">
                {work.category}
              </td>

              <td className="border px-3 py-2">
                {work.isPublished ? "true" : "false"}
              </td>

              <td className="border px-3 py-2">
                {work.featured ? "true" : "false"}
              </td>

              <td className="border px-3 py-2">
                <Link
                  href={`/admin/works/${work.id}/edit`}
                  className="mr-3 text-blue-600 hover:underline"
                >
                  Edit
                </Link>

                <button 
                  className="text-red-600 hover:underline"
                  onClick={() => handleDelete(work.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  
  
 