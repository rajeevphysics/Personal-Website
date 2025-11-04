"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface RoundedButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function RoundedButton({ children, className = "", href = "/", onClick }: RoundedButtonProps) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.div>
    </Link>
  )
}
