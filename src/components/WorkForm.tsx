'use client';

import { useState } from "react";

export type WorkFormData = {
  title: string;
  category: string;
  summary: string;
  techStack: string;
  thumbnail: string;
  siteUrl: string;
  githubUrl: string;
  detailUrl: string;
  featured: boolean;
  isPublished: boolean;
  enUrl: string;
  enSummary: string;
};

type WorkFormProps = {
  initialData: WorkFormData;
  submitLabel: string;
  onSubmit: (form: WorkFormData) => Promise<void>;
};

export default function WorkForm({
  initialData,
  submitLabel,
  onSubmit,
}: WorkFormProps) {
  const [form, setForm] = useState<WorkFormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]:
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(form);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Category</label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Summary</label>
        <textarea
          name="summary"
          value={form.summary}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          rows={4}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">English Summary</label>
        <textarea
          name="enSummary"
          value={form.enSummary}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          rows={4}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Tech Stack</label>
        <input
          name="techStack"
          value={form.techStack}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Thumbnail</label>
        <input
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Site URL</label>
        <input
          name="siteUrl"
          value={form.siteUrl}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">GitHub URL</label>
        <input
          name="githubUrl"
          value={form.githubUrl}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Detail URL</label>
        <input
          name="detailUrl"
          value={form.detailUrl}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">English URL</label>
        <input
          name="enUrl"
          value={form.enUrl}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />
        Featured
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isPublished"
          checked={form.isPublished}
          onChange={handleChange}
        />
        Published
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}