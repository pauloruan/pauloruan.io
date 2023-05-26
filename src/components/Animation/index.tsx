import { motion } from "framer-motion"

export type AnimationProps = {
  children: React.ReactNode
}

export function Animation({ children }: AnimationProps): JSX.Element {
  return (
    <motion.div
      className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}
