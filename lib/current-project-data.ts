// Current Project Data
// This file contains the data for the current/latest project displayed on the homepage

export interface CurrentProjectData {
  month: string
  year: string
  title: string
  date: number
  description: string
  image: string
  tags: string[]
  status: string
  ref?: string
  fullref?: string
}

// Latest project data
export const latestProject: CurrentProjectData = {
  month: "Oct",
  year: "2025",
  date: 1,
  title: "Joined Rocketry Payload Subteam",
  description:
    "Joined the Payload subteam of the University of Waterloo's Rocketry Student Design Team.",
  image: "wrocket2.jpg",
  tags: ["Voluteering", "Competition", "Group" ],
  status: "Update",
}

// Tag color mapping function
export const getTagColor = (tag: string): string => {
  switch (tag) {
     case "Personal Project":
      return "bg-purple-100 text-purple-700 border border-purple-300"
    case "Research":
      return "bg-indigo-100 text-indigo-700 border border-indigo-300"
    case "Competition":
      return "bg-orange-100 text-orange-700 border border-orange-300"
    case "Athletic Competition":
      return "bg-emerald-100 text-emerald-700 border border-emerald-300"
    case "Publication":
      return "bg-green-100 text-green-700 border border-green-300"
    case "Education":
      return "bg-yellow-100 text-yellow-700 border border-yellow-300"
    case "Award":
      return "bg-pink-100 text-pink-700 border border-pink-300"
    case "Technology":
      return "bg-blue-100 text-blue-700 border border-blue-300"
    case "Certification":
      return "bg-cyan-100 text-cyan-700 border border-cyan-300"
    case "Volunteering":
      return "bg-rose-100 text-rose-700 border border-rose-300"
    case "Group":
      return "bg-teal-100 text-teal-700 border border-teal-300"
    default:
      return "bg-gray-100 text-gray-700 border border-gray-300"
  }
}
