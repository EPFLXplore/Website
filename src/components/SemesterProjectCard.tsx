import React from "react";

interface SemesterProjectCardProps {
  title: string;
  major: string;
  pole: string;
  contact: string;
  applyLink: string;
  slug: string;
  taken?: boolean; // new optional prop
}

const SemesterProjectCard: React.FC<SemesterProjectCardProps> = ({
  title,
  major,
  pole,
  contact,
  applyLink,
  taken = false, // default false
}) => {
  return (
    <div
      className={`
        relative flex flex-col justify-between
        bg-gray-900/80 backdrop-blur-md border border-gray-700 
        rounded-xl p-6 pt-12 text-white shadow-md 
        transition-transform hover:scale-[1.02] hover:shadow-xl 
        h-[420px]
        ${taken ? "opacity-70" : ""} /* faded if taken */
      `}
    >
      {/* Pole Tag absolute */}
      <span
        className="
          absolute top-4 right-4 text-xs px-3 py-1 
          bg-gradient-to-r from-pink-500 to-red-500 
          rounded-full font-semibold
        "
      >
        {pole}
      </span>

      {/* Taken Tag */}
      {taken && (
        <span
          className="
            absolute top-4 left-4 text-xs px-3 py-1 
            bg-yellow-500 text-black rounded-full font-bold shadow
          "
        >
          Taken
        </span>
      )}

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

      {/* Download Button (disabled if taken) */}
      <a
        href={taken ? undefined : applyLink}
        download={!taken}
        className={`
          mt-4 inline-block px-4 py-2 rounded-lg 
          font-semibold text-center transition
          ${taken 
            ? "bg-gray-600 text-gray-300 cursor-not-allowed" 
            : "bg-primary text-black hover:bg-primary/80"}
        `}
        onClick={(e) => taken && e.preventDefault()}
      >
        {taken ? "Unavailable" : "Download"}
      </a>
    </div>
  );
};

export default SemesterProjectCard;
