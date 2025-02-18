"use client";

import createSocialLinks from "@/app/actions/create-social-links";
import { Github, Instagram, Linkedin, Loader, Phone, Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import Button from "../../ui/button";
import Modal from "../../ui/modal";
import TextInput from "../../ui/text-input";

export default function EditSocialLinks({
  socialMedias,
}: {
  socialMedias?: {
    github: string;
    instagram: string;
    linkedin: string;
    phone: string;
  };
}) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavingSocialLinks, setIsSavingSocialLinks] = useState(false);

  const [github, setGithub] = useState(socialMedias?.github || "");
  const [linkedin, setLinkedin] = useState(socialMedias?.linkedin || "");
  const [instagram, setInstagram] = useState(socialMedias?.instagram || "");
  const [phone, setPhone] = useState(socialMedias?.phone || "");
  const [loading, setLoading] = useState(false);

  const { profileId } = useParams();

  async function handleAddSocialLinks() {
    setLoading(true);
    setIsSavingSocialLinks(true);

    if (!profileId) return;

    await createSocialLinks({
      profileId: profileId as string,
      github,
      linkedin,
      instagram,
      phone,
    });

    startTransition(() => {
      setIsModalOpen(false);
      setIsSavingSocialLinks(false);
      router.refresh();
    });
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
      >
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">
            Adicionar redes sociais
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 w-full">
              <Github />
              <TextInput
                type="text"
                placeholder="Link Github"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <Linkedin />
              <TextInput
                type="text"
                placeholder="Link LinkedIn"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <Instagram />
              <TextInput
                type="text"
                placeholder="Link Instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <Phone />
              <TextInput
                type="text"
                placeholder="Número para contato"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="font-bold text-white"
            >
              Voltar
            </button>
            <Button
              onClick={handleAddSocialLinks}
              disabled={loading && isSavingSocialLinks}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                </div>
              ) : (
                "Salvar"
              )}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
