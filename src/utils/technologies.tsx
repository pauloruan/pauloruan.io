import { FaJava, FaNodeJs, FaReact } from "react-icons/fa"
import {
  SiAmazonaws,
  SiAngular,
  SiApachekafka,
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
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
    frequentlyUsed: true,
    label: "Java",
    renderLabel: false
  },
  {
    order: 2,
    name: "JavaScript",
    slug: "javascript",
    url: "https://www.javascript.com",
    icon: SiJavascript,
    frequentlyUsed: true,
    label: "JavaScript",
    renderLabel: false
  },
  {
    order: 3,
    name: "TypeScript",
    slug: "typescript",
    url: "https://www.typescriptlang.org",
    icon: SiTypescript,
    frequentlyUsed: true,
    label: "TypeScript",
    renderLabel: false
  },
  {
    order: 4,
    name: "Spring Boot",
    slug: "spring-boot",
    url: "https://spring.io/projects/spring-boot",
    icon: SiSpring,
    frequentlyUsed: true,
    label: "Spring Boot",
    renderLabel: false
  },
  {
    order: 5,
    name: "Angular",
    slug: "angular",
    url: "https://angular.io",
    icon: SiAngular,
    frequentlyUsed: true,
    label: "Angular",
    renderLabel: false
  },
  {
    order: 6,
    name: "React",
    slug: "react",
    url: "https://pt-br.reactjs.org",
    icon: FaReact,
    frequentlyUsed: false,
    label: "React",
    renderLabel: false
  },
  {
    order: 7,
    name: "Next.js",
    slug: "nextjs",
    url: "https://nextjs.org",
    icon: SiNextdotjs,
    frequentlyUsed: true,
    label: "Next.js",
    renderLabel: false
  },
  {
    order: 8,
    name: "Node.js",
    slug: "nodejs",
    url: "https://nodejs.org",
    icon: FaNodeJs,
    frequentlyUsed: true,
    label: "Node.js",
    renderLabel: false
  },
  {
    order: 9,
    name: "Docker",
    slug: "docker",
    url: "https://www.docker.com",
    icon: SiDocker,
    frequentlyUsed: true,
    label: "Docker",
    renderLabel: false
  },
  {
    order: 10,
    name: "PostgreSQL",
    slug: "postgresql",
    url: "https://www.postgresql.org",
    icon: SiPostgresql,
    frequentlyUsed: true,
    label: "PostgreSQL",
    renderLabel: false
  },
  {
    order: 11,
    name: "MongoDB",
    slug: "mongodb",
    url: "https://www.mongodb.com",
    icon: SiMongodb,
    frequentlyUsed: true,
    label: "MongoDB",
    renderLabel: false
  },
  {
    order: 12,
    name: "Apache Kafka",
    slug: "apache-kafka",
    url: "https://kafka.apache.org",
    icon: SiApachekafka,
    frequentlyUsed: true,
    label: "Apache Kafka",
    renderLabel: false
  },
  {
    order: 13,
    name: "Redis",
    slug: "redis",
    url: "https://redis.io",
    icon: SiRedis,
    frequentlyUsed: false,
    label: "Redis",
    renderLabel: false
  },
  {
    order: 14,
    name: "AWS",
    slug: "amazon-web-services",
    url: "https://aws.amazon.com",
    icon: SiAmazonaws,
    frequentlyUsed: true,
    label: "Amazon Web Services",
    renderLabel: false
  }
]
