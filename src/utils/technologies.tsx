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

export const technologies = [
  {
    url: "https://www.javascript.com",
    icon: (
      <SiJavascript className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://www.typescriptlang.org",
    icon: (
      <SiTypescript className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://pt-br.reactjs.org",
    icon: (
      <FaReact className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://angular.io",
    icon: (
      <SiAngular className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://nodejs.org",
    icon: (
      <FaNodeJs className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://www.java.com/pt-BR",
    icon: (
      <FaJava className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://spring.io/projects/spring-boot",
    icon: (
      <SiSpring className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://www.docker.com",
    icon: (
      <SiDocker className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://www.postgresql.org",
    icon: (
      <SiPostgresql className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  },
  {
    url: "https://www.mongodb.com",
    icon: (
      <SiMongodb className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
    )
  }
] as Technology[]
