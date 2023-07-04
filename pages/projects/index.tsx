import React, { useState, useContext } from "react";
import { links as Links } from "../../src/screens/homepage/styles";

import { useRouter } from "next/router";
import { myContext } from "@/src/modules/my-context";
import HomePage from "@/src/screens/homepage";
import Terminal from "@/src/modules/terminal";
import { Header } from "@/src/modules/header";
import { url } from "inspector";

interface Project {
  id: number;
  name: string;
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "PokeVerse",
    description: `A React application with a focus on deployment and hosting the website on Git Pages. a React application hosted on Git Pages to showcase a collection of Pokémon cards along with detailed
    information about each Pokémon. Demonstrated proficiency in React, API integration, and front-end development
    in a real-world project `,
    url: "https://vaibhavbaheti28.github.io/Pokemon/",
  },
  {
    id: 2,
    name: "Exam DBMS",
    description: `Developed a Python application with a graphical user interface (GUI) using the Tkinter library and integrated
    it with MySQL using the Python Connector. Created an intuitive and user-friendly interface for efficient data
    entry, retrieval, and manipulation. Utilized Tkinter’s widget toolkit to design interactive elements such as buttons,
    menus, and forms. Employed the MySQL Python Connector to establish a connection between the application
    and the MySQL database, enabling seamless data integration.`,
  },
  // Add more projects as needed
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <Terminal header="My Projects">
      <Links>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: "1",
              paddingRight: "10px",
              borderRight: "1px solid #ccc",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  ...(selectedProject === project
                    ? { backgroundColor: "f0f0f0" }
                    : {}),
                }}
                onClick={() => handleProjectClick(project)}
              >
                {project.name}
              </div>
            ))}
          </div>
          <div style={{ flex: "3", paddingLeft: "10px" }}>
            {selectedProject ? (
              <div>
                <a
                  href={selectedProject.url}
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "hotpink",
                  }}
                >
                  {selectedProject.name}
                </a>
                <p>{selectedProject.description}</p>
              </div>
            ) : (
              <div
                style={{
                  marginTop: "50px",
                  textAlign: "center",
                  color: "#999",
                }}
              >
                Select a project to view details
              </div>
            )}
          </div>
        </div>
      </Links>
    </Terminal>
  );
};
export default Project;
