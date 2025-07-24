import React from "react";
import SemesterProjectCard from "./SemesterProjectCard";

interface Project {
  title: string;
  major: string;
  pole: string;
  contact: string;
  applyLink: string;
  slug: string;
}

interface SemesterProjectsGridProps {
  projects: Project[];
}

const groupByPole = (projects: Project[]) => {
  return projects.reduce(
    (acc, project) => {
      if (!acc[project.pole]) acc[project.pole] = [];
      acc[project.pole].push(project);
      return acc;
    },
    {} as Record<string, Project[]>,
  );
};

const SemesterProjectsGrid: React.FC<SemesterProjectsGridProps> = ({
  projects,
}) => {
  const grouped = groupByPole(projects);
  return (
    <div className="flex flex-col gap-12">
      {Object.entries(grouped).map(([pole, poleProjects]) => (
        <section key={pole}>
          <h2 className="text-2xl font-bold mb-6">{pole}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poleProjects.map((project) => (
              <SemesterProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SemesterProjectsGrid;
