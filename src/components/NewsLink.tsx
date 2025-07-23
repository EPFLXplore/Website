import { ArrowRight } from "lucide-react";

const EventLink = ({
  type = "event",
  href,
  title,
  dateString,
  icon,
}: {
  type: "recruitment" | "event" | "important";
  href: string;
  title: string;
  dateString?: string;
  icon: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "w-full rounded-full bg-neutral-800 text-neutral-100 text-xs pl-1 pr-3 py-1 flex flex-row items-center gap-2 font-semibold select-none group overflow-hidden flex-none fade-in-slide-down duration-500 focus-within:ring focus-within:outline-none focus-within:ring-sky-500"
      }
      style={{
        animationDelay: "300ms",
      }}
    >
      {type === "event" && (
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <span className="bg-neutral-900 rounded-full px-2 py-1 flex flex-row items-center gap-1">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-3.5 text-neutral-500 hidden sm:block"
          >
            <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
            <path
              fillRule="evenodd"
              d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-center whitespace-nowrap text-white">
            {dateString}
          </span>
        </span>
      )}
      {type === "recruitment" && (
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <span className="bg-neutral-900 rounded-full px-2 py-1 flex flex-row items-center gap-1">
          <span className="text-center whitespace-nowrap text-white">
            Recruitment
          </span>
        </span>
      )}
      {type === "important" && (
        <span className="bg-neutral-900 rounded-full px-2 py-1 flex flex-row items-center gap-1">
          <span className="text-center whitespace-nowrap text-white">
            Important
          </span>
        </span>
      )}

      <img src={icon} alt={title} className="size-4 flex-none mx-1" />
      <div className="flex flex-row items-center gap-1 animate-pulse overflow-hidden text-white flex-grow">
        <span className="text-left whitespace-nowrap truncate overflow-hidden flex-grow">
          {title}
        </span>
        <ArrowRight className="hidden sm:block size-3 stroke-[2.3px] group-hover:translate-x-0.5 transition-transform duration-300 flex-none" />
      </div>
    </a>
  );
};

export default EventLink;
