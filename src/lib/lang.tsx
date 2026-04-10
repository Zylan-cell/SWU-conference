import { createContext, createEffect, createSignal, JSX, onCleanup, onMount, useContext } from "solid-js";

export type Lang = "bg" | "en";

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "bg";
  const stored = window.localStorage.getItem("lang");
  if (stored === "en") return "en";
  return "bg";
};

const LangContext = createContext<{
  lang: () => Lang;
  setLang: (value: Lang) => void;
}>(null as any);

export function LangProvider(props: { children: JSX.Element }) {
  const [lang, setLang] = createSignal<Lang>(getInitialLang());

  createEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang());
  });

  onMount(() => {
    if (typeof window === "undefined") return;
    const onStorage = (event: StorageEvent) => {
      if (event.key === "lang" && (event.newValue === "bg" || event.newValue === "en")) {
        setLang(event.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    onCleanup(() => window.removeEventListener("storage", onStorage));
  });

  return <LangContext.Provider value={{ lang, setLang }}>{props.children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
