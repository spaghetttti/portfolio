import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects = () => {
  const { arg, history, rerender } = useContext(termContext);

  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my notable projects:
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Orange Middleware Systems",
    desc: "High-load backend systems handling 10M+ daily requests using Java, Spring Boot.",
    url: "https://orange.com/",
  },
  {
    id: 2,
    title: "ParlayPlay",
    desc: "Real-time sports betting platform with WebSocket-based live updates.",
    url: "https://parlayplay.io/",
  },
  {
    id: 3,
    title: "BulkSignature",
    desc: "Enterprise email signature automation platform serving 300K+ monthly users.",
    url: "https://bulksignature.com/",
  },
  {
    id: 4,
    title: "UGL Trucks",
    desc: "E-commerce web application for truck sales with custom CMS.",
    url: "https://ugltrucks.com/",
  },
];

export default Projects;
