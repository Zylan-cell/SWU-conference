import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";

const content = {
  bg: {
    title: "Страницата не е намерена",
    message: "Моля, използвайте менюто, за да се върнете към началото.",
  },
  en: {
    title: "Page Not Found",
    message: "Please use the menu to return to the home page.",
  },
};

export default function NotFound() {
  const { lang } = useLang();
  const t = () => content[lang()];
  return (
    <main class="page">
      <Title>{t().title}</Title>
      <h1>{t().title}</h1>
      <p>{t().message}</p>
    </main>
  );
}
