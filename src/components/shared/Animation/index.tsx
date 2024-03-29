import { motion } from "framer-motion"

export function Animation({ children }: IAnimationProps): JSX.Element {
  return (
    <motion.div
      className="bg-background dark:bg-background flex min-h-screen flex-col items-center justify-between w-full max-w-[666px] mx-auto"
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
