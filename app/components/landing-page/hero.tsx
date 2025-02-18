import TextInput from "@/app/components/ui/text-input";
import { Github, Instagram, Linkedin, Phone, Plus } from "lucide-react";
import ProjectCard from "../commons/project-card";
import TotalVisits from "../commons/total-visits";
import Button from "../ui/button";

export default function Hero() {
  const icons = [Github, Instagram, Linkedin, Phone, Plus];
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Construa sua página de projetos e mostre suas criações para o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques.
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">portlyze.com</span>
          <TextInput placeholder="Seu link" />
          <Button>Criar agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="w-[348px] flex flex-col gap-3 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
          {/* <UserCard profileData={undefined} isOwner={false} /> */}
          <div className="size-48">
            <img
              src="/me.jpeg"
              alt="Aline Buchino"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2">
              <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
                Aline Buchino
              </h3>
            </div>
            <p className="opacity-40">
              "Entusiasta da tecnologia! Desenvolvedora de Software. 👩🏻‍💻"
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="uppercase text-xs font-medium">Links</span>

            <div className="flex gap-3">
              {icons.map((Icon, index) => (
                <button
                  key={index}
                  className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
                >
                  <Icon />
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 w-full h-[160px]">
              <div className="w-full flex flex-col items-center gap-3">
                <Button className="w-full">Newsletter</Button>
                <Button className="w-full">Blog</Button>
                <Button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[6%] left-[calc(90%-200px)]">
            <TotalVisits totalVisits={123} />
          </div>
          {/* <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard
              name="Projeto 2"
              image="/project2.jpg"
              description="Descrição detalhada do projeto"
              clicks={10}
            />
          </div> */}
          <div className="absolute top-[8%] left-[calc(55%-200px)] -z-10">
            <ProjectCard
              project={{
                id: "1",
                userId: "1",
                projectName: "Projeto de Teste",
                projectDescription: "Descrição do projeto",
                projectUrl: "Url teste",
                imagePath: "/project1.jpg",
                createdAt: "17.02.2015",
                totalVisits: 10,
              }}
              isOwner={true}
              img="/project1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
