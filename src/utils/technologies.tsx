import { FaJava, FaNodeJs, FaReact } from "react-icons/fa"
import {
  SiAngular,
  SiApachekafka,
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiSpring,
  SiTypescript
} from "react-icons/si"

export const technologies: ITechnology[] = [
  {
    order: 1,
    name: "Java",
    slug: "java",
    url: "https://www.java.com/pt-BR",
    icon: FaJava,
    frequentlyUsed: true
  },
  {
    order: 2,
    name: "JavaScript",
    slug: "javascript",
    url: "https://www.javascript.com",
    icon: SiJavascript,
    frequentlyUsed: true
  },
  {
    order: 3,
    name: "TypeScript",
    slug: "typescript",
    url: "https://www.typescriptlang.org",
    icon: SiTypescript,
    frequentlyUsed: true
  },
  {
    order: 4,
    name: "Spring Boot",
    slug: "spring-boot",
    url: "https://spring.io/projects/spring-boot",
    icon: SiSpring,
    frequentlyUsed: true
  },
  {
    order: 5,
    name: "Angular",
    slug: "angular",
    url: "https://angular.io",
    icon: SiAngular,
    frequentlyUsed: true
  },
  {
    order: 6,
    name: "React",
    slug: "react",
    url: "https://pt-br.reactjs.org",
    icon: FaReact,
    frequentlyUsed: false
  },
  {
    order: 7,
    name: "Next.js",
    slug: "nextjs",
    url: "https://nextjs.org",
    icon: SiNextdotjs,
    frequentlyUsed: true
  },
  {
    order: 8,
    name: "Node.js",
    slug: "nodejs",
    url: "https://nodejs.org",
    icon: FaNodeJs,
    frequentlyUsed: true
  },
  {
    order: 9,
    name: "Docker",
    slug: "docker",
    url: "https://www.docker.com",
    icon: SiDocker,
    frequentlyUsed: true
  },
  {
    order: 10,
    name: "PostgreSQL",
    slug: "postgresql",
    url: "https://www.postgresql.org",
    icon: SiPostgresql,
    frequentlyUsed: true
  },
  {
    order: 11,
    name: "MongoDB",
    slug: "mongodb",
    url: "https://www.mongodb.com",
    icon: SiMongodb,
    frequentlyUsed: true
  },
  {
    order: 12,
    name: "Apache Kafka",
    slug: "apache-kafka",
    url: "https://kafka.apache.org",
    icon: SiApachekafka,
    frequentlyUsed: true
  }
]
