export type PerfilSeguro =
  | "familia"
  | "empresa"
  | "mar"
  | "planejamento";

export type IconeModalidade =
  | "car"
  | "home"
  | "heart-handshake"
  | "heart-pulse"
  | "plane"
  | "bike"
  | "building-2"
  | "building"
  | "briefcase"
  | "shield-check"
  | "file-check-2"
  | "anchor"
  | "compass";

export interface PerguntaFrequente {
  pergunta: string;
  resposta: string;
}

export interface ModalidadeSeguro {
  slug: string;
  nome: string;
  nomeCurto: string;
  perfil: PerfilSeguro;
  perfilLabel: string;
  icone: IconeModalidade;
  resumoCard: string;
  aberturaCotidiano: string;
  subtitulo: string;
  paraQuem: string[];
  oQueProtege: string[];
  ressalvaCoberturas: string;
  porqueCorretora: string[];
  faqs: PerguntaFrequente[];
  whatsappMensagem: string;
  relacionadas: string[];
  fotoPlaceholder: string;
  destaqueLitoral?: string;
}

export const PERFIS_SEGURO: {
  id: PerfilSeguro;
  titulo: string;
  subtitulo: string;
}[] = [
  {
    id: "familia",
    titulo: "Para você e sua família",
    subtitulo:
      "Cuidado pensado para a rotina da casa, os deslocamentos diários, a saúde e os planos de quem você ama.",
  },
  {
    id: "empresa",
    titulo: "Para sua empresa",
    subtitulo:
      "Proteção estruturada para patrimônio, operações comerciais, condomínios, contratos e responsabilidade profissional.",
  },
  {
    id: "mar",
    titulo: "Para o mar",
    subtitulo:
      "Atenção dedicada à cultura náutica de Itajaí e Balneário Camboriú, de embarcações de lazer a operações no litoral.",
  },
  {
    id: "planejamento",
    titulo: "Planejamento e conquistas",
    subtitulo:
      "Caminhos organizados para adquirir ou renovar bens sem comprometer o equilíbrio financeiro.",
  },
];

export const RESSALVA_PADRAO =
  "As coberturas variam conforme o produto, a seguradora e as condições contratadas.";

export const MODALIDADES_SEGURO: ModalidadeSeguro[] = [
  {
    slug: "automovel",
    nome: "Seguro Automóvel",
    nomeCurto: "Automóvel",
    perfil: "familia",
    perfilLabel: "Para você e sua família",
    icone: "car",
    resumoCard:
      "Tranquilidade para dirigir na cidade, na estrada e na alta temporada do litoral.",
    aberturaCotidiano:
      "Quem circula pela região entre Itajaí e Balneário Camboriú sabe como o trânsito muda ao longo do ano, principalmente na alta temporada e nos acessos portuários. Mais do que proteger o veículo, o Seguro Automóvel cuida da sua mobilidade e da relação com terceiros no dia a dia.",
    subtitulo:
      "Orientação clara para escolher franquia, limites para terceiros e assistências que realmente fazem sentido para o seu uso.",
    paraQuem: [
      "Motoristas que usam o carro diariamente para trabalho, escola dos filhos ou deslocamentos entre cidades da região.",
      "Famílias que compartilham o veículo entre mais de um condutor e precisam de clareza sobre o perfil na apólice.",
      "Quem busca assistência 24 horas confiável em viagens pelo litoral e pelo país.",
      "Proprietários de veículos novos, seminovos ou utilitários de uso particular.",
    ],
    oQueProtege: [
      "Proteção para o próprio veículo em situações previstas na apólice, como colisão, incêndio, furto ou roubo, conforme as condições contratadas.",
      "Responsabilidade Civil Facultativa de Veículos (RCF-V), voltada a danos materiais e corporais causados a terceiros.",
      "Assistência 24 horas para guincho, troca de pneus, pane elétrica ou mecânica e apoio em deslocamento, de acordo com o plano escolhido.",
      "Coberturas opcionais para vidros, faróis, retrovisores e carro reserva, segundo a modalidade selecionada.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Comparamos condições entre diferentes seguradoras parceiras da rede Lojacorr, equilibrando prêmio, franquia e cobertura para terceiros.",
      "Ajudamos a preencher o perfil de uso corretamente, evitando divergências que possam gerar dúvidas no futuro.",
      "Acompanhamos renovações anuais para ajustar valores e coberturas quando sua rotina muda.",
    ],
    faqs: [
      {
        pergunta: "O valor para danos a terceiros realmente faz diferença na apólice?",
        resposta:
          "Sim. Muitas vezes o foco fica apenas no valor do próprio carro, mas um limite bem dimensionado para terceiros traz tranquilidade diante dos custos atuais de reparos e responsabilidades civis, conforme as condições contratadas.",
      },
      {
        pergunta: "Como escolher entre franquia normal e reduzida?",
        resposta:
          "A decisão depende da diferença no valor do seguro e do quanto você prefere assumir em um eventual reparo parcial. Na conversa consultiva, mostramos os dois cenários lado a lado para você decidir com clareza.",
      },
      {
        pergunta: "Outras pessoas da família podem dirigir o carro segurado?",
        resposta:
          "Em geral, sim, desde que o perfil dos condutores habituais e eventuais esteja alinhado às regras da seguradora escolhida. Orientamos esse preenchimento antes da contratação.",
      },
      {
        pergunta: "Posso revisar um seguro que já tenho em outra corretora?",
        resposta:
          "Sim. Analisamos sua apólice atual para verificar se as coberturas ainda acompanham sua realidade e apresentamos alternativas na época da renovação.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Automóvel.",
    relacionadas: ["residencial", "vida", "viagem"],
    fotoPlaceholder:
      "[FOTO: carro estacionado em rua arborizada de cidade litorânea brasileira, luz natural do fim de tarde]",
  },
  {
    slug: "residencial",
    nome: "Seguro Residencial",
    nomeCurto: "Residencial",
    perfil: "familia",
    perfilLabel: "Para você e sua família",
    icone: "home",
    resumoCard:
      "Cuidado para o lar, móveis, equipamentos e serviços práticos de manutenção do dia a dia.",
    aberturaCotidiano:
      "Você provavelmente sabe quanto custou mobiliar sua casa. Mas já parou para pensar quanto custaria recomeçar depois de um imprevisto? Entre móveis, eletrodomésticos, trabalho remoto e a rotina do litoral, sua casa guarda conquistas que merecem cuidado simples e acessível.",
    subtitulo:
      "Proteção para casas e apartamentos, próprios ou alugados, com assistências úteis para o cotidiano.",
    paraQuem: [
      "Proprietários de casas ou apartamentos que desejam preservar o imóvel e o conteúdo construído ao longo dos anos.",
      "Inquilinos que precisam atender às exigências do contrato de locação e proteger seus próprios bens dentro do imóvel.",
      "Moradores de cidades litorâneas que buscam respaldo diante de variações climáticas e oscilações de energia elétrica.",
      "Quem trabalha em home office e mantém equipamentos de uso diário na residência.",
    ],
    oQueProtege: [
      "Cobertura básica para estrutura e conteúdo em eventos previstos na apólice, como incêndio, queda de raio e explosão.",
      "Coberturas opcionais para danos elétricos, vendaval, subtração de bens, vidros e responsabilidade civil familiar, conforme as condições contratadas.",
      "Serviços de assistência residencial para pequenos reparos emergenciais, como chaveiro, encanador e eletricista, dentro dos limites do plano.",
      "Alternativas para imóveis de moradia habitual ou de veraneio, conforme aceitação da seguradora.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Ajudamos a estimar o valor de reconstrução do imóvel e o valor dos bens internos, evitando contratar coberturas abaixo ou acima do necessário.",
      "Explicamos em linguagem simples quais assistências estão incluídas e como acioná-las no dia a dia.",
      "Avaliamos opções entre várias seguradoras para encontrar bom equilíbrio entre custo anual e proteção real.",
    ],
    faqs: [
      {
        pergunta: "Quem mora em apartamento precisa de Seguro Residencial mesmo com o seguro do condomínio?",
        resposta:
          "Sim, eles são complementares. O seguro do condomínio costuma olhar para a estrutura comum do prédio, enquanto o residencial protege o interior da sua unidade, seus móveis, eletrônicos e responsabilidades particulares, conforme as condições contratadas.",
      },
      {
        pergunta: "O seguro residencial serve também para imóvel alugado?",
        resposta:
          "Sim. É possível contratar tanto para atender à exigência do contrato de aluguel quanto para incluir coberturas voltadas aos bens do inquilino.",
      },
      {
        pergunta: "Imóveis na praia ou de temporada podem ser segurados?",
        resposta:
          "Muitas seguradoras oferecem planos específicos para residências de veraneio, respeitando critérios próprios de ocupação e aceitação.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Residencial.",
    relacionadas: ["automovel", "condominio", "vida"],
    fotoPlaceholder:
      "[FOTO: sala de estar acolhedora de casa ou apartamento brasileiro com luz natural pela janela]",
  },
  {
    slug: "vida",
    nome: "Seguro de Vida",
    nomeCurto: "Vida",
    perfil: "familia",
    perfilLabel: "Para você e sua família",
    icone: "heart-handshake",
    resumoCard:
      "Planejamento financeiro para cuidar de quem você ama e preservar seus projetos em vida.",
    aberturaCotidiano:
      "Falar sobre Seguro de Vida é falar sobre tranquilidade no presente. Seja na formação de uma família, na compra de um imóvel ou na condução de uma empresa, ter um planejamento de proteção permite viver os planos de hoje sabendo que as pessoas importantes contam com amparo.",
    subtitulo:
      "Soluções individuais ou familiares que também oferecem benefícios utilizáveis em vida, conforme o plano contratado.",
    paraQuem: [
      "Pessoas que desejam garantir estabilidade financeira para cônjuge, filhos ou dependentes.",
      "Profissionais autônomos e empreendedores cuja renda depende diretamente da própria capacidade de trabalho.",
      "Sócios de empresas que buscam proteção sucessória para continuidade do negócio.",
      "Quem deseja incluir coberturas utilizáveis em vida no seu planejamento patrimonial.",
    ],
    oQueProtege: [
      "Cobertura para amparo financeiro aos beneficiários escolhidos, conforme as condições contratadas.",
      "Coberturas em vida, como diagnóstico de doenças graves, invalidez ou diárias por incapacidade temporária, quando previstas no produto escolhido.",
      "Assistência funeral individual ou familiar, de acordo com o plano selecionado.",
      "Flexibilidade para revisar capitais segurados conforme novas fases da vida, como casamento, nascimento de filhos ou novos compromissos financeiros.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Conversamos com sensibilidade e clareza para desenhar capitais compatíveis com sua fase de vida e orçamento.",
      "Mostramos as diferenças entre seguros temporários, tradicionais e resgatáveis sem jargão complicado.",
      "Acompanhamos atualizações de beneficiários e revisões de capital ao longo dos anos.",
    ],
    faqs: [
      {
        pergunta: "O Seguro de Vida só funciona em caso de falecimento?",
        resposta:
          "Não necessariamente. Hoje existem diversas opções com coberturas pensadas para uso em vida, como apoio financeiro em afastamentos temporários ou diagnósticos previstos em contrato, conforme o produto escolhido.",
      },
      {
        pergunta: "Quem não tem filhos precisa pensar em Seguro de Vida?",
        resposta:
          "Pode fazer muito sentido, especialmente para autônomos ou pessoas que sustentam a si mesmas e querem manter sua autonomia financeira diante de períodos sem poder trabalhar.",
      },
      {
        pergunta: "Posso alterar os beneficiários depois de contratar?",
        resposta:
          "Sim. A indicação de beneficiários pode ser atualizada sempre que sua realidade familiar ou patrimonial mudar.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro de Vida.",
    relacionadas: ["saude", "residencial", "empresarial"],
    fotoPlaceholder:
      "[FOTO: casal ou família brasileira caminhando em ambiente ao ar livre com luz natural]",
  },
  {
    slug: "saude",
    nome: "Seguro Saúde",
    nomeCurto: "Saúde",
    perfil: "familia",
    perfilLabel: "Para você e sua família",
    icone: "heart-pulse",
    resumoCard:
      "Acesso a redes médicas e hospitalares com orientação clara para pessoas, famílias e empresas.",
    aberturaCotidiano:
      "Escolher um plano ou Seguro Saúde envolve muitas siglas, regras de reembolso, redes credenciadas e coparticipações. Quando você busca cuidado médico para si, para sua família ou para sua equipe, o que mais importa é saber exatamente onde e como será atendido.",
    subtitulo:
      "Apoio consultivo para comparar redes, abrangência regional ou nacional e formatos empresariais ou por adesão.",
    paraQuem: [
      "Famílias que buscam previsibilidade e boa rede de atendimento médico e hospitalar na região e em viagens.",
      "Empresas que desejam oferecer cuidado em saúde como benefício valorizado pelos colaboradores.",
      "Profissionais liberais e pessoas jurídicas que avaliam opções empresariais a partir do CNPJ.",
      "Quem já possui um plano e quer entender se existe alternativa mais adequada ao seu momento.",
    ],
    oQueProtege: [
      "Acesso a consultas, exames, internações e procedimentos médicos previstos no rol de cobertura e nas condições do produto contratado.",
      "Opções com abrangência regional ou nacional, em acomodação enfermaria ou apartamento.",
      "Modalidades com ou sem coparticipação e opções de reembolso, conforme o plano e a operadora ou seguradora.",
      "Possibilidade de contratação familiar ou empresarial, respeitando regras de elegibilidade e carência vigentes.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Mapeamos hospitais, clínicas e médicos de preferência antes de indicar alternativas.",
      "Explicamos de forma transparente carências, coparticipação, reajustes e regras de portabilidade.",
      "Auxiliamos empresas e famílias tanto na contratação quanto na gestão cadastral ao longo do contrato.",
    ],
    faqs: [
      {
        pergunta: "Qual a diferença prática entre plano com e sem coparticipação?",
        resposta:
          "No plano com coparticipação, a mensalidade tende a ser mais equilibrada e há uma participação financeira definida quando o beneficiário utiliza consultas ou exames. Analisamos a frequência de uso da sua família ou empresa antes de recomendar.",
      },
      {
        pergunta: "Empresas pequenas podem contratar Seguro Saúde?",
        resposta:
          "Sim, existem opções empresariais para diferentes portes de CNPJ, variando o número mínimo de vidas e as condições conforme a operadora ou seguradora.",
      },
      {
        pergunta: "Como saber se os hospitais de Itajaí e Balneário Camboriú estão na rede?",
        resposta:
          "Antes de fechar qualquer proposta, conferimos com você a lista atualizada de hospitais, laboratórios e especialidades na região.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Saúde.",
    relacionadas: ["vida", "viagem", "empresarial"],
    fotoPlaceholder:
      "[FOTO: atendimento acolhedor entre profissional de saúde e paciente em consultório claro]",
  },
  {
    slug: "viagem",
    nome: "Seguro Viagem",
    nomeCurto: "Viagem",
    perfil: "familia",
    perfilLabel: "Para você e sua família",
    icone: "plane",
    resumoCard:
      "Amparo para viagens de lazer, estudo ou trabalho dentro do Brasil e no exterior.",
    aberturaCotidiano:
      "Você passa meses organizando passagens, hospedagem e roteiro. Quando chega a hora de embarcar, ninguém quer se preocupar com idioma diferente em um atendimento médico ou com uma mala que não chegou no destino. O Seguro Viagem acompanha você do embarque à volta para casa.",
    subtitulo:
      "Coberturas ajustadas ao destino, à duração da viagem e ao perfil de cada viajante.",
    paraQuem: [
      "Viajantes em férias pelo Brasil ou para destinos internacionais, incluindo países com seguro obrigatório.",
      "Famílias viajando com crianças ou idosos que exigem atenção especial na escolha dos limites.",
      "Profissionais em viagens corporativas, feiras ou treinamentos fora da cidade.",
      "Estudantes em intercâmbio e praticantes de esportes durante viagens de lazer.",
    ],
    oQueProtege: [
      "Despesas médicas, hospitalares e odontológicas durante a viagem, conforme as condições contratadas.",
      "Orientação e cobertura para extravio de bagagem, atraso de voo ou cancelamento de viagem, de acordo com o plano selecionado.",
      "Atendimento com suporte em português para orientar onde buscar cuidado médico no destino.",
      "Opções específicas para viagens marítimas, esportes de inverno ou gestantes, conforme regras do produto.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Verificamos exigências específicas do país de destino, como valores mínimos exigidos na Europa ou em outros territórios.",
      "Ajudamos a comparar o seguro contratado diretamente com eventuais coberturas oferecidas por cartões de crédito.",
      "Emitimos a apólice com agilidade para você viajar com documentação organizada.",
    ],
    faqs: [
      {
        pergunta: "Vale a pena contratar Seguro Viagem para viagens dentro do Brasil?",
        resposta:
          "Sim. Mesmo dentro do país, um seguro viagem pode oferecer suporte ágil caso o seu plano de saúde não tenha cobertura no estado visitado, além de assistências para bagagem e deslocamento, conforme o plano contratado.",
      },
      {
        pergunta: "O seguro do cartão de crédito substitui o Seguro Viagem?",
        resposta:
          "Depende das regras do cartão, dos limites oferecidos e de como a passagem foi paga. Ajudamos você a conferir esses pontos para decidir se precisa complementar ou contratar uma apólice dedicada.",
      },
      {
        pergunta: "Posso contratar para uma viagem já próxima da data de embarque?",
        resposta:
          "Na maioria dos casos é possível contratar até pouco antes do embarque, respeitando o início de vigência e as regras de cada seguradora.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Viagem.",
    relacionadas: ["saude", "vida", "bike"],
    fotoPlaceholder:
      "[FOTO: viajante brasileiro organizando mala e passaporte em ambiente iluminado antes da viagem]",
  },
  {
    slug: "bike",
    nome: "Seguro Bike",
    nomeCurto: "Bike",
    perfil: "familia",
    perfilLabel: "Para você e sua família",
    icone: "bike",
    resumoCard:
      "Proteção para bicicletas urbanas, de estrada, mountain bike ou elétricas.",
    aberturaCotidiano:
      "Pedalar pela Beira-Rio em Itajaí, pela orla de Balneário Camboriú ou pelas trilhas da região faz parte da rotina de muita gente. Hoje uma bicicleta de qualidade representa um investimento importante, seja para esporte, lazer ou mobilidade diária.",
    subtitulo:
      "Coberturas pensadas para o equipamento, transporte e pedaladas em treinos, lazer ou provas.",
    paraQuem: [
      "Ciclistas amadores e atletas que pedalam em rodovias, trilhas ou ciclovias da região.",
      "Usuários de bicicletas elétricas e urbanas no deslocamento diário para o trabalho.",
      "Proprietários de bicicletas de maior valor que levam o equipamento em viagens e competições.",
    ],
    oQueProtege: [
      "Proteção para a bicicleta em situações de roubo, furto qualificado ou danos físicos previstos na apólice, conforme as condições contratadas.",
      "Cobertura durante o transporte da bike em veículos e, em determinados planos, em viagens nacionais ou internacionais.",
      "Opções para danos causados a terceiros durante a pedalada e acessórios instalados, conforme aceitação do produto.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Conferimos a documentação aceita pelas seguradoras, como nota fiscal ou comprovação de propriedade e avaliação do equipamento.",
      "Esclarecemos a diferença entre planos voltados a bicicletas urbanas, elétricas e esportivas.",
      "Orientamos sobre os cuidados e critérios previstos em apólice para guarda e transporte.",
    ],
    faqs: [
      {
        pergunta: "Bicicletas compradas usadas ou montadas peça por peça podem ter seguro?",
        resposta:
          "Muitas seguradoras aceitam bicicletas usadas ou montadas, desde que atendam aos critérios de comprovação de propriedade, número de série e faixa de valor definidos no produto.",
      },
      {
        pergunta: "Bicicleta elétrica entra no Seguro Bike?",
        resposta:
          "Sim, desde que se enquadre nas especificações de potência e categoria previstas pela seguradora escolhida.",
      },
      {
        pergunta: "A bike fica coberta quando está no rack do carro?",
        resposta:
          "Existem coberturas específicas para transporte em rack ou dentro do veículo, conforme as condições contratadas em cada seguradora.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Bike.",
    relacionadas: ["automovel", "vida", "viagem"],
    fotoPlaceholder:
      "[FOTO: ciclista pedalando em ciclovia litorânea brasileira ao amanhecer]",
  },
  {
    slug: "empresarial",
    nome: "Seguro Empresarial",
    nomeCurto: "Empresarial",
    perfil: "empresa",
    perfilLabel: "Para sua empresa",
    icone: "building-2",
    resumoCard:
      "Continuidade operacional e proteção patrimonial para comércios, serviços e indústrias.",
    aberturaCotidiano:
      "Quem empreende constrói mais do que paredes e estoque: constrói empregos, reputação e compromisso com clientes. Em uma região dinâmica como o Vale do Itajaí, marcada por comércio, serviços, logística e atividade portuária, proteger a estrutura do negócio é manter o foco no que faz a empresa crescer.",
    subtitulo:
      "Análise de riscos sob medida para escritórios, lojas, clínicas, galpões e operações industriais.",
    paraQuem: [
      "Comércios de rua, lojas em shoppings, restaurantes e negócios ligados ao turismo e ao varejo.",
      "Escritórios, clínicas médicas e empresas de prestação de serviços.",
      "Galpões logísticos, transportadoras e pequenas ou médias indústrias.",
      "Empresas que ocupam imóvel alugado e precisam cumprir cláusulas contratuais de locação.",
    ],
    oQueProtege: [
      "Proteção para prédio, máquinas, equipamentos, móveis, utensílios e mercadorias em estoque, conforme as condições contratadas.",
      "Coberturas opcionais para danos elétricos, vendaval, quebra de vidros, equipamentos eletrônicos e responsabilidade civil operações.",
      "Possibilidade de incluir lucros cessantes ou despesas fixas para apoiar a continuidade do negócio em caso de paralisação prevista em apólice.",
      "Assistências empresariais para manutenção emergencial da estrutura física.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Visitamos ou analisamos a operação da empresa para evitar lacunas comuns, como subseguro de estoque ou equipamentos não declarados.",
      "Revisamos apólices vigentes para verificar se reformas, ampliações ou novos equipamentos já estão contemplados.",
      "Buscamos equilíbrio de condições entre diferentes seguradoras pela rede Lojacorr.",
    ],
    faqs: [
      {
        pergunta: "O seguro exigido no contrato de aluguel comercial já protege meu estoque e equipamentos?",
        resposta:
          "Em muitos contratos, a exigência básica cobre apenas o prédio contra incêndio. Para proteger estoque, máquinas, equipamentos e responsabilidade perante clientes, é preciso incluir coberturas específicas na apólice.",
      },
      {
        pergunta: "Como definir o valor correto para segurar minha empresa?",
        resposta:
          "Fazemos esse levantamento junto com você, considerando custo de reposição do imóvel, mobiliário, maquinário e giro de estoque.",
      },
      {
        pergunta: "Empresas de pequeno porte também podem contratar?",
        resposta:
          "Sim. Existem produtos adaptados desde pequenos escritórios e consultórios até operações comerciais e industriais maiores.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Empresarial.",
    relacionadas: ["rc-profissional", "cyber-lgpd", "garantia"],
    fotoPlaceholder:
      "[FOTO: fachada ou interior organizado de empresa brasileira moderna em ambiente comercial]",
  },
  {
    slug: "condominio",
    nome: "Seguro Condomínio",
    nomeCurto: "Condomínio",
    perfil: "empresa",
    perfilLabel: "Para sua empresa",
    icone: "building",
    resumoCard:
      "Segurança jurídica e patrimonial para síndicos, administradoras e condomínios residenciais ou comerciais.",
    aberturaCotidiano:
      "Administrar um condomínio em cidades verticalizadas como Balneário Camboriú e Itajaí exige equilíbrio entre manutenção, convivência e cumprimento da lei. Um Seguro Condomínio bem estruturado protege o patrimônio coletivo e apoia a gestão do síndico.",
    subtitulo:
      "Coberturas obrigatórias por lei e proteções complementares para áreas comuns, equipamentos e responsabilidade do síndico.",
    paraQuem: [
      "Condomínios residenciais verticais e horizontais.",
      "Condomínios comerciais, empresariais e mistos.",
      "Síndicos profissionais, síndicos moradores e administradoras que buscam revisão técnica anual da apólice.",
    ],
    oQueProtege: [
      "Cobertura básica obrigatória para a edificação e áreas comuns contra eventos previstos em lei e na apólice, conforme as condições contratadas.",
      "Coberturas adicionais para portões, elevadores, danos elétricos, vendaval, alagamento e vidros das áreas comuns.",
      "Responsabilidade civil do condomínio e do síndico, além de cobertura para funcionários e vida em grupo quando contratados.",
      "Assistências emergenciais voltadas às áreas comuns do prédio.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Analisamos a convenção do condomínio e o valor real de reconstrução para evitar que a apólice fique defasada.",
      "Apresentamos quadros comparativos claros para facilitar a aprovação em assembleia ou conselho fiscal.",
      "Acompanhamos renovações anuais e atualizações após obras ou melhorias nas áreas comuns.",
    ],
    faqs: [
      {
        pergunta: "O Seguro Condomínio é obrigatório?",
        resposta:
          "Sim, o Código Civil prevê a obrigatoriedade do seguro de toda a edificação contra risco de incêndio ou destruição, total ou parcial, cabendo ao síndico providenciar a contratação e renovação.",
      },
      {
        pergunta: "O seguro do condomínio dispensa o seguro residencial de cada apartamento?",
        resposta:
          "Não. O seguro do condomínio protege a estrutura e as áreas comuns da edificação. O conteúdo particular de cada unidade e eventuais responsabilidades internas do morador são tratados no Seguro Residencial.",
      },
      {
        pergunta: "A corretora pode apresentar comparativo para a reunião do conselho?",
        resposta:
          "Sim. Preparamos um resumo objetivo com as opções das seguradoras para apoiar a decisão do síndico e dos condôminos.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Condomínio.",
    relacionadas: ["empresarial", "residencial", "rc-profissional"],
    fotoPlaceholder:
      "[FOTO: edifício residencial ou comercial brasileiro bem cuidado próximo ao litoral]",
  },
  {
    slug: "rc-profissional",
    nome: "Responsabilidade Civil Profissional",
    nomeCurto: "RC Profissional",
    perfil: "empresa",
    perfilLabel: "Para sua empresa",
    icone: "briefcase",
    resumoCard:
      "Respaldo para médicos, advogados, engenheiros, arquitetos, contadores e outros profissionais.",
    aberturaCotidiano:
      "Mesmo com formação sólida, experiência e cuidado técnico, qualquer profissional liberal ou empresa prestadora de serviços pode enfrentar questionamentos de clientes sobre um projeto, parecer, diagnóstico ou entrega. O Seguro de Responsabilidade Civil Profissional protege sua carreira, sua reputação e seu patrimônio pessoal.",
    subtitulo:
      "Proteção pensada para falhas ou omissões involuntárias no exercício da atividade profissional.",
    paraQuem: [
      "Médicos, dentistas, clínicas e outros profissionais da área da saúde.",
      "Advogados, escritórios de advocacia, contadores e consultores.",
      "Engenheiros, arquitetos e empresas de projetos ou obras.",
      "Empresas de tecnologia, agências e prestadores de serviços especializados.",
    ],
    oQueProtege: [
      "Custos de defesa judicial ou administrativa em questionamentos relacionados à prestação do serviço profissional, conforme as condições contratadas.",
      "Indenizações ou acordos judicialmente ou contratualmente aprovados pela seguradora dentro do limite contratado.",
      "Opções para danos morais, extravio de documentos de clientes e proteção de imagem, conforme o produto específico da profissão.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Cada profissão possui cláusulas e limites próprios; ajudamos a identificar o produto desenhado para a sua área de atuação.",
      "Explicamos conceitos importantes desse ramo, como base de reclamação e retroatividade de cobertura, sem linguagem confusa.",
      "Avaliamos contratação individual ou para toda a sociedade ou clínica.",
    ],
    faqs: [
      {
        pergunta: "Quem atua como pessoa física ou apenas como PJ pode contratar?",
        resposta:
          "Existem modalidades tanto para profissionais autônomos (pessoa física) quanto para sociedades e clínicas (pessoa jurídica), conforme a categoria profissional e a seguradora.",
      },
      {
        pergunta: "O que significa data retroativa no Seguro RC Profissional?",
        resposta:
          "É a data a partir da qual atos profissionais anteriores ao início da apólice podem ter amparo caso sejam reclamados durante a vigência, sempre conforme as regras e condições contratadas.",
      },
      {
        pergunta: "Esse seguro substitui a ética ou o cuidado no atendimento?",
        resposta:
          "De forma alguma. Ele atua como respaldo financeiro e jurídico para erros ou omissões involuntários no exercício regular da profissão, nunca para atos dolosos.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Responsabilidade Civil Profissional.",
    relacionadas: ["empresarial", "cyber-lgpd", "vida"],
    fotoPlaceholder:
      "[FOTO: profissional brasileiro em escritório contemporâneo revisando documentos ou projeto]",
  },
  {
    slug: "cyber-lgpd",
    nome: "Seguro Cyber e LGPD",
    nomeCurto: "Cyber / LGPD",
    perfil: "empresa",
    perfilLabel: "Para sua empresa",
    icone: "shield-check",
    resumoCard:
      "Apoio técnico, jurídico e financeiro diante de incidentes digitais e proteção de dados.",
    aberturaCotidiano:
      "Hoje quase toda empresa depende de sistemas na nuvem, e-mails, cadastros de clientes e pagamentos digitais. Basta uma invasão ou um vazamento de dados para travar a rotina do escritório e gerar obrigações previstas na Lei Geral de Proteção de Dados (LGPD).",
    subtitulo:
      "Proteção moderna para empresas de pequeno, médio e grande porte que lidam com informações digitais.",
    paraQuem: [
      "Empresas que armazenam dados pessoais ou financeiros de clientes, pacientes ou colaboradores.",
      "Clínicas, escritórios contábeis, advocacias, imobiliárias e comércios eletrônicos.",
      "Negócios que dependem de sistemas digitais para faturamento, atendimento e operação diária.",
    ],
    oQueProtege: [
      "Suporte especializado de resposta a incidentes para investigar e conter ataques cibernéticos, conforme as condições contratadas.",
      "Custos com recuperação de dados e apoio jurídico ou regulatório relacionado à LGPD, dentro dos limites da apólice.",
      "Coberturas opcionais para interrupção de negócios por falha de rede, responsabilidade perante terceiros e comunicação de crise, conforme o produto escolhido.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Traduzimos um tema técnico para a realidade da sua empresa, mostrando o que o seguro cobre e quais boas práticas de segurança costumam ser solicitadas.",
      "Ajudamos a preencher o questionário de risco digital com clareza junto à sua equipe de TI ou fornecedor.",
      "Comparamos limites e serviços de resposta rápida disponíveis no mercado.",
    ],
    faqs: [
      {
        pergunta: "Seguro Cyber é apenas para grandes empresas de tecnologia?",
        resposta:
          "Não. Pequenas e médias empresas de qualquer setor que utilizam sistemas digitais e mantêm cadastro de clientes estão expostas e podem contar com apólices proporcionais ao seu porte.",
      },
      {
        pergunta: "O seguro dispensa investimentos em segurança da informação e adequação à LGPD?",
        resposta:
          "Não. Boas práticas como backup, autenticação em dois fatores e políticas de privacidade caminham junto com o seguro e costumam fazer parte dos critérios de aceitação.",
      },
      {
        pergunta: "Como saber qual limite de cobertura minha empresa precisa?",
        resposta:
          "Avaliamos o faturamento, o volume de dados tratados e a dependência operacional dos sistemas para apresentar alternativas adequadas.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Cyber e LGPD.",
    relacionadas: ["empresarial", "rc-profissional", "garantia"],
    fotoPlaceholder:
      "[FOTO: equipe de empresa brasileira trabalhando com notebooks em escritório claro e organizado]",
  },
  {
    slug: "garantia",
    nome: "Seguro Garantia",
    nomeCurto: "Seguro Garantia",
    perfil: "empresa",
    perfilLabel: "Para sua empresa",
    icone: "file-check-2",
    resumoCard:
      "Alternativa ágil à caução ou fiança bancária para contratos privados, licitações e processos.",
    aberturaCotidiano:
      "Quando uma empresa participa de uma licitação, assina um contrato de obra ou prestação de serviços ou precisa apresentar garantia em um processo judicial, imobilizar dinheiro em caixa ou comprometer limite bancário pode frear outros projetos.",
    subtitulo:
      "Instrumento reconhecido para garantir o cumprimento de obrigações contratuais sem comprometer o capital de giro.",
    paraQuem: [
      "Empresas que participam de licitações públicas ou concorrências privadas.",
      "Construtoras, prestadores de serviços, fornecedores de equipamentos e empresas de engenharia.",
      "Empresas que precisam substituir depósitos judiciais ou fianças bancárias por seguro garantia judicial.",
    ],
    oQueProtege: [
      "Garantia do licitante (Bid Bond) para participação em processos de licitação, conforme as condições contratadas.",
      "Garantia de execução de contrato, fornecimento, adiantamento de pagamento ou retenção de pagamentos.",
      "Seguro Garantia Judicial e Administrativo para discussões cíveis, trabalhistas ou fiscais, de acordo com aceitação e análise técnica.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Acompanhamos o cadastro prévio da sua empresa junto às seguradoras para que a emissão de apólices ocorra com agilidade quando surgir um edital ou contrato.",
      "Conferimos minuciosamente as exigências do edital ou do contrato privado para garantir aderência da minuta.",
      "Estruturamos linhas de crédito junto a diferentes seguradoras pela rede Lojacorr.",
    ],
    faqs: [
      {
        pergunta: "Qual a vantagem do Seguro Garantia em relação à fiança bancária?",
        resposta:
          "Em geral, o Seguro Garantia ajuda a preservar a linha de crédito bancária da empresa para capital de giro e investimentos, além de apresentar custos competitivos conforme o perfil cadastral.",
      },
      {
        pergunta: "Preciso esperar sair um contrato para cadastrar minha empresa?",
        resposta:
          "O ideal é preparar o cadastro previamente. Com o limite aprovado antes da necessidade imediata, sua empresa ganha rapidez na entrega da apólice.",
      },
      {
        pergunta: "O Seguro Garantia cobre danos físicos em uma obra?",
        resposta:
          "Não. O Seguro Garantia assegura o cumprimento de obrigações contratuais. Para danos físicos na obra, utiliza-se o Seguro de Riscos de Engenharia ou Empresarial.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Garantia.",
    relacionadas: ["empresarial", "rc-profissional", "consorcios"],
    fotoPlaceholder:
      "[FOTO: engenheiros ou gestores brasileiros analisando contrato e plantas em mesa de reunião]",
  },
  {
    slug: "nautico",
    nome: "Seguro Náutico",
    nomeCurto: "Náutico",
    perfil: "mar",
    perfilLabel: "Para o mar",
    icone: "anchor",
    resumoCard:
      "Proteção sob medida para lanchas, veleiros, iates e motos aquáticas no litoral catarinense.",
    aberturaCotidiano:
      "Quem navega entre Itajaí, Balneário Camboriú, Porto Belo e todo o litoral catarinense conhece a beleza do mar e a responsabilidade que acompanha cada saída. Da marina à travessia, proteger uma embarcação pede atenção técnica para o casco, os equipamentos e a navegação.",
    subtitulo:
      "Atendimento próximo de quem vive no polo náutico do Sul do país, para embarcações de lazer e passeios.",
    destaqueLitoral:
      "Itajaí e Balneário Camboriú reúnem algumas das principais marinas, estaleiros e rotas de navegação do Brasil. Estar aqui desde 1991 nos aproxima da realidade de proprietários, marinheiros e gestores náuticos.",
    paraQuem: [
      "Proprietários de lanchas, iates, veleiros e motos aquáticas (jet skis) de uso particular.",
      "Embarcações atracadas em marinas, iate clubes ou vagas secas de Itajaí, Balneário Camboriú e região.",
      "Quem busca proteção tanto durante a navegação em águas brasileiras quanto em guarda na marina e transporte terrestre.",
    ],
    oQueProtege: [
      "Proteção para casco, máquinas, motores e equipamentos fixos da embarcação, conforme as condições contratadas.",
      "Cobertura para responsabilidade civil do proprietário por danos materiais ou corporais causados a terceiros durante a navegação ou manobras.",
      "Opções para remoção de destroços, assistência e salvamento, transporte terrestre e roubo ou furto qualificado total, conforme o produto contratado.",
      "Adequação dos limites de navegação (águas abrigadas, costeira ou alto-mar) ao uso real da embarcação.",
    ],
    ressalvaCoberturas: RESSALVA_PADRAO,
    porqueCorretora: [
      "Conhecemos a rotina das marinas e do litoral catarinense e analisamos com cuidado o histórico, a vistoria e a área de navegação da embarcação.",
      "Verificamos se equipamentos eletrônicos, bote de apoio e cobertura para terceiros estão contemplados corretamente na apólice.",
      "Comparamos opções entre seguradoras especializadas do mercado nacional.",
    ],
    faqs: [
      {
        pergunta: "O Seguro Náutico cobre a embarcação quando ela está guardada na marina?",
        resposta:
          "Sim, em geral a cobertura contempla tanto a permanência no local de guarda declarado (vaga seca ou molhada) quanto a navegação dentro dos limites previstos na apólice, conforme as condições contratadas.",
      },
      {
        pergunta: "Qualquer condutor habilitado pode pilotar a embarcação segurada?",
        resposta:
          "As seguradoras exigem habilitação náutica compatível com a categoria da embarcação e a área de navegação, além do cumprimento das normas da Marinha do Brasil e das regras específicas do contrato.",
      },
      {
        pergunta: "Motos aquáticas também podem ser seguradas?",
        resposta:
          "Sim, existem coberturas específicas para motos aquáticas, considerando tipo de uso, local de guarda e transporte em carreta, conforme aceitação de cada seguradora.",
      },
      {
        pergunta: "A Zanella atende embarcações fora de Santa Catarina?",
        resposta:
          "Sim. Embora nossa sede seja em Itajaí/SC, atendemos proprietários de embarcações em todo o litoral e águas interiores do Brasil.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Náutico.",
    relacionadas: ["automovel", "residencial", "viagem"],
    fotoPlaceholder:
      "[FOTO REAL: marina de Itajaí ou Balneário Camboriú ao entardecer, com embarcações atracadas]",
  },
  {
    slug: "consorcios",
    nomeCurto: "Consórcios",
    nome: "Consórcios",
    perfil: "planejamento",
    perfilLabel: "Planejamento e conquistas",
    icone: "compass",
    resumoCard:
      "Planejamento sem juros para imóveis, veículos, embarcações e projetos empresariais.",
    aberturaCotidiano:
      "Nem toda conquista precisa acontecer com pressa ou juros altos de financiamento. Seja para comprar o próximo imóvel, trocar o carro da família, investir em uma embarcação ou ampliar a frota da empresa, o consórcio permite planejar o patrimônio com previsibilidade.",
    subtitulo:
      "Cartas de crédito para imóveis, automóveis, pesados, náutico e serviços, com orientação consultiva sobre grupos e prazos.",
    paraQuem: [
      "Pessoas e famílias que querem comprar, construir ou reformar um imóvel de forma planejada.",
      "Quem deseja trocar de automóvel ou adquirir uma embarcação sem pagar juros de financiamento.",
      "Empresas que planejam renovação de frota, aquisição de galpão ou equipamentos com visão de médio prazo.",
    ],
    oQueProtege: [
      "Planejamento programado com taxa de administração definida em contrato, sem cobrança de juros bancários.",
      "Possibilidade de contemplação por sorteio ou oferta de lances, conforme as regras do grupo e da administradora.",
      "Poder de compra à vista na hora da utilização da carta de crédito aprovada.",
      "Diversidade de prazos e valores por meio das administradoras parceiras da rede Lojacorr.",
    ],
    ressalvaCoberturas:
      "As regras de contemplação, lances, reajustes e utilização de crédito variam conforme o grupo, a administradora e as condições contratadas.",
    porqueCorretora: [
      "Analisamos seu objetivo e seu fluxo de caixa antes de sugerir um grupo, prazo ou estratégia de lance.",
      "Mostramos com transparência como funcionam taxa de administração, fundo de reserva e índice de correção da carta.",
      "Acompanhamos você desde a adesão ao grupo até a utilização da carta de crédito.",
    ],
    faqs: [
      {
        pergunta: "Como escolher entre consórcio e financiamento?",
        resposta:
          "Se você tem prazo para planejar e quer fugir dos juros, o consórcio costuma ser muito vantajoso. Se precisa do bem imediatamente e não tem lance disponível, avaliamos juntos qual caminho faz mais sentido para o seu orçamento.",
      },
      {
        pergunta: "Consórcio tem seguro incluído?",
        resposta:
          "Muitos grupos oferecem seguro prestamista opcional ou previsto em regulamento. Explicamos todos os itens da parcela antes da assinatura.",
      },
      {
        pergunta: "Posso usar consórcio para imóveis em Itajaí, Balneário Camboriú ou outras cidades?",
        resposta:
          "Sim. A carta de crédito imobiliário pode ser utilizada para aquisição em todo o território nacional, respeitando os critérios da administradora.",
      },
    ],
    whatsappMensagem:
      "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Consórcios.",
    relacionadas: ["residencial", "automovel", "nautico"],
    fotoPlaceholder:
      "[FOTO: casal brasileiro conversando à mesa sobre planos da casa nova com luz natural]",
  },
];

export function getModalidadeBySlug(slug: string): ModalidadeSeguro | undefined {
  return MODALIDADES_SEGURO.find((m) => m.slug === slug);
}

export function getModalidadesByPerfil(
  perfil: PerfilSeguro
): ModalidadeSeguro[] {
  return MODALIDADES_SEGURO.filter((m) => m.perfil === perfil);
}
