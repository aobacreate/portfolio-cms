'use client';

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import WorkForm from "@/components/WorkForm";
import { WorkFormData } from "@/components/WorkForm";

export default function EditWorkPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [initialData, setInitialData] = useState<WorkFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const res = await fetch(`/api/works/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch work");
        }

        const work = await res.json();

        setInitialData({
          title: work.title ?? "",
          category: work.category ?? "",
          summary: work.summary ?? "",
          techStack: work.techStack ?? "",
          thumbnail: work.thumbnail ?? "",
          siteUrl: work.siteUrl ?? "",
          githubUrl: work.githubUrl ?? "",
          detailUrl: work.detailUrl ?? "",
          featured: work.featured ?? false,
          isPublished: work.isPublished ?? true,
        });
      } catch (error) {
        console.error(error);
        alert("データ取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchWork();
  }, [id]);

  const handleUpdate = async (form: WorkFormData) => {
    const res = await fetch(`/api/works/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("Failed to update work");
    }

    alert("更新しました");
    router.push("/admin/works");
    router.refresh();
  };

  if (loading) {
    return <div className="max-w-3xl mx-auto p-6">Loading...</div>;
  }

  if (!initialData) {
    return <div className="max-w-3xl mx-auto p-6">Work not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="mb-6 text-xl font-bold">Edit Work</h1>

      <WorkForm
        initialData={initialData}
        submitLabel="Save"
        onSubmit={handleUpdate}
      />
    </div>
  );
}