"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/content/empresa";
import { MODALIDADES_SEGURO } from "@/content/seguros";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [modalidade, setModalidade] = useState("Seguro Automóvel");
  const [mensagem, setMensagem] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const linhas = [
      "Olá! Vim pelo site da Zanella Seguros e gostaria de conversar com um corretor.",
      "",
      `Nome: ${nome.trim()}`,
      `Telefone: ${telefone.trim()}`,
      `E-mail: ${email.trim()}`,
      `Modalidade de interesse: ${modalidade}`,
    ];

    if (mensagem.trim()) {
      linhas.push(`Mensagem: ${mensagem.trim()}`);
    }

    const url = buildWhatsAppUrl(linhas.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setFeedback(
      "Abrimos o WhatsApp com os seus dados preenchidos na mensagem para agilizar o atendimento."
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-borda-sutil bg-branco p-6 sm:p-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-verde-profundo">
          Envie sua mensagem
        </h2>
        <p className="mt-1.5 text-sm text-texto-suave">
          Ao enviar, abrimos uma conversa no WhatsApp já com as suas informações
          organizadas para nossa equipe atender você.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contato-nome"
            className="block text-sm font-semibold text-verde-profundo"
          >
            Nome completo
          </label>
          <input
            id="contato-nome"
            name="nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como você prefere ser chamado"
            className="mt-1.5 w-full rounded-lg border border-borda-sutil bg-creme-suave px-4 py-3 text-sm text-texto placeholder:text-texto-suave/70 focus:border-verde-profundo focus:bg-branco focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contato-telefone"
            className="block text-sm font-semibold text-verde-profundo"
          >
            Telefone ou WhatsApp
          </label>
          <input
            id="contato-telefone"
            name="telefone"
            type="tel"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(47) 99999-9999"
            className="mt-1.5 w-full rounded-lg border border-borda-sutil bg-creme-suave px-4 py-3 text-sm text-texto placeholder:text-texto-suave/70 focus:border-verde-profundo focus:bg-branco focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contato-email"
            className="block text-sm font-semibold text-verde-profundo"
          >
            E-mail
          </label>
          <input
            id="contato-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@exemplo.com"
            className="mt-1.5 w-full rounded-lg border border-borda-sutil bg-creme-suave px-4 py-3 text-sm text-texto placeholder:text-texto-suave/70 focus:border-verde-profundo focus:bg-branco focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contato-modalidade"
            className="block text-sm font-semibold text-verde-profundo"
          >
            Modalidade de interesse
          </label>
          <select
            id="contato-modalidade"
            name="modalidade"
            value={modalidade}
            onChange={(e) => setModalidade(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-borda-sutil bg-creme-suave px-4 py-3 text-sm text-texto focus:border-verde-profundo focus:bg-branco focus:outline-none"
          >
            {MODALIDADES_SEGURO.map((item) => (
              <option key={item.slug} value={item.nome}>
                {item.nome}
              </option>
            ))}
            <option value="Revisão de apólice atual">
              Revisão de apólice atual
            </option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contato-mensagem"
          className="block text-sm font-semibold text-verde-profundo"
        >
          Conte um pouco do que você precisa
        </label>
        <textarea
          id="contato-mensagem"
          name="mensagem"
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Ex.: quero revisar o seguro do carro, entender opções para minha empresa ou conversar sobre seguro náutico."
          className="mt-1.5 w-full rounded-lg border border-borda-sutil bg-creme-suave px-4 py-3 text-sm text-texto placeholder:text-texto-suave/70 focus:border-verde-profundo focus:bg-branco focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-verde-profundo px-6 py-3.5 text-sm font-bold text-branco transition-colors hover:bg-verde-escuro sm:w-auto"
      >
        <MessageCircle
          className="h-4 w-4 text-dourado-areia"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span>Continuar conversa no WhatsApp</span>
      </button>

      {feedback && (
        <p
          role="status"
          className="rounded-lg border border-verde-profundo/20 bg-creme px-4 py-3 text-xs font-medium text-verde-profundo"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
