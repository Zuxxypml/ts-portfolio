"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// This component renders social media links
// You can customize the icons and links as needed
const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/zuxxypml",
  },
  {
    icon: <FaLinkedin />,
    link: "http://linkedin.com/in/basit-adebisi-a7190537b",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/0k4g3",
  },
];

export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string;
  iconStyles?: string;
}) {
  return (
    <div className={` ${containerStyles}`}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={` ${iconStyles}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
