"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    number: "01",
    title: " Web Development",
    description: "Building responsive and modern websites.",
    link: "/contact",
  },
  {
    number: "02",
    title: " App Development",
    description: "Creating user-friendly interfaces and experiences.",
    link: "/contact",
  },
  {
    number: "03",
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
    link: "/contact",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center  py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.18, delay: 0.12, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <Link
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
              href={service.link}
            >
              {/* top  */}
              <div className="w-full flex items-center justify-between">
                <div className="font-extrabold text-5xl text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.number}
                </div>
                <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </div>
              </div>
              {/* heading  */}
              <h2
                className="font-bold text-[42px] leading-none text-white group-hover:text-accent transition-all duration-500"
                tabIndex={0}
              >
                {service.title}
              </h2>
              {/* description  */}
              <p className=" text-gray-300">{service.description}</p>
              {/* border  */}
              <div className="border-b border-white/20 w-full"></div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
