import React from "react";

interface SemesterProjectCardProps {
  title: string;
  major: string;
  pole: string;
  contact: string;
  applyLink: string;
  slug: string;
}

const SemesterProjectCard: React.FC<SemesterProjectCardProps> = ({
  title,
  major,
  pole,
  contact,
  applyLink,
}) => {
  return (
    <div
      className="
        relative flex flex-col justify-between
        bg-gray-900/80 backdrop-blur-md border border-gray-700 
        rounded-xl p-6 pt-12 text-white shadow-md 
        transition-transform hover:scale-[1.02] hover:shadow-xl 
        h-[420px] /* fixed height for equal size */
      "
    >
      {/* Pole Tag absolute, with extra padding to prevent overlap */}
      <span
        className="
          absolute top-4 right-4 text-xs px-3 py-1 
          bg-gradient-to-r from-pink-500 to-red-500 
          rounded-full font-semibold
        "
      >
        {pole}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* Info */}
      <div className="space-y-2 flex-1">
        <p>
          <span className="font-semibold">Major:</span> {major}
        </p>
        <p>
          <span className="font-semibold">Contact:</span> {contact}
        </p>
      </div>

      {/* Download Button */}
      <a
        href={applyLink}
        download
        className="
          mt-4 inline-block px-4 py-2 rounded-lg 
          bg-primary text-black font-semibold 
          hover:bg-primary/80 transition
          text-center
        "
      >
        Download
      </a>
    </div>
  );
};

export default SemesterProjectCard;
