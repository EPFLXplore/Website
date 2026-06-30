import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import { XploreFullIcon } from "./icons/xplore-full";
import { LinkedinIcon, InstagramIcon, GithubIcon, Menu as MenuIcon, X } from "lucide-react";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const projectFolders = [
  {
    name: "Xplore Rover Challenge",
    path: `${base}/projects/xplore-rover-challenge`,
    description:
      "Our flagship competition entry, building a Mars rover from scratch.",
  },
  {
    name: "European Rover Challenge",
    path: `${base}/projects/european-rover-challenge`,
    description: "Competing in Europe's premier Mars rover competition.",
  },
  {
    name: "Xplore Research",
    path: `${base}/projects/xplore-research`,
    description:
      "Innovative research projects in robotics, AI, and planetary exploration.",
  },
];

const getCurrentPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "";
};

const isActive = (path: string) => {
  const current = getCurrentPath();
  const normalize = (p: string) => p.replace(/\/+$/, "");
  return (
    normalize(current) === normalize(path) ||
    normalize(current).startsWith(normalize(path) + "/")
  );
};

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full py-4 px-6 bg-transparent relative z-50">
      {/* Logo */}
      <a href={base} className="flex items-center">
        <XploreFullIcon className="h-10 w-auto" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center">
        <NavigationMenu className="mr-4">
          <NavigationMenuList className="flex items-center gap-3">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[320px] md:w-[400px] md:grid-cols-3 p-2">
                  {projectFolders.map((project) => (
                    <li key={project.path} className="flex">
                      <NavigationMenuLink asChild>
                        <a
                          href={project.path}
                          className={`flex flex-col justify-end rounded-md bg-muted/50 p-4 w-full no-underline outline-none hover:bg-accent hover:text-accent-foreground transition focus:shadow-md ${
                            isActive(project.path) ? "text-secondary" : ""
                          }`}
                        >
                          <div className="text-base font-medium mb-1 leading-none">
                            {project.name}
                          </div>
                          <div className="text-muted-foreground text-xs leading-snug">
                            {project.description}
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={`${base}/semester-projects`}
                className={`px-4 rounded-md py-2 text-base font-medium ${
                  isActive(`${base}/semester-projects`) ? "text-secondary" : ""
                }`}
              >
                Semester Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={`${base}/team`}
                className={`px-4 rounded-md py-2 text-base font-medium ${
                  isActive(`${base}/team`) ? "text-secondary" : ""
                }`}
              >
                Team
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={`${base}/contact-us`}
                className={`bg-foreground text-background rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground transition font-semibold ml-2 ${
                  isActive(`${base}/contact-us`) ? "text-secondary" : ""
                }`}
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4 ml-4">
          <a href="https://www.linkedin.com/company/epfl-xplore/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-400">
            <LinkedinIcon className="size-5" />
          </a>
          <a href="https://www.instagram.com/epfl_xplore/?hl=en" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-pink-400">
            <InstagramIcon className="size-5" />
          </a>
          <a href="https://github.com/EPFLXplore" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-gray-100">
            <GithubIcon className="size-5" />
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-slate-900 text-white rounded-lg shadow-lg p-4 flex flex-col gap-3 md:hidden">
          <a href={`${base}/projects/xplore-rover-challenge`} className="hover:text-secondary">Xplore Rover Challenge</a>
          <a href={`${base}/projects/european-rover-challenge`} className="hover:text-secondary">European Rover Challenge</a>
          <a href={`${base}/projects/xplore-research`} className="hover:text-secondary">Xplore Research</a>
          <a href={`${base}/semester-projects`} className="hover:text-secondary">Semester Projects</a>
          <a href={`${base}/team`} className="hover:text-secondary">Team</a>
          <a href={`${base}/contact-us`} className="bg-secondary text-white px-3 py-2 rounded-md text-center">Contact Us</a>
          <div className="flex gap-4 justify-center mt-3">
            <a href="https://www.linkedin.com/company/epfl-xplore/" target="_blank" rel="noopener"><LinkedinIcon className="size-5" /></a>
            <a href="https://www.instagram.com/epfl_xplore/?hl=en" target="_blank" rel="noopener"><InstagramIcon className="size-5" /></a>
            <a href="https://github.com/EPFLXplore" target="_blank" rel="noopener"><GithubIcon className="size-5" /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Menu;
