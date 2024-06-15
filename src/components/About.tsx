//External Imports
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  User2,
} from "lucide-react";
//Local Imports
import DevImg from "./DevImg";
//UI Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Name",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Email",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Location",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Education",
  },
  {
    icon: <Calendar size={20} />,
    text: "DayLiving",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Skills",
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "NestJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        univeristy: "XYZ University",
        subtitle: "Computer Science",
        years: "2017-2021",
      },
      {
        univeristy: "ABC College",
        subtitle: "High School",
        years: "2015-2017",
      },
      {
        univeristy: "DEF School",
        subtitle: "Middle School",
        years: "2011-2015",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Company 1",
        role: "Software Engineer",
        years: "2021-2022",
      },
      {
        company: "Company 2",
        role: "Software Engineer",
        years: "2022-2023",
      },
      {
        company: "Company 3",
        role: "Software Engineer",
        years: "2023-2024",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/** Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/** Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="qualification">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
              </TabsList>
              {/** Tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/** Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Mi musica</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Me gusta hacer canciones para disfrutar con las personas
                      que quiero y compartir mis experiencias pasadas y
                      generarle experiencias unicas a la gente que me escucha,
                      nuevas experiencias con la musica que hago y que escucho
                      con mis amigos
                    </p>
                    {/** Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/** Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Styles</div>
                      <div className="border-b border-border"></div>
                      <div>VIVO HIP HOP VIVO TRAP</div>
                    </div>
                  </div>
                </TabsContent>
                {/** Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    {/** skills */}
                    <h3 className="h3 mb-8">Tools I use</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/** Skill list */}
                      <div>
                        {getData(skillData, "Skills")?.data.map(
                          (item: any, index: any) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div></div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/** Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/** Tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "Tools")?.data.map(
                          (item: any, index: any) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt="tool"
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/** Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Ultimos Lanzamientos
                    </h3>
                    {/** albums & boots wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/** Albums */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience")?.title}
                          </h4>
                        </div>
                        {/** List */}
                        <div className="flex  flex-col gap-y-8">
                          {getData(qualificationData, "Experience")?.data.map(
                            (item: any, index: any) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/** Sencillos */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education")?.title}
                          </h4>
                        </div>
                        {/** List */}
                        <div className="flex  flex-col gap-y-8">
                          {getData(qualificationData, "Education")?.data.map(
                            (item: any, index: any) => {
                              const { university, subtitle, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {subtitle}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
