import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";

const content = {
  bg: { title: "Основни теми на конференцията", desc: "Тук са основните теми на конференцията." },
  en: { title: "Main Topics of the Conference", desc: "Here are the main topics of the conference." },
};

export default function Topics() {
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
