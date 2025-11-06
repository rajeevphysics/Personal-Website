export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
  closed: {
    opacity: 0,
  },
}

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.7, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
  },
}
