import { SocialMediaList } from "../SocialMediaList"

export function Contact() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <h3 className="text-lg md:text-xl max-w-max max-h-max font-semibold text-black dark:text-white font-sans my-1">
        Contato
      </h3>
      <p className="max-w-max max-h-max my-2 font-sans text-sm md:text-base font-normal text-left text-theme-dark dark:text-theme-light">
        Estou sempre aberto a conversar, conectar-me com pessoas inovadoras e
        explorar novas oportunidades. Se você tem um projeto ou ideia em mente
        no qual posso contribuir, não hesite em entrar em contato. Vamos
        discutir como transformar suas ideias em experiências.
      </p>
      <p className="max-w-max max-h-max my-2 font-sans text-sm md:text-base font-normal text-left text-theme-dark dark:text-theme-light">
        Você pode me encontrar em qualquer uma das redes sociais abaixo
      </p>
      <SocialMediaList />
    </div>
  )
}
