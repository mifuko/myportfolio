interface BlogCardProps {
  title: string;
  image: string;
}

export default function BlogCard({ title, image }: BlogCardProps) {
  return (
    <div className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
}

