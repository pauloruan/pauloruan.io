import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const socialMedias: ISocialMedia[] = [
  {
    order: 1,
    name: "Github",
    slug: "github",
    url: "https://github.com/pauloruan",
    icon: FaGithub
  },
  {
    order: 2,
    name: "LinkedIn",
    slug: "linkedin",
    url: "https://linkedin.com/in/pauloruan",
    icon: FaLinkedin
  },
  {
    order: 3,
    name: "Email",
    slug: "email",
    url: "mailto:ola@pauloruan.dev",
    icon: MdEmail
  }
]
