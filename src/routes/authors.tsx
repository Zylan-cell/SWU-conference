import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";

const content = {
  bg: { title: "За авторите", desc: "Информация за авторите." },
  en: { title: "For Authors", desc: "Information for authors." },
};

export default function Authors() {
  const { lang } = useLang();
  const t = () => content[lang()];

  return (
    <main class="page">
      <Title>{t().title}</Title>
      <h1>{t().title}</h1>
      <p>{t().desc}</p>
    </main>
  );
}
