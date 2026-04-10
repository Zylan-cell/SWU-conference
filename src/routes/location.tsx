import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";


const content = {
  bg: {
    title: "Местоположение",
    address: "ул. Иван Михайлов №66, Благоевград 2700",
    mapHint: "Гледайте картата на кампуса по-долу.",
  },
  en: {
    title: "Location",
    address: "66 Ivan Mihailov St., Blagoevgrad 2700",
    mapHint: "See the campus map below.",
  },
};

export default function Location() {
  const { lang } = useLang();
  const t = () => content[lang()];

  return (
    <main class="page">
      <Title>{t().title}</Title>
      <h1>{t().title}</h1>

      <section class="locationBlocks">
        <article class="locationText">
          <p>
            <strong>{t().address}</strong>
          </p>
          <p>{t().mapHint}</p>
        </article>

        <article class="locationMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.1544461354665!2d23.0749929755676!3d42.018419056617866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aaf5f5bcb8e9cf%3A0x9dfcd08ef61c0444!2z0K7Qs9C-0LfQsNC_0LDQtNC10L0g0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDigJ7QndC10L7RhNC40YIg0KDQuNC70YHQutC44oCc!5e0!3m2!1sru!2sbg!4v1773836632145!5m2!1sru!2sbg"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
            class="mapIframe"
          />
        </article>
      </section>
    </main>
  );
}
