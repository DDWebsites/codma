"use client";
import SectionTitle from "@/components/reusable/SectionTitle";
import Image from "next/image";
import { Award, Target, Users } from "lucide-react";
import aboutImage from "@/public/about.jpg";
import { StatsProps } from "@/types";

export default function About() {
  const AboutStats: StatsProps[] = [
    { number: "+20K", label: "Médecins", icon: <Users className="w-6 h-6" /> },
    {
      number: "+10K",
      label: "Projets complets",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "+30",
      label: "Année d'expérience",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-muted/30 border-t border-b border-border">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center space-between gap-14">
          <div className=" w-[40%] h-[600px] relative hidden lg:block">
            <Image
              src={aboutImage}
              alt="About Us"
              fill
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] gap-10">
            <SectionTitle
              tag="À propos de nous"
              title="Organismes Professionnels et Administratifs de Défense et de Régulation"
              description="Les Conseils de l'Ordre des médecins, des pharmaciens et des chirurgiens dentistes, sont des organismes professionnels, administratifs et juridictionnels de défense et de régulation de ces professions, leur rôle principal est de faire respecter le code de déontologie médicale."
              align="left"
              shrink={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AboutStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 text-center p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.number}
                  </h3>
                  <h5 className="text-sm lg:text-base text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
