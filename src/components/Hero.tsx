import Link from "next/link";
import React from "react";
import { Send, Bug } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Button } from "./ui/button";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Cristian Zuñiga
            </div>
            <h1 className="h1 mb-4">
              Este weon es un sicopata pa rapear y pa todo lo que hace
            </h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              No te acerques a el porque te va tirar multisilabicas hasta que te
              aburra
            </p>
            {/** Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  No lo contactes <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <span>CV (Es virus)</span> <Bug size={18} />
              </Button>
            </div>
            {/** Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-22[22px] hover:text-primary transition-all"
            />
          </div>
          {/** Image */}
          <div className="hidden xl:flex relative">image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;