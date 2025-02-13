interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  clicks: number;
}

export default function ProjectCard({
  name,
  image,
  description,
  clicks,
}: ProjectCardProps) {
  return (
    <div className="w-[360px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src={image} alt="Projeto" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          {clicks} cliques
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold">{name}</span>
          <span className="text-content-body text-sm">{description}</span>
        </div>
      </div>
    </div>
  );
}
