import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { LampContainer } from "./lamp";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "aryan.s22@iiits.in";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const people = [
    {
      key: 1,
      name: "React.js",
      image: "/reactjs.png",
    },
    {
      key: 2,
      name: "Node.js",
      image: "/node.png",
    },
    {
      key: 3,
      name: "MongoDB",
      image: "/mongo2.png",
    },
    {
      key: 4,
      name: "AWS",
      image: "/aws.png",
    },
    {
      key: 5,
      name: "Docker",
      image: "/docker.png",
    },
    {
      key: 6,
      name: "Next.js",
      image: "/1.png",
    },
  ];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,125,47,1) 50%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full sm:h-full min-h-40 flex flex-col p-5 lg:p-5 justify-center"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex flex-row h-full items-center justify-center w-full md:h-full sm:h-full">
              <LampContainer>
                <motion.h1
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="flex h-20 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-medium text-transparent"
                >
                  <AnimatedTooltip items={people} />
                </motion.h1>
              </LampContainer>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
