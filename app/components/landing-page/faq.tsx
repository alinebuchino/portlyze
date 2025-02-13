const faqItems = [
  {
    title: "Como posso criar meu portfólio e página de links com o Portlyze?",
    description:
      "Com o Portlyze, criar um portfólio profissional e uma página de links é rápido e fácil. Oferecemos templates 100% personalizáveis e uma interface intuitiva para que você possa exibir seu trabalho e organizar seus links de maneira eficiente e única.",
  },
  {
    title: "Existe algum teste gratuito para eu experimentar a plataforma?",
    description:
      "Sim, você pode aproveitar nosso teste gratuito de 3 dias! Explore todas as funcionalidades da plataforma, sem compromisso, e veja por que o Portlyze é a escolha certa para você.",
  },
  {
    title: "Posso deixar meu portfólio com a minha cara?",
    description:
      "Com certeza! O Portlyze oferece total liberdade para você personalizar seu portfólio. Ajuste cores, fontes e o layout para que seu portfólio reflita a sua marca e personalidade de forma única.",
  },
  {
    title: "Preciso saber programação para usar o Portlyze?",
    description:
      "Não, a nossa plataforma foi feita para ser super fácil de usar! Você pode criar e personalizar seu portfólio e página de links sem precisar de nenhum conhecimento técnico. É tudo muito simples e intuitivo.",
  },
  {
    title:
      "E se eu decidir cancelar minha assinatura? O que acontece com meu conteúdo?",
    description:
      "Você pode cancelar sua assinatura a qualquer momento. Seu portfólio e página de links continuarão disponíveis até o fim do período pago, mas após isso, as funcionalidades premium serão desativadas. Não se preocupe, você ainda terá acesso ao seu conteúdo!",
  },
  {
    title: "Posso compartilhar meu portfólio nas redes sociais?",
    description:
      "Sim! Compartilhar seu portfólio e página de links nas redes sociais nunca foi tão fácil. Basta gerar um link personalizado e você está pronto para mostrar seu trabalho ao mundo!",
  },
];

export default function FAQ() {
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Dúvidas frequentes</h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border borber border-border-primary bg-background-primary">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  );
}
