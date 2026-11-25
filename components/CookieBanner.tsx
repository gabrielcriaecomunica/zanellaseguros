"use client";

import React, { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "zanella_lgpd_cookies_v1";
const EVENT_NAME = "zanella-cookie-consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT_NAME, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT_NAME, callback);
  };
}

function getSnapshot(): boolean {
  try {
    return !window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const accept = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignora erro de armazenamento local
    }
    window.dispatchEvent(new Event(EVENT_NAME));
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso sobre cookies e privacidade"
      className="fixed right-4 bottom-20 left-4 z-30 mx-auto max-w-xl rounded-xl border border-borda-sutil bg-branco p-4 shadow-md sm:right-auto sm:bottom-6 sm:left-6 lg:right-24 lg:bottom-5 lg:left-6 lg:mx-0 lg:max-w-fit lg:rounded-full lg:px-5 lg:py-2 lg:shadow-sm"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:gap-4">
        <p className="text-xs leading-relaxed text-texto-suave lg:whitespace-nowrap">
          Utilizamos apenas cookies essenciais para o bom funcionamento do site,
          em respeito à LGPD. Veja nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-semibold text-verde-profundo underline underline-offset-2"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-lg bg-verde-profundo px-4 py-2 text-xs font-semibold text-branco transition-colors hover:bg-verde-escuro lg:rounded-full lg:px-3.5 lg:py-1.5"
        >
          Entendi
        </button>
      </div>
    </aside>
  );
}
