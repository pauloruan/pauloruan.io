import Link from "next/link"
import { useEffect, useState } from "react"
import { FaSpotify } from "react-icons/fa"

export function NowPlaying(): JSX.Element {
  const [song, setSong] = useState<INowPlayingProps | null>(null)

  useEffect(() => {
    async function getSong() {
      const response = await fetch("/api/now-playing")
      const song: INowPlayingProps = await response.json()
      setSong(song)
    }
    getSong()
  }, [])

  return (
    <div className="flex flex-row my-2 space-x-2 w-full justify-center items-center">
      <FaSpotify className="h-5 w-5 ml-auto m-1 text-[#1ED760]" />
      <div className="inline-flex flex-col md:flex-row  justify-start items-start w-full max-w-full truncate">
        {song?.songUrl ? (
          <Link
            className="text-primary dark:text-primary font-medium cursor-pointer max-w-max truncate"
            href={song.songUrl}
            target="_blank"
            passHref
          >
            {song.title}
          </Link>
        ) : (
          <p className="text-primary dark:text-primary font-medium">
            Not Playing
          </p>
        )}
        <span className="mx-2 text-primary dark:text-primary hidden md:block">
          {" – "}
        </span>
        <p className="text-primary dark:text-primary max-w-max truncate">
          {song?.artist ?? "Spotify"}
        </p>
      </div>
    </div>
  )
}
