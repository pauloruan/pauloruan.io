"use client"

import { Next13ProgressBar } from "next13-progressbar"

interface IProgressBarProviderProps extends IRootLayoutProps {}

export default function ProgressBarProvider({
  children
}: IProgressBarProviderProps) {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="2px"
        color="#0284c7"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  )
}
