import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import { XploreFullIcon } from "./icons/xplore-full";
import { LinkedinIcon, InstagramIcon, GithubIcon } from "lucide-react";
const projectFolders = [
  {
    name: "Xplore Rover Challenge",
    path: "/projects/xplore-rover-challenge",
    description:
      "Our flagship competition entry, building a Mars rover from scratch.",
  },
  {
    name: "European Rover Challenge",
    path: "/projects/european-rover-challenge",
    description: "Competing in Europe's premier Mars rover competition.",
  },
  {
    name: "Xplore Research",
    path: "/projects/xplore-research",
    description:
      "Innovative research projects in robotics, AI, and planetary exploration.",
  },
];

const Menu: React.FC = () => (
  <div className="flex items-center justify-between w-full py-6 px-8">
    <a href="/" className="flex items-center">
      <XploreFullIcon className="h-12 w-auto" />
    </a>
    <nav className="flex items-center">
      <NavigationMenu className="mr-4">
        <NavigationMenuList className="flex items-center gap-3">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => (window.location.href = "/projects")}
              className="cursor-pointer"
            >
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 w-[320px] md:w-[400px] md:grid-cols-3 p-2">
                {projectFolders.map((project) => (
                  <li key={project.path} className="flex">
                    <NavigationMenuLink asChild>
                      <a
                        href={project.path}
                        className="flex flex-col justify-end rounded-md bg-muted/50 p-4 w-full no-underline outline-none hover:bg-accent hover:text-accent-foreground transition focus:shadow-md"
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
              href="/team"
              className="px-4 rounded-md py-2 text-base font-medium"
            >
              Team
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blog"
              className="px-4 rounded-md py-2 text-base font-medium"
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact-us"
              className="bg-foreground text-background rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground transition font-semibold ml-2"
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-4 ml-4">
        <a
          href="https://www.linkedin.com/company/epfl-xplore/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="hover:text-blue-400"
        >
          <LinkedinIcon className="size-5 align-baseline" />
        </a>
        <a
          href="https://www.instagram.com/epfl_xplore/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          className="hover:text-pink-400"
        >
          <InstagramIcon className="size-5 align-baseline" />
        </a>
        <a
          href="https://github.com/EPFLXplore"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="hover:text-gray-100"
        >
          <GithubIcon className="size-5 align-baseline" />
        </a>
      </div>
    </nav>
  </div>
);

export default Menu;
