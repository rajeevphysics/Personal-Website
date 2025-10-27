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
    title: "Completed Cryogenic and Compressed Gas Safety Certification",
    description: "Finished Cryogenic and Compressed Gas Safety Certification",
    detailedDescription: "Cryogenic and compressed safety are the standard practices for using compressed gases and cryogens. This was done specifically for rocktry requirements, in the event that I will need to use a gas or cryogen. ",
    image: "csafty.jpeg",
    tags: ["Certification", "Research" ],
    status: "Completion",
  },
{
    id: 15,
    month: "Oct",
    year: "2025",
    title: "Completed ESMS Safety Certification",
    description: "Finished the Engineering Student Machine Shop Safety Certification",
    detailedDescription: "The engineering student machine shop is a shop similar to the science shop in that you go to warp, bend or cut materials. Like any design shop, there are safety requirements that need to be completed, which I have done. This was done for my rocktry safety requirements in the event that I need to make something out of materials that require machinery. ",
    image: "eshop.jpg",
    tags: ["Certification", "Research" ],
    status: "Completion",
  },
{
    id: 14,
    month: "Oct",
    year: "2025",
    title: "Completed WHMIS 2015 Certification",
    description: "Finished WHMIS 2015 certification for handling hazardous materials",
    detailedDescription: "WHMIS 2015 is the standard procedure and precautions that anyone should be aware of when handling chemicals that could be dangerous to humans or materials. I have completed WHMIS 2015 for my requirements for rocktry, but it is also applicable to research and industry. ",
    image: "wsafty.jpeg",
    tags: ["Certification", "Research" ],
    status: "Completion",
  },
{
    id: 13,
    month: "Oct",
    year: "2025",
    title: "Volunterring as a Undergraduate Student Cohert Rep",
    description: "Began volunteering as a UG student cohort representative for the University of Waterloo Physics & Astronomy department",
    detailedDescription: "The undergraduate student representatives are a group of students who represent their year (cohort) in providing feedback to administrators. Some types of feedback representatives are expected to give are course feedback, news & announcements, and general academic workflows.\n\nI joined as a UG rep to help provide feedback to improve future cohorts and improve our own cohort experience through undergraduate studies. ",
    image: "uwat2.jpg",
    tags: ["Volunteering" ],
    status: "Started",
    ref: "Image taken from the University of Waterloo Page",
    fullref: "https://uwaterloo.ca/about/history",
  },
{
    id: 12,
    month: "Oct",
    year: "2025",
    title: "Joined Rocketry Payload Subteam",
    description: "Joined the Payload subteam of the University of Waterloo's Rocketry Student Design Team",
    detailedDescription: "I have joined the Payload division of rocketry. Payload is a subteam whose main goal is to design a competitive experiment that can be flown at the launch in Canada, measuring and receiving data thousands of meters in the air.\n\nLast year's payload experiment was a deployable Fourier-transform spectrometer for the 2-5 micron range. This experiment aimed to find greenhouse gases in the atmosphere through observing and interfering lwith ight.\n\nPayload is its own beast who have to maintain and run their own mechanical design, software, electrical and recovery to fit inside the rocket. I want to join Payload since I want to get my hands dirty in doing some experimental work. \n\nThis year's experiment is a fibre optics gyroscope that will sit and stay inside the main rocket. It will send and receive data from the ground station and will run from the start to the end of the rocket launch. ",
    image: "wrocket2.jpg",
    tags: ["Competition", "Group" ],
    status: "Update",
    statusId: "rocketry",
    ref: "Image taken from CBC News",
    fullref: "https://www.ctvnews.ca/kitchener/article/university-of-waterloo-students-aim-for-the-stars-with-canadas-first-ever-liquid-rocket/",
  },
  {
    id: 11,
    month: "Oct",
    year: "2025",
    title: "Completed NASA Space App Competition",
    description: "Finished and presented our project for the NASA Space App Competition",
    detailedDescription: "My team, consisting of three members (including me), has created a working app and machine learning model. The machine learning model was taught using two NASA data sets leading to an accuracy rating of approximately 80%. Our goal from the start was to create an app that was interactive and usable for the average person as well as researchers.\n\nOur site is built with React, 3.js and Next.js was designed to show the users how the plants behaved and compared to their star. Our site communicated with our machine learning model via FASTAPI. For researchers, our website was designed to take CSV-style inputs to communicate with our machine learning effectively, to reduce lag between input and output.\n\nAlthough we didn't win the final awards, this hackathon has taught me very unique solutions to problems I faced during the hackathon. I found that many of our problems relied solely on communication issues and poor planning. Poor planning could have been addressed beforehand by creating a better map of what needed to be done. As well, more time should have been dedicated to preparing for our pitch, which would have lowered the unnecessary stress faced in the two days. Communicating ideas and critiques should have been better vocalized, and it is something I am always trying to improve. ",
    image: "nasaapp2.jpeg",
    tags: ["Competition", "Group" ],
    status: "Ended",
    statusId: "nasa",
    ref: "Image taken from NASA Space App Competition Website",
    fullref: "https://science.nasa.gov/uncategorized/2025-nasa-space-apps/",
  },
{
    id: 10,
    month: "Oct",
    year: "2025",
    title: "Started NASA Space App Competition",
    description: "Began working on the NASA Space App Competition with a team of 3 other students",
    detailedDescription: "The NASA space app competition is a yearly competition hosted by NASA along with 20+ other space agencies, including the Canadian Space Agency. The goal is to use NASA datasets to create an app that researchers, learners, and the general public can all use. Each year, this competition gives competitors a choice of a general app idea, along with data sets that must be used in some way to create something. Then, competitors must pitch their project to a team of NASA astromers, where a winner is chosen locally (Waterloo) and globally.\n\n Our chosen challenge is A World Away: Hunting for Exoplanets with AI, which has competitors create an app that takes a user's input and outputs a predicted value, whether given variables represent an exoplanet or not. \n\nOur plan is to train a machine learning model using sets of given datasets, and create a website to provide interactivity and convenience for larger datasets.",
    image: "nasaapp.jpg",
    tags: ["Competition", "Group" ],
    status: "Started",
    statusId: "nasa",
    ref: "Image taken from NASA Space App Competition Website",
    fullref: "https://science.nasa.gov/uncategorized/2025-nasa-space-apps/",
  },
{
    id: 9,
    month: "Oct",
    year: "2025",
    title: "Joined Rocketry Student Design Team",
    description: "Became a member of the University of Waterloo's Rocketry Student Design Team",
    detailedDescription: "Rocktry is a student design team (managed and run by students) that is based on an international competition on building, designing, and testing rockets. The competition is based on which team can create a rocket which reaches the highest distances, while taking into account the competition's rules.\n\n This is a massive undertaking for students who have to secure funding and build and test a rocket from scratch. So many subteams manage different parts of the rocket. Some subsystems are mainframe, which are responsible for creating the cover of the rocket, software for the software of the rocket, recovery for bringing the rocket back down safely, and electrical for building circuits and batteries. \n\n I’m not sure which subteam I will be joining, but my goals are to help maintain, experiment and run a rocket. ",
    image: "rocket1.jpg",
    tags: ["Volunteering", "Competition", "Group" ],
    status: "Started",
    ref: "Image taken from Rocktry UW Page",
    fullref: "https://uwaterloo.ca/mechanical-mechatronics-engineering/news/waterloo-rocketry-team-launches-canadas-first-liquid-rocket",
  },
{
    id: 9,
    month: "Sept",
    year: "2025",
    title: "Started 2A semester term",
    description: "Began my fall 2A term",
    detailedDescription: "The beginning of my 2A semester is starting soon. I will be taking Optics (PHYS 256), Calculus 3 (MATH 227), Differential equations (MATH 227), Linear Algebra and computational methods (PHYS 249) and Intermediate Physics Laboratory (PHYS 260A) and Earth Sciences (EARTH 122).\n\nThis semester, I hope to better balance between study, research, projects, clubs, and being a human. I want to get my hands involved in doing something, whether that means doing a student design team, and/or research. ",
    image: "1sem.jpg",
    tags: ["Education"],
    status: "Started",
    statusId: "edusem",
  },
{
    id: 8,
    month: "Aug",
    year: "2025",
    title: "V1.1.2 of Math & Matter Released",
    description: "Released V1.1.2 of my Math & Matter educational website, last update before starting 2A semester",
    detailedDescription: "My 2A semester begins soon, and the last major update for Math & Matter is V.1.1.2, where most concepts from calculus 1, physics 1 & 2, and linear algebra of complete on my website. I have gotten amazing feedback from my community on making physics concepts easier to understand. \n\nStudents who use my site to help them derive and understand equations and proofs say it saves them a lot of time. Most of the time, it's not that they don't understand how to do rigorous derivations or proofs, but rather that they are missing some assumption that is necessary for completing the derivation or proof. \n\nI still have quite a lot of work left to do. Only about ¾ of my first year content is complete on the page.",
    image: "mmath2.png",
    tags: ["Education", "Personal Project" ],
    status: "Update",
    statusId: "obi",
  },
{
    id: 7,
    month: "June",
    year: "2025",
    title: "Started Math & Matter Educational Project",
    description: "Started a personal project to create a website condensing first-year math and physics knowledge",
    detailedDescription: "While I was learning first-year topics, specifically physics topics like mechanics and electrodynamics. As well as mathematical topics like calculus 2, proofs and assumptions, I found it increasingly difficult to find relevant videos or readable websites that explain these concepts. I found 9/10 times it wasn't that I wasn't understanding how to derive or prove something, but rather I was missing or not using a relevant assumption. \n\nMy summer project is to condense all my first-year knowledge and attempt to derive and prove mathematical equations as pages on a website. Unlike normal websites, I will be creating a clean user interface, allowing users to move quickly along my website. While showing users the assumptions, which will help users better understand the equations and where they came from.",
    image: "mmath1.jpg",
    tags: ["Education", "Personal Project" ],
    status: "Started",
    statusId: "obi",
  },
{
    id: 6,
    month: "Apr",
    year: "2025",
    title: "Finished 1B term",
    description: "Finished a challanging 1B term, marking the end of my first year at university",
    detailedDescription: "Wrapping up my 1B term has taught me quite of lot of academic improvements and things I want to improve on in my later years. My most challenging, but rewarding, course was my modern physics course led by Prof. Epp. \n\nThe course's main goal was to survey and teach the introduction of each part of physics. The idea is that first-year students (people like me) get a better idea of what they want to pursue in their later years. This was my most mathematical introduction to condensed matter physics and nuclear physics, which I found interesting. \n\nThis semester, I found myself attempting to teach myself condensed matter topics like Josephen junctions, and reading on the causes of a nuclear meltdown on the quantum level. \n\n Next semester, I hope to improve my studying techniques. I feel I wasted a lot of my time studying at low efficiency. As well, I wasn't able to commit time to clubs and projects. I hope during the break I can address my studying concerns and cut enough time to commit on clubs, projects and research next term.",
    image: "wintersem.jpg",
    tags: ["Education"],
    status: "Ended",
    statusId: "edusem",
    ref: "Photo taken from the Waterloo Wikipedia Page",
    fullref: "https://en.wikipedia.org/wiki/University_of_Waterloo_station",
  },
{
    id: 6,
    month: "Feb",
    year: "2025",
    title: "Competed in the 2025 Refridge-Eighter Race",
    description: "Competed against 200+ people in a 5km + 8mi race in the cold winter",
    detailedDescription: "The refridge-eighter race is a yearly running competition that runs during the peak of winter. It involves running 8 miles in the cold, which brings on unique challenges of preparing and competing. I wanted to compete in this competition, not to compete for placement, but just to experience the “crazy people” running event. \n\nIt was, in fact, the crazy people running event, where it was peaking -20 degrees with very windy conditions. Thankfully, I completed the race unharmed and got a cool medal. Running during the winter is definitely fun when it’s up to me when I want to run, but being at the mercy of the weather is not so fun.",
    image: "wrace.jpeg",
    tags: ["Athletic Competition" ],
    status: "Completion",
  },
  {
    id: 5,
    month: "Jan",
    year: "2025",
    title: "Started my 1B Term",
    description: "Began my winter 1B term",
    detailedDescription: "My 1B semester marks the first semester I will take during a winter term. The courses taken this semester are Calculus-Based Physics 2 (PHYS 122), Physics 2 laboratory (PHYS 122L), Calculus 2 (MATH 128), Linear Algebra (MATH 114), Modern Physics (PHYS 124) and Introductory Measurement Lab (PHYS 160L)\n\nI’m most excited about taking the introductory measurement lab, which will teach me techniques and sequences for conducting experimental work. Additionally, this semester, I hope to improve my study techniques. I found that last semester I was wasting quite a lot of time, and my studying technique was slow. I also found I wasn't having a deep understanding of materials, which is likely why I wasn't getting the grades I wanted to. ",
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
    detailedDescription: "Ended an interesting first semester at the University of Waterloo. This semester, my goals were to make new connections while maintaining my academics. Although I made a lot of new friends, I found it challenging to study efficiently. \n\nNext semester, I would want to figure out a better studying technique, so I can spend more time doing things outside of studying.",
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
    { label: "Competition", query: "Competition" },
  ],
  tags: [
    { label: "Personal Projects", tag: "Personal Project" },
    { label: "Education", tag: "Education" },
    { label: "Certifications", tag: "Certification" },
    { label: "Volunteering", tag: "Volunteering" },
  ],
  events: [
    { label: "Math & Matter Educational Project", query: "Math & Matter" },
    { label: "NASA Space App Competition", query: "NASA Space App Competition" },
    { label: "Waterloo Rocktry Team", query: "Rocktry" },
  ],
}
