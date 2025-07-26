import * as React from "react";

interface BlogListItemProps {
  image: string;
  title: string;
  category: string;
  author: string;
  date: string;
  link: string;
  excerpt?: string;
}

export function BlogListItem({
  image,
  title,
  category,
  author,
  date,
  link,
  excerpt,
}: BlogListItemProps) {
  return (
    <a
      href={link}
      className="flex flex-col md:flex-row items-stretch gap-6 group"
    >
      <div className="block w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden bg-gray-100 rounded-xl">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="mb-2 flex flex-col">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-2 align-middle whitespace-nowrap w-fit">
            {category}
          </span>
          <span className="text-2xl font-bold leading-tight mb-1 group-hover:underline">
            {title}
          </span>
          <div className="mb-2 text-base text-gray-600">
            {excerpt ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur."}
          </div>
        </div>
        <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center font-light">
          <span>{author}</span>
          <span>&ndash;</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
}
