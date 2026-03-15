'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import WorkForm from "@/components/WorkForm";
import { WorkFormData } from "@/components/WorkForm";

const emptyForm: WorkFormData = {
  title: "",
  category: "",
  summary: "",
  techStack: "",
  thumbnail: "",
  siteUrl: "",
  githubUrl: "",
  detailUrl: "",
  enUrl: "",
  enSummary: "",
  featured: false,
  isPublished: true,
};

export default function NewWorkPage() {
  const router = useRouter();

  const [form, setForm] = useState<WorkFormData>(emptyForm);

 
  const handleCreate = async (form: WorkFormData) => {
    const res = await fetch("/api/works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("Failed to create work");
    }

    alert("作成しました");
    router.push("/admin/works");
    router.refresh();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="mb-6 text-xl font-bold">Create Work</h1>

      <WorkForm
        initialData={emptyForm}
        submitLabel="Create"
        onSubmit={handleCreate}
      />
    </div>
  );
}