import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Basit Adebisi</span>
            </h1>
            <p className="max-w-[500px] text-gray-300 mb-9">
              I excel at crafting seamless user experiences, building robust web
              applications and I am proficient in various programming languages
              and modern web technologies.
            </p>
            {/* btns and links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/cv/basit.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV as PDF"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="flex items-center gap-2 uppercase focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="text-xl">Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              {/* Socials  */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>
          {/* Photo Content */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
