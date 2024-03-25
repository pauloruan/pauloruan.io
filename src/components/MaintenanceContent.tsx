import { Typography } from "@/components/Typography"
import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"

export function MaintenanceContent(): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full gap-4">
      <Typography.H1>Página em manutenção</Typography.H1>
      <Typography.P className="text-black dark:text-white font-normal text-sm text-start md:text-base my-2 py-1">
        Desculpe o transtorno, mas esta página está temporariamente
        indisponível.
      </Typography.P>
      <Typography.P className="text-black dark:text-white font-normal text-sm text-start md:text-base my-2 py-1">
        <Link
          href="/"
          className="flex flex-row items-center text-center no-underline decoration-2 transition duration-300 ease-in-out text-black dark:text-white"
        >
          <BsArrowLeftShort className="mr-1" /> Voltar para a&nbsp;
          <strong className="no-underline hover:underline">
            página inicial
          </strong>
          .
        </Link>
      </Typography.P>
      <Image
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGtvZWhwOXZianlzemtldHp1NDhsbWcyaXE0ZzRiZjZleDFtNmhicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lzz3B3xLZluuY/giphy.gif"
        alt="Gif de um gato digitando em um notebook"
        width={500}
        height={500}
        loading="eager"
        unoptimized
        priority
        className="object-contain object-center w-full h-full"
      />
    </div>
  )
}
