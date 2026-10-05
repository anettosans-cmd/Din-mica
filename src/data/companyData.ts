export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
  whatsappMessage: string;
}

export interface ValueItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const COMPANY_DATA = {
  name: "Dinâmica Soluções e Serviços para Zona Rural e Urbana",
  shortName: "Dinâmica Soluções e Serviços",
  brandName: "Dinâmica Soluções",
  specialty: "Consultor de Negócios e Criador de Conteúdo Digital",
  institutionalMotto: "TECNOLOGIA, INOVAÇÃO E SOLUÇÕES QUE FAZEM A DIFERENÇA.",
  heroPhrase: "TECNOLOGIA QUE TRANSFORMA.",
  heroPitch: "Transformamos tecnologia, inovação e experiência em soluções práticas para empresas e empreendedores.",
  founder: {
    name: "Armando N. Souto",
    role: "Fundador & Consultor de Negócios",
    experienceYears: 16,
    experienceText: "16 anos de experiência",
    bio: "Há 16 anos, Armando N. Souto, fundador da Dinâmica Soluções e Serviços para Zona Rural e Urbana, transforma experiência e conhecimento do universo digital em soluções práticas, inteligentes e inovadoras para empresas e empreendedores."
  },
  contact: {
    phone: "+55 27 99816-2979",
    displayPhone: "(27) 99816-2979",
    email: "dinamicasolucoes@hotmail.com",
    address: {
      street: "Rua Presidente Costa e Silva, nº 78",
      neighborhood: "Centro",
      city: "Marechal Floriano",
      state: "ES",
      stateFullName: "Espírito Santo",
      cep: "29255-000",
      full: "Rua Presidente Costa e Silva, nº 78, Centro, Marechal Floriano/ES - CEP 29255-000"
    }
  },
  links: {
    whatsapp: "https://wa.me/5527998162979?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20digitais%20da%20Din%C3%A2mica!",
    instagram: "https://www.instagram.com/dinamicasolucoesmf/",
    facebook: "https://www.facebook.com/dinamicasolucoesmf/",
    googleReview: "https://g.page/r/CXIudG-7HZO0EBM/review",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Rua+Presidente+Costa+e+Silva+78+Centro+Marechal+Floriano+ES+29255-000",
    officialLogoUrl: "https://i.postimg.cc/sfM4Mk8b/Dinamica-Solucoes-e-Servicos-logo-20261003190332.jpg"
  },
  about: {
    paragraphs: [
      "Há 16 anos, Armando N. Souto, fundador da Dinâmica Soluções e Serviços para Zona Rural e Urbana, transforma experiência e conhecimento do universo digital em soluções práticas, inteligentes e inovadoras para empresas e empreendedores.",
      "Nossa missão é proporcionar aos nossos clientes muito mais do que serviços digitais: buscamos criar experiências que simplificam processos, ampliam a visibilidade dos negócios e aproximam empresas de seus clientes.",
      "Atuamos com soluções em mídia digital, presença empresarial no Google, Google Business Profile (Google Meu Negócio) e outras ferramentas desenvolvidas para trazer mais visibilidade, praticidade, comodidade e eficiência ao dia a dia dos negócios.",
      "Acreditamos que tecnologia só tem verdadeiro valor quando facilita a vida, gera oportunidades e produz resultados.",
      "Por isso, cada solução da Dinâmica é pensada para unir inovação, funcionalidade e atendimento personalizado, acompanhando a evolução do mercado e as novas necessidades de nossos clientes."
    ]
  },
  proposito: {
    statement: "Facilitar a jornada de empresas e empreendedores no mundo digital, transformando tecnologia em oportunidades, visibilidade e resultados.",
    pillars: [
      {
        word: "OPORTUNIDADES",
        description: "Abrir portas para novos negócios através do posicionamento estratégico no mercado digital."
      },
      {
        word: "VISIBILIDADE",
        description: "Colocar sua empresa exatamente onde seus clientes ideais estão procurando por serviços e produtos."
      },
      {
        word: "RESULTADOS",
        description: "Garantir impacto real, conversão de contatos e crescimento consistente para o negócio."
      }
    ]
  },
  missao: {
    statement: "Oferecer soluções digitais inteligentes, práticas e personalizadas que simplifiquem processos, fortaleçam a presença empresarial e aproximem nossos clientes de seus consumidores."
  },
  visao: {
    statement: "Ser uma referência em soluções digitais e presença empresarial, reconhecida pela inovação, confiança, atendimento personalizado e capacidade de transformar tecnologia em resultados para negócios da zona rural e urbana."
  },
  valores: [
    {
      title: "Inovação e Simplicidade",
      subtitle: "Tecnologia Prática",
      description: "Usamos a tecnologia para criar soluções práticas e inteligentes.",
      iconName: "Sparkles"
    },
    {
      title: "Excelência e Confiança",
      subtitle: "Compromisso e Ética",
      description: "Trabalhamos com qualidade, ética, transparência e compromisso.",
      iconName: "ShieldCheck"
    },
    {
      title: "Cliente e Resultados",
      subtitle: "Parceria de Impacto",
      description: "Valorizamos pessoas, construímos parcerias e buscamos gerar resultados reais.",
      iconName: "TrendingUp"
    }
  ],
  solutions: [
    {
      id: "midia-digital",
      title: "Mídia Digital",
      tag: "Alcance & Engajamento",
      description: "Estratégias digitais para divulgar sua marca com relevância, conectando sua empresa a novos clientes.",
      iconName: "Share2",
      whatsappMessage: "Olá Armando! Gostaria de saber mais sobre as soluções de Mídia Digital da Dinâmica."
    },
    {
      id: "presenca-google",
      title: "Presença Empresarial no Google",
      tag: "Posicionamento Local",
      description: "Destaque garantido nos resultados de busca do Google quando as pessoas procuram pelas soluções que você oferece.",
      iconName: "Search",
      whatsappMessage: "Olá Armando! Gostaria de otimizar a Presença Empresarial da minha empresa no Google."
    },
    {
      id: "google-business-profile",
      title: "Google Business Profile",
      tag: "Google Meu Negócio",
      description: "Configuração, otimização e gestão estratégica do perfil comercial com rotas, fotos, avaliações e catálogo.",
      iconName: "MapPin",
      whatsappMessage: "Olá Armando! Gostaria de estruturar ou otimizar meu Google Business Profile (Meu Negócio)."
    },
    {
      id: "visibilidade-digital",
      title: "Visibilidade Digital",
      tag: "Atração de Clientes",
      description: "Aumente o reconhecimento da sua empresa nos canais digitais mais frequentados pelo seu público-alvo.",
      iconName: "Eye",
      whatsappMessage: "Olá! Gostaria de entender como ampliar a Visibilidade Digital do meu negócio."
    },
    {
      id: "solucoes-empresas",
      title: "Soluções para Empresas",
      tag: "Estruturação Corporativa",
      description: "Ferramentas e processos sob medida para empresas que buscam modernização, agilidade e escala comercial.",
      iconName: "Building2",
      whatsappMessage: "Olá Armando! Gostaria de conhecer as Soluções para Empresas da Dinâmica."
    },
    {
      id: "solucoes-empreendedores",
      title: "Soluções para Empreendedores",
      tag: "Inovação Ágil",
      description: "Apoio direcionado a quem está iniciando ou expandindo seu próprio negócio rural ou urbano com segurança.",
      iconName: "Rocket",
      whatsappMessage: "Olá! Sou empreendedor e gostaria de conhecer as soluções digitais da Dinâmica."
    },
    {
      id: "criacao-conteudo",
      title: "Criação de Conteúdo Digital",
      tag: "Comunicação Visual",
      description: "Produção de material visual, textual e informativo de alto padrão para redes sociais e canais digitais.",
      iconName: "Layers",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Criação de Conteúdo Digital."
    },
    {
      id: "consultoria-negocios",
      title: "Consultoria de Negócios",
      tag: "16 Anos de Experiência",
      description: "Diagnóstico, orientação estratégica e acompanhamento personalizado para tomada de decisões inteligentes.",
      iconName: "Briefcase",
      whatsappMessage: "Olá Armando! Gostaria de agendar uma Consultoria de Negócios para minha empresa."
    },
    {
      id: "tecnologia-negocios",
      title: "Tecnologia Aplicada aos Negócios",
      tag: "Eficiência & Praticidade",
      description: "Aplicações práticas da tecnologia para simplificar o dia a dia, gerar economia de tempo e maximizar resultados.",
      iconName: "Cpu",
      whatsappMessage: "Olá! Gostaria de aplicar mais tecnologia prática nos processos do meu negócio."
    }
  ]
};
