import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface SemesterProjectCardProps {
  title: string;
  major: string;
  pole: string;
  contact: string;
  applyLink: string;
  slug: string;
}

const base = import.meta.env.BASE_URL;

const SemesterProjectCard: React.FC<SemesterProjectCardProps> = ({
  title,
  major,
  pole,
  contact,
  applyLink,
  slug,
}) => (
  <a
    href={`${base}/semester-projects/${slug}/`}
    className="block group focus:outline-none focus:ring-primary/60 rounded-xl"
    tabIndex={0}
    aria-label={`View details for ${title}`}
  >
    <Card className="w-full max-w-md mx-auto transition-shadow group-hover:shadow-lg group-focus:shadow-lg cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Badge className="mt-2" variant="secondary">
          {pole}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <span className="font-semibold">Major:</span> {major}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Contact:</span> {contact}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-red-500/90 transition"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          Apply
        </a>
      </CardFooter>
    </Card>
  </a>
);

export default SemesterProjectCard;
