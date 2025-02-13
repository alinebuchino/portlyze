import ProjectCard from "@/app/components/commons/project-card";
import TotalVisits from "@/app/components/commons/total-visits";
import UserCard from "@/app/components/commons/user-card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: { profileId: string };
}) {
  const { profileId } = await params;

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green font-bold">
            Faça o upgrade agora!
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard
          name="Projeto 1"
          image="/project1.jpg"
          description="Descrição detalhada do projeto"
          clicks={25}
        />
        <ProjectCard
          name="Projeto 2"
          image="/project2.jpg"
          description="Descrição detalhada do projeto"
          clicks={10}
        />
        <ProjectCard
          name="Projeto 3"
          image="/project3.jpg"
          description="Descrição detalhada do projeto"
          clicks={17}
        />
        <ProjectCard
          name="Projeto 4"
          image="/project4.jpg"
          description="Descrição detalhada do projeto"
          clicks={28}
        />
        <ProjectCard
          name="Projeto 5"
          image="/project5.jpg"
          description="Descrição detalhada do projeto"
          clicks={7}
        />
        <ProjectCard
          name="Projeto 6"
          image="/project6.jpg"
          description="Descrição detalhada do projeto"
          clicks={12}
        />
        <button className="w-[340px] h-[72px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border hover:border-dashed border-border-secondary">
          <Plus className="size-10 text-accent-green" />
          <span>Novo projeto</span>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  );
}
