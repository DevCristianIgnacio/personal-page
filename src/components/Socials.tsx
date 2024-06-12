"use client";
import Link from "next/link";
import path from "path";
import React, { FC } from "react";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill size={24} />,
  },
  {
    path: "/",
    name: <RiLinkedinFill size={24} />,
  },

  {
    path: "/",
    name: <RiGithubFill size={24} />,
  },
  {
    path: "/",
    name: <RiInstagramFill size={24} />,
  },
];

interface socialProps {
  containerStyles: string;
  iconsStyles: string;
}

const Socials: FC<socialProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
