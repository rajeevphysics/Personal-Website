"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RoundedButtonProps {
  children: ReactNode
  className?: string
}

export default function RoundedButton({ children, className = "" }: RoundedButtonProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
