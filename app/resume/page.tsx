"use client";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiCloudflare,
  SiDjango,
  SiExpress,
  SiFlask,
  SiGooglecloud,
  SiGrafana,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiPm2,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const aboutMe: {
  title: string;
  description: string;
  items: { title: string; details: string }[];
} = {
  title: "About Me",
  description:
    "I am a passionate Full Stack Developer with expertise in building dynamic web applications.",
  items: [
    {
      title: "Location",
      details: "Ibadan, Nigeria",
    },
    {
      title: "Email",
      details: "adebisiakinade.123@gmail.com",
    },
    {
      title: "Phone",
      details: "+2349075341378",
    },
    {
      title: "Experience",
      details: "5+ years ",
    },

    { title: "Nationality", details: "Nigerian" },
    {
      title: "Languages",
      details: "English, Yoruba, Japanese",
    },
  ],
};
const education: {
  title: string;
  description: string;
  items: {
    school: string;
    degree: string;
    duration: string;
    location: string;
  }[];
} = {
  title: "My Education",
  description: "My educational background",
  items: [
    {
      school: "New Horizons Computer Learning Center",
      degree: "Diploma in Fullstack Web Development",
      duration: "February 2022 - November 2022",
      location: "Ibadan, Oyo State",
    },
    {
      school: "Udemy",
      degree: "Diploma in Web Development",
      duration: "December 2022 - April 2023",
      location: "San Francisco, CA",
    },
    {
      school: "Harvard University CS50",
      degree: "Post High School Education in Computer Science",
      duration: "June 2023 - March 2024",
      location: "Cambridge, MA",
    },
  ],
};

const experience: {
  icon: string;
  title: string;
  description: string;
  items: {
    company: string;
    position: string;
    location: string;
    duration: string;
  }[];
} = {
  icon: "asset/experience-icon.png",
  title: "My Experience",
  description:
    "Over the years, I have worked on various projects that have honed my skills in web development. Here are some of the key experiences:",
  items: [
    {
      company: "AHAPN [ahapnng.org]",
      position: "Full stack Developer",
      location: "Remote",
      duration: "April 2025 - Ongoing",
    },
    {
      company: "The Kaizen Brand [shop.kaizenbrand.shop]",
      position: "Full stack Developer",
      location: "Remote",
      duration: "June 2023 - March 2025",
    },
    {
      company: "Travaye [travaye.ng]",
      position: "Full stack Developer",
      location: "Remote",
      duration: "November 2022 - May 2023",
    },
    {
      company: "Curator [curator-murex.vercel.app/login]",
      position: "Full stack Developer",
      location: "Ibadan, NG",
      duration: "July 2022 - October 2022",
    },
  ],
};

const skills: {
  title: string;
  description?: string;
  items: { name: string; icon: React.ReactNode }[];
} = {
  title: "My Skills",
  description: "A list of my technical skills and tools I am proficient in.",
  items: [
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaGoogle />, name: "Google Cloud" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiGooglecloud />, name: "Google Cloud" },
    { icon: <SiGrafana />, name: "Grafana" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiPm2 />, name: "PM2" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
  ],
};
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.18, delay: 0.12, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          {/* Content  */}
          <div className="min-h-[70px] w-full">
            <TabsContent
              value="about"
              className="w-full  text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{aboutMe.title}</h3>
                <p className="max-w-[600px] text-gray-300 mx-auto xl:mx-0">
                  {aboutMe.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutMe.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-gray-300">{item.title}</span>
                      <span className="text-xl">{item.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-cent xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-gray-300 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4"
                      >
                        <span className="text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left ">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot  */}
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-gray-300 leading-none">
                            {item.school}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-cent xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-gray-300 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot  */}
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-gray-300">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  {" "}
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-gray-300 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4  xl:gap-[30px]">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="capitalize">
                            {item.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
