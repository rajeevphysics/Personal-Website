// Current Project Data
// This file contains the data for the current/latest project displayed on the homepage

export interface CurrentProjectData {
  month: string
  year: string
  title: string
  description: string
  image: string
  tags: string[]
  status: string
  ref?: string
  fullref?: string
}

// Latest project data
export const latestProject: CurrentProjectData = {
  month: "Jan",
  year: "2025",
  title: "Advanced Physics Research Project",
  description:
    "Leading a groundbreaking research initiative exploring quantum mechanics and particle physics at the University of Waterloo.",
  image: "/physics-laboratory-equipment.jpg",
  tags: ["Research", "Physics"],
  status: "Update",
}

// Tag color mapping function
export const getTagColor = (tag: string): string => {
  switch (tag) {
    case "Research":
      return "bg-indigo-100 text-indigo-700 border border-indigo-300"
    case "Physics":
      return "bg-gray-100 text-gray-700 border border-gray-300"
    default:
      return "bg-gray-100 text-gray-700 border border-gray-300"
  }
}
