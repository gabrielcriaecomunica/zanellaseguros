import React from "react";
import type { Metadata } from "next";
import { EMPRESA } from "@/content/empresa";
import { SectionWaves } from "@/components/SectionWaves";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Zanella Seguros trata seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-verde-profundo py-14 text-branco sm:py-20">
        <SectionWaves
          variant="gold"
          position="hero"
          className="absolute inset-x-0 bottom-0 h-36 opacity-80"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-dourado-areia uppercase">
            Transparência e LGPD
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-branco sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-creme/90">
            Compromisso da Zanella Seguros com a proteção de dados pessoais.
          </p>
        </div>
      </section>

      <section className="bg-branco py-14 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm leading-relaxed text-texto-suave sm:px-6 sm:text-base lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-verde-profundo">
              1. Quem somos
            </h2>
            <p className="mt-2">
              Este site institucional é mantido por {EMPRESA.razaoSocial},
              localizada na {EMPRESA.endereco.completo}. Atuamos em conformidade
              com a Lei Geral de Proteção de Dados Pessoais (Lei nº
              13.709/2018).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-verde-profundo">
              2. Dados tratados ao entrar em contato
            </h2>
            <p className="mt-2">
              Este site não possui banco de dados próprio nem armazena
              formulários em servidor. Ao preencher o formulário de contato, as
              informações digitadas (como nome, telefone, e-mail, modalidade de
              interesse e mensagem) são utilizadas exclusivamente para compor a
              mensagem que você mesmo envia para o WhatsApp oficial da corretora
              ({EMPRESA.whatsappDisplay}).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-verde-profundo">
              3. Uso de cookies
            </h2>
            <p className="mt-2">
              Utilizamos apenas armazenamento local essencial para registrar que
              você tomou ciência do aviso de privacidade e manter o funcionamento
              adequado da navegação. Não utilizamos cookies publicitários de
              terceiros sem o seu consentimento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-verde-profundo">
              4. Direitos do titular e canal de contato
            </h2>
            <p className="mt-2">
              Você pode solicitar esclarecimentos, confirmação de tratamento,
              correção ou exclusão de dados pessoais mantidos no atendimento da
              corretora diretamente pelo e-mail{" "}
              <a
                href={`mailto:${EMPRESA.email}`}
                className="font-semibold text-verde-profundo underline"
              >
                {EMPRESA.email}
              </a>{" "}
              ou pelo telefone {EMPRESA.telefone}.
            </p>
            <p className="mt-2 text-xs text-texto-suave">
              [CONFIRMAR COM A ZANELLA: nome ou canal específico do encarregado
              de dados (DPO), se houver]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
