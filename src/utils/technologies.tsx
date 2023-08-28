import { FaJava, FaNodeJs, FaReact } from "react-icons/fa"
import {
  SiAngular,
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSpring,
  SiTypescript
} from "react-icons/si"

export const technologies: Technology[] = [
  {
    name: "JavaScript",
    url: "https://www.javascript.com",
    icon: SiJavascript
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    icon: SiTypescript
  },
  {
    name: "React",
    url: "https://pt-br.reactjs.org",
    icon: FaReact
  },
  {
    name: "Angular",
    url: "https://angular.io",
    icon: SiAngular
  },
  {
    name: "Node.js",
    url: "https://nodejs.org",
    icon: FaNodeJs
  },
  {
    name: "Java",
    url: "https://www.java.com/pt-BR",
    icon: FaJava
  },
  {
    name: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
    icon: SiSpring
  },
  {
    name: "Docker",
    url: "https://www.docker.com",
    icon: SiDocker
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    icon: SiPostgresql
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com",
    icon: SiMongodb
  }
]
