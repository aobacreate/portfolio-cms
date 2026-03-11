type Props = {
  category: string
};

const categoryColors: Record<string, string> = {  
  "Next.js": "bg-purple-100 text-purple-700 border-purple-300",
  "WordPress": "bg-blue-100 text-blue-700 border-blue-300",
  "Web App": "bg-emerald-100 text-emerald-700 border-emerald-300",
  "Other": "bg-neutral-200 text-neutral-800 border-neutral-400",
};

export default function CategoryTag({ category }: Props) {

  const color =
    categoryColors[category] ??
    "bg-neutral-100 text-neutral-600 border-neutral-300";

  return (
    <p className={`text-xs rounded-full border px-2 py-0.5 ${color}`}>
      {category}
    </p>
  );
}