
import type { Product, ProductImage, Store } from '@/types';
import placeholderData from './placeholder-images.json';

export const productData: Product = {
  idLoja: "nextWheelStore",
  vendedor: {
    nome: "NextWheel Store",
    urlIconeVerificacao: ""
  },
  nome: "Meta Quest 3S 128 GB – Headset de Realidade Mista (VR) – Novo, Lacrado",
  marca: "Foston",
  modelo: "FS-S09 Pro",
  estatisticas: {
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 892,
    totalVendidos: 8547
  },
  preco: {
    atual: 67.90,
    original: 619.90,
    economiaPorcentagem: 85,
    textoDetalheFrete: "Frete grátis"
  },
  ofertaRelampago: {
    ativa: true,
    tempoRestante: "00:06:45",
    descontoPorcentagem: 90,
    condicaoCompra: {
      minimoRequerido: 100.00,
      economiaGanho: 30.00
    }
  },
  logistica: {
    frete: {
      tipo: "Frete grátis",
      previsaoEntrega: ""
    },
    devolucao: {
      tipo: "Devolução grátis",
      detalhe: "Devoluções gratuitas em 30 dias"
    }
  },
  imagens: {
    contadorAtual: 1,
    contadorTotal: 5,
    urlPrincipal: "https://i.postimg.cc/v8P7gMLm/br-11134207-81z1k-mgidy04voirk41-resize-w450-nl.jpg",
    galeria: [
      { id: "img01", url: "https://i.postimg.cc/v8P7gMLm/br-11134207-81z1k-mgidy04voirk41-resize-w450-nl.jpg", tipo: "principal", alt: "Patinete elétrico inteiro" },
      { id: "img02", url: "https://i.postimg.cc/0QKLFZfR/br-11134207-81z1k-mgidy052cpvof0resize-w450-nl.jpg", tipo: "dobrado", alt: "Patinete elétrico dobrado" },
      { id: "img03", url: "https://i.postimg.cc/yNgQ8xSL/Cn-P-02112025-204223.png", tipo: "detalhe", alt: "Detalhe da roda traseira do patinete" },
      { id: "img04", url: "https://i.postimg.cc/1tyqYYPg/Airbrush-IMAGE-ENHANCER-1762127140576-1762127140576.png", tipo: "vista_lateral", alt: "Vista lateral do patinete" },
      { id: "img05", url: "https://i.postimg.cc/63T93dh9/Airbrush-IMAGE-ENHANCER-1762127311379-1762127311379.png", tipo: "diagrama", alt: "Diagrama de dimensões do patinete" }
    ]
  },
  barraAcoesFixa: {
    loja: { texto: "Loja" },
    chat: { texto: "Chat" },
    carrinhoRapido: { icone: "carrinho", acoao: "adicionar_carrinho" },
    comprarAgora: {
      texto: "Comprar agora",
      precoDetalhe: "R$ 67,90 | Frete grátis",
      acao: "checkout_direto"
    }
  },
  visaoGeral: {
    titulo: "Visão geral",
    resumoProduto: "A escolha ideal para quem busca imersão, desempenho e liberdade total na realidade virtual.",
    diferenciais: [
        "Experiência totalmente sem fios e independente",
        "Gráficos imersivos com alto desempenho",
        "Controle preciso e confortável",
        "Grande espaço interno para jogos e aplicativos"
    ],
    avaliacoes: {
      tituloSecao: "Avaliações dos clientes",
      avaliacoesGerais: {
          totalComentarios: 491,
          mediaGeral: 4.7
      },
      comentarios: {
          "comentarioId_CS": {
              autor: "Carlos Silva",
              cidade: "São Paulo, SP",
              nota: 5,
              data: "2023-10-27T10:00:00Z",
              texto: "Aparentemente está tudo certo! Meu filho gostou muito do produto, que superou nossas expectativas. O vendedor foi extremamente atencioso e prestativo durante todo o processo. Recomendo!",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/fTx4jXj3/Cn-P-24102025-235201.png"
          },
          "comentarioId_RL": {
              autor: "Rafaela Lima",
              cidade: "Rio de Janeiro, RJ",
              nota: 4,
              data: "2023-10-27T10:15:00Z",
              texto: "Recomendo, chegou 3 dias antes do prazo, muito bem embalado, com pilhas já nos controles, Vr carregado, vendedor responde em menos de 5 minutos e ajuda em qualquer situação, me envio a nota fiscal pelo email, melhor loja, super confiável.",
              fotoUrlComentario: "https://i.postimg.cc/85PCv7hQ/Imagem-do-Whats-App-de-2025-11-02-a-s-21-13-56-a1b60453.jpg",
              fotoUrlAutor: "https://i.postimg.cc/dtRXTFwr/Cn-P-24102025-235333.png"
          },
          "comentarioId_PR": {
              autor: "Pedro Raul",
              cidade: "Belo Horizonte, MG",
              nota: 5,
              data: "2023-10-27T10:30:00Z",
              texto: "Estou adorando meu Meta Quest 2! Funciona perfeitamente, a bateria dura bastante e é muito confortável de usar. Compra segura e totalmente recomendada.",
              fotoUrlComentario: "https://i.postimg.cc/PJ58d66z/Imagem-do-Whats-App-de-2025-11-02-a-s-21-13-57-f8c43402.jpg",
              fotoUrlAutor: "https://i.postimg.cc/hvWyfyYN/Cn-P-24102025-235423.png"
          },
          "comentarioId_PS": {
              autor: "Pietro Santos",
              cidade: "Curitiba, PR",
              nota: 5,
              data: "2023-10-27T10:45:00Z",
              texto: "Vale muito a pena! Excelente qualidade, interface intuitiva e diversão garantida. Quem estiver em dúvida, pode comprar sem medo.",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/JhsPKCCn/Cn-P-24102025-235500.png"
          }
      }
    }
  },
  descricao: {
    titulo: "Descrição",
    textoPrincipal: "Descubra uma nova forma de jogar, se exercitar e explorar com o Meta Quest 2 256GB. Com design leve e totalmente sem fios, ele oferece liberdade total de movimento e imersão completa em realidade virtual.",
    textoCompleto: "Equipado com o processador Qualcomm Snapdragon XR2, 6GB de RAM e ampla capacidade de armazenamento, garante desempenho rápido e fluidez em todos os jogos e aplicativos. Os controladores Touch e o som 3D integrado tornam cada experiência mais realista e envolvente.",
    fichaTecnica: {
      "Marca": "Meta (Oculus)",
      "Modelo": "Quest 2",
      "Armazenamento": "256GB",
      "Processador": "Qualcomm Snapdragon XR2",
      "MemoriaRAM": "6GB",
      "Tela": "LCD Fast-Switch",
      "Resolucao": "1832 x 1920 por olho",
      "TaxaDeAtualizacao": "Até 120Hz",
      "Conectividade": "Wi-Fi 6 / Bluetooth 5.0 / USB-C",
      "Compatibilidade": "Meta Quest Store e PC VR (via cabo ou Air Link)",
      "Rastreamento": "Inside-Out (sem sensores externos)",
      "Audio": "Som 3D integrado / Microfone embutido",
      "Autonomia": "2 a 3 horas",
      "TempoDeRecarga": "Aproximadamente 2,5 horas",
      "Peso": "503g",
      "ConteudoDaEmbalagem": "Headset, 2 controladores, cabo USB-C, adaptador e guia rápido"
    },
    dicasDeUso: [
      "Ajuste corretamente o headset e as lentes para maior conforto.",
      "Use em um espaço seguro, livre de obstáculos.",
      "Configure a área de segurança (Guardian) antes de jogar.",
      "Mantenha o aparelho sempre carregado e atualizado.",
      "Limpe as lentes apenas com pano de microfibra.",
      "Utilize o modo Air Link para jogar sem fios.",
      "Guarde o dispositivo em local seco e protegido do sol."
    ],
    avisoLegal: "Idade mínima recomendada: 8 anos."
  }
};

export const storeData: Store = {
  nome: "NextWheel Store",
  slogan: "Shop",
  statusVerificacao: {
    verificada: true,
    plataforma: "TikTok Shop"
  },
  urlLogo: "https://i.postimg.cc/X7tZFKJG/Cn-P-24102025-232009.png",
  menusRodape: [
    {
      titulo: "Informações da empresa",
      conteudo: "",
      acao: "expandir_ou_navegar"
    },
    {
      titulo: "Suporte ao cliente",
      conteudo: "",
      acao: "expandir_ou_navegar"
    },
    {
      titulo: "Políticas e aspectos legais",
      conteudo: "",
acao: "expandir_ou_navegar"
    }
  ]
};


const imagePlaceholders: ProductImage[] = placeholderData.placeholderImages;

export const imageMap: Record<string, ProductImage> = imagePlaceholders.reduce(
  (acc, img) => {
    acc[img.id] = img;
    return acc;
  },
  {} as Record<string, ProductImage>
);

