# Site Institucional Zanella Seguros

Novo site institucional da **Zanella Seguros** (Itajaí/SC), desenvolvido em **Next.js (App Router)**, **TypeScript** e **Tailwind CSS**, com arquitetura estática e foco em atendimento consultivo.

## Como rodar localmente

```bash
npm install
npm run dev
```

Para gerar o build de produção:

```bash
npm run build
npm run start
```

> **Observação para Windows com Google Drive (`DriveFS`):** caso o projeto esteja em uma pasta sincronizada pelo Google Drive e o `npm install` apresente erros `TAR_ENTRY_ERROR` ou `EBADF` ao extrair `node_modules`, recomenda-se manter o clone local em uma unidade NTFS (ou pausar a sincronização durante a instalação).

## Onde editar conteúdos, cores, fotos e WhatsApp

- **Dados institucionais, contatos, WhatsApp e equipe:** [content/empresa.ts](content/empresa.ts)
  - Para alterar o WhatsApp, edite `EMPRESA.whatsappDisplay` e `EMPRESA.whatsappNumero` (formato `55DDDNUMERO`).
  - Para atualizar horário de atendimento, SUSEP, razão social e depoimentos reais, edite os campos correspondentes em `EMPRESA`.
- **Modalidades de seguros e consórcios:** [content/seguros.ts](content/seguros.ts)
  - Todos os textos de abertura, listas, ressalvas, perguntas frequentes e mensagens pré-preenchidas de WhatsApp estão centralizados neste arquivo, sem necessidade de editar componentes visuais.
- **Identidade visual e cores:** variáveis CSS em [app/globals.css](app/globals.css) (`--verde-profundo`, `--creme`, `--dourado-areia`, `--branco`, `--texto`).
- **Logo e fotos:** arquivos na pasta `public/images/` (logo atual em `public/images/logo-zanella.png`). Os espaços de fotografia estão marcados com o componente `PhotoPlaceholder` para substituição por `<Image />` com as fotos reais da Zanella.

## Placeholders para confirmar com a Zanella

1. Razão social completa e CNPJ ([content/empresa.ts](content/empresa.ts))
2. Número de registro na SUSEP ([content/empresa.ts](content/empresa.ts))
3. Horário de atendimento do escritório ([content/empresa.ts](content/empresa.ts))
4. Encarregado pelo tratamento de dados / DPO, se houver ([app/politica-de-privacidade/page.tsx](app/politica-de-privacidade/page.tsx))
5. Três depoimentos reais de clientes com nome e cidade/segmento ([content/empresa.ts](content/empresa.ts))
6. Detalhamento comercial de Vida em Grupo e Saúde Empresarial ([app/empresas/page.tsx](app/empresas/page.tsx))
7. Autorização formal e logotipos de clientes empresariais, caso desejem exibir ([app/empresas/page.tsx](app/empresas/page.tsx))
