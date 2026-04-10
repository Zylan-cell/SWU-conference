import { useLang, type Lang } from "../lib/lang";

const LANGS: Array<{ code: Lang; label: string }> = [
  { code: "bg", label: "BG" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div class="lang-buttons">
      {LANGS.map((l) => (
        <button
          type="button"
          class={lang() === l.code ? "active" : ""}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
