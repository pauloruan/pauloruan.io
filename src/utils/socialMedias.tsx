import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const socialMedias: ISocialMedia[] = [
  {
    order: 3,
    name: "Github",
    slug: "github",
    label: "/pauloruan",
    renderLabel: false,
    url: "https://github.com/pauloruan",
    icon: FaGithub
  },
  {
    order: 2,
    name: "LinkedIn",
    slug: "linkedin",
    label: "in/pauloruan",
    renderLabel: false,
    url: "https://linkedin.com/in/pauloruan",
    icon: FaLinkedin
  },
  {
    order: 1,
    name: "Email",
    slug: "email",
    label: "ola@pauloruan.dev",
    renderLabel: false,
    url: "mailto:ola@pauloruan.dev",
    icon: MdEmail
  }
]
