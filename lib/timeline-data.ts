/**
 * Timeline Data and Utilities
 *
 * This file contains all timeline event data, interfaces, and utility functions
 * for the timeline page. It's separated from the main page component for better
 * organization and maintainability.
 */

/**
 * Available Tags for Timeline Events:
 *
 * - Personal Project, Research, Competition, Athletic Competition, Publication, Certification, Volunteering, Group, Physics
 * - Education, Award, Technology
 *
 * Note: Tags are case-sensitive and should match exactly as listed above.
 * Add new tags to the getTagColor function with appropriate color schemes.
 */

export interface TimelineEvent {
  id: number
  month: string
  year: string
  title: string
  description: string
  detailedDescription: string
  image: string
  tags: string[]
  status: "Started" | "Ended" | "Update" | "Completion"
  statusId?: string
  ref?: string // Short reference text to display on image (e.g., "taken from UW page")
  fullref?: string // Full reference link to display below description in modal
}

export const timelineEvents: TimelineEvent[] = [
{
    id: 16,
    month: "Oct",
    year: "2025",
    title: "Cryogenic and Compressed Gas Safety",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Certification", "Research" ],
    status: "Completion",
  },
{
    id: 15,
    month: "Oct",
    year: "2025",
    title: "Completed the ESMS Safety",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Certification", "Research" ],
    status: "Completion",
  },
{
    id: 14,
    month: "Oct",
    year: "2025",
    title: "Completed WHMIS 2015",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Certification", "Research" ],
    status: "Completion",
  },
{
    id: 13,
    month: "Oct",
    year: "2025",
    title: "Volunterring as a Undergraduate Student Cohert Rep",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Volunteering" ],
    status: "Started",
  },
{
    id: 12,
    month: "Oct",
    year: "2025",
    title: "Joined rocketry divison",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Competition", "Group" ],
    status: "Update",
    statusId: "rocketry",
  },
  {
    id: 11,
    month: "Oct",
    year: "2025",
    title: "Finished nasa space app",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Competition", "Group" ],
    status: "Ended",
  },
{
    id: 10,
    month: "Oct",
    year: "2025",
    title: "NASA space app comp",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Competition", "Group" ],
    status: "Update",
    statusId: "rocketry",
  },
{
    id: 9,
    month: "Oct",
    year: "2025",
    title: "Joined rocketry",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Volunteering", "Competition", "Group" ],
    status: "Started",
  },
{
    id: 9,
    month: "Sept",
    year: "2025",
    title: "Started 2A term",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Education"],
    status: "Started",
    statusId: "edusem",
  },
{
    id: 8,
    month: "Aug",
    year: "2025",
    title: "Update for math and matter",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Education", "Personal Project" ],
    status: "Update",
    statusId: "obi",
  },
{
    id: 7,
    month: "June",
    year: "2025",
    title: "Started math & matter",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Education", "Personal Project" ],
    status: "Started",
    statusId: "obi",
  },
{
    id: 6,
    month: "Apr",
    year: "2025",
    title: "Finished 1B term",
    description: "fin",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Education"],
    status: "Ended",
    statusId: "edusem",
  },
{
    id: 6,
    month: "Feb",
    year: "2025",
    title: "Competed in the 2025 Refridge-Eighter Race",
    description: "Competed against 200+ people in a 5km + 8mi race in the cold winter",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Athletic Competition" ],
    status: "Completion",
  },
  {
    id: 5,
    month: "Jan",
    year: "2025",
    title: "Started my 1B Term",
    description: "Began my winter 1B term",
    detailedDescription: "hhhh",
    image: "2sem.jpg",
    tags: ["Education"],
    status: "Started",
    statusId: "edusem",
  },
  {
    id: 4,
    month: "Dec",
    year: "2024",
    title: "Wrapped up my 1A Term",
    description: "Finished my challenging 1A term ",
    detailedDescription: "hhhh",
    image: "1sem.jpg",
    tags: ["Education"],
    status: "Ended",
    statusId: "edusem",
    ref: "Taken from the UW Physics & Astronomy Page",
    fullref: "https://uwaterloo.ca/physics-astronomy/about-physics-and-astronomy",
  },
  {
    id: 3,
    month: "Oct",
    year: "2024",
    title: "Competed in the 2024 Fall 5km Classic ",
    description: "Raced against 600+ people resulting in 7th (for my age bracket)",
    detailedDescription:
      "The Fall 5km Classic is a race run by over 600 people. It was my first race away from home. Luckily, I was joined by many students who were hosted by Prof. Heidi Engelhardt and the University of Waterloo in transporting all of us to the race spot. Although I expected to get a finishing placement (and get another medal), I finished in 7th place for my overall age bracket, which I was pretty happy with. ",
    image: "fallrace.jpg",
    tags: ["Athletic Competition"],
    status: "Completion",
  },
  {
    id: 2,
    month: "Sept",
    year: "2024",
    title: "Started My First Semester at the University of Waterloo",
    description: "Began my undergraduate physics journey (1A semester)",
    detailedDescription:
      "I Started my journey in my undergraduate studies in physics (Honours Physics). This semester starts my 1A term, where I will take Calculus-Based Physics 1 (PHYS 121), Physics 1 laboratory (PHYS 121L), Calculus 1 (MATH 127), Communications for Physicists (ENGL 193), Principles of Computing for Science (CS 114) and Introduction to Earth Science (EARTH 121). This semester, I hope to make new connections and adapt well to university life and strengthen my academic foundation.",
    image: "1sem.jpg",
    tags: ["Education"],
    status: "Started",
    statusId: "edusem",
  },
  {
    id: 1,
    month: "May",
    year: "2024",
    title: "Competed in the 2024 Spring Fling Competition",
    description: "Placed second in the 2024 Spring Fling Competition",
    detailedDescription:
      "The 2024 Spring Fling Competition is an experimental-based competition against students in my cohort and beyond our school. This competition requires students to design a device that flings springs off to hit specified targets. Then, during the main competition, groups of two are timed and given random angles and distances they must launch the spring. During preparation, students must take into account the limitations of approximations and management to succeed.\n\nMy partner and I created a 3-angle spring system out of wood pieces and used measurements to create precise launching points (which, looking back, I wish I had taken a photo of). We bought a spring from Home Depot to experimentally calculate the spring constant. We relied on the approximation of Hook's laws and projectile motion to derive the spring constant. From that, we used Hook's law and projectile motion to predict the pullback and angle to reach specified points. During our preparation, we attempted not to use the spring as much as possible, as that would change the spring constant over time.\n\nDuring the competition, we scored 13 points, 2 points lower than the first place. We also placed 2nd place in design, accumulating 33/40 total points from judges. This was a great competition to finish off high school, and it propelled me further into pursuing my experimental career.",
    image: "fling.jpg",
    tags: ["Competition", "Group"],
    status: "Completion",
  },
]

export const getTagColor = (tag: string) => {
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

export const getStatusColor = (status: "Started" | "Ended" | "Update" | "Completion") => {
  switch (status) {
    case "Started":
      return "bg-green-500 text-white"
    case "Ended":
      return "bg-green-700 text-white"
    case "Update":
      return "bg-blue-500 text-white"
    case "Completion":
      return "bg-purple-500 text-white"
  }
}

// Quick search data for the timeline page
export const quickSearchData = {
  topics: [
    { label: "Research", query: "Research" },
    { label: "Awards", query: "Award" },
    { label: "Publications", query: "Publication" },
    { label: "Technology", query: "Technology" },
  ],
  tags: [
    { label: "Personal Projects", tag: "Personal Project" },
    { label: "Education", tag: "Education" },
    { label: "Certifications", tag: "Certification" },
    { label: "Volunteering", tag: "Volunteering" },
  ],
  events: [
    { label: "Physics Research", query: "Advanced Physics Research" },
    { label: "Teaching Assistant", query: "Teaching Assistant" },
    { label: "Simulation Platform", query: "Simulation Platform" },
    { label: "Science Communication", query: "Science Communication" },
  ],
}
