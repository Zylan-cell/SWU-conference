import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";

import campus1 from "../../images/1.jpg";
import campus2 from "../../images/2.jpg";
import campus3 from "../../images/3.jpg";
import campus4 from "../../images/4.jpg";
import logoTech from "../../images/technical.png";
import { createSignal, onMount, onCleanup } from "solid-js";

const content = {
  bg: {
    title: "Начало",
    welcome: "Добре дошли!",
    desc: "Минималистичен сайт с бърза навигация и лесен достъп до информация.",
    sectionTitle1: "За университета",
    sectionTitle2: "Акредитация",
    sectionTitle3: "Кратка история",
    highlight:
      "Югозападният университет „Неофит Рилски“ е основан през 1976 г. в Благоевград. Той е сред водещите класически университети в страната.",
    accreditation:
      "Със своята 45-годишна история ЮЗУ „Неофит Рилски“ завоюва своето място в научното и образователно пространство на България и Югоизточна Европа. Университетът е акредитиран с максимална оценка от Националната агенция за оценяване и акредитация, което е гаранция за качество на образователната услуга в 81 бакалавърски и магистърски програми след средно образование, 153 магистърски програми след завършено висше образование и 83 докторски програми. Обучението се провежда в 30 професионални направления в областта на хуманитарните, техническите, природните, управленските, социалните, педагогическите, правните и икономическите науки, изкуствата, здравните грижи, общественото здраве и спорта, сигурността и отбраната и др. По този показател университетът е на първо място в страната.",
    history:
      "Университетът в Благоевград, чийто патрон е патриархът на съвременното българско образование Неофит Рилски, започва своята история като филиал на Софийския университет „Свети Климент Охридски“ със Заповед № 323 от 9 август 1975 г. на Бюрото на Министерския съвет (Държавен вестник, бр. 65 от 1975 г.). Първите 200 студенти са приети през учебната 1976/1977 година в две специалности – „Педагогика за подготовка на учители в детски градини“ и „Педагогика за подготовка на начални учители“. Така за първи път в България започва университетско образование за учители в детски градини и начални училища. Обучението се осъществява от трима професори, двама доценти и тринадесет асистенти.",
  },
  en: {
    title: "Home",
    welcome: "Welcome!",
    desc: "A minimalist site with fast navigation and easy access to information.",
    sectionTitle1: "About the university",
    sectionTitle2: "Accreditation",
    sectionTitle3: "Brief history",
    highlight:
      "South-West University ‘Neofit Rilski’ was founded in 1976 in Blagoevgrad. It is one of the leading classical universities in the country. With its 45-year history, SWU has secured its place in the scientific and educational space of Bulgaria and Southeast Europe.",
    accreditation:
      "The university is accredited with the maximum score by the National Evaluation and Accreditation Agency, which guarantees the quality of education in 81 bachelor and master programs after secondary education, 153 master programs after higher education, and 83 doctoral programs.",
    fields:
      "Education is conducted in 30 professional fields in the humanities, technical, natural, management, social, pedagogical, legal and economic sciences, arts, healthcare, public health and sports, security and defense, etc. By this measure, the university ranks first in the country.",
    address: "66 Ivan Mihailov St., Blagoevgrad 2700, Bulgaria",
    history:
      "The university in Blagoevgrad, whose patron is the patriarch of modern Bulgarian education Neofit Rilski, began its history as a branch of Sofia University “St. Kliment Ohridski” by Order No. 323 of August 9, 1975, of the Bureau of the Council of Ministers (State Gazette, No. 65 of 1975). The first 200 students were admitted in the 1976/1977 academic year in two specialties – “Pedagogy for training kindergarten teachers” and “Pedagogy for training primary school teachers”. Thus, for the first time in Bulgaria, university education for kindergarten and primary school teachers began. The education was provided by three professors, two associate professors and thirteen assistants.",
    campus: "Explore the university:",
    logos: "South-West University \"Neofit Rilski\" and Technical Faculty",
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = () => content[lang()];

  const images = [campus1, campus2, campus3, campus4];
  const [current, setCurrent] = createSignal(0);
  const prev = () => setCurrent((current() - 1 + images.length) % images.length);
  const next = () => setCurrent((current() + 1) % images.length);

  // Сдвиг слайдов ровно на 100% ширины
  const translate = () => `translateX(-${current() * 100}%)`;

  let intervalId: number | undefined;
  onMount(() => {
    intervalId = window.setInterval(next, 5000);
  });
  onCleanup(() => {
    if (intervalId) window.clearInterval(intervalId);
  });

  return (
    <main>
      {/* Слайдер вынесен на уровень выше для поддержки полной ширины */}
      <section class="hero-container">
        <button class="slider-btn prev" onClick={prev} aria-label="Previous image">
          ‹
        </button>

        <div class="slider-track" style={{ transform: translate() }}>
          {images.map((img, index) => (
            <div class="slide-full" key={index}>
              <img src={img} alt="University campus" />
            </div>
          ))}
        </div>

        <button class="slider-btn next" onClick={next} aria-label="Next image">
          ›
        </button>

        <div class="slider-dots">
          {images.map((_, index) => (
            <button
              class={"dot" + (index === current() ? " active" : "")}
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Контент страницы ограничен по ширине */}
      <div class="page">
        <Title>{t().title}</Title>
        <h1>{t().welcome}</h1>
        <p>{t().desc}</p>

        <section class="univInfo">
          <div class="univBlock">
            <h2>{t().sectionTitle1}</h2>
            <p>{t().highlight}</p>
          </div>

          <div class="univBlock">
            <h2>{t().sectionTitle2}</h2>
            <p>{t().accreditation}</p>
          </div>

          <div class="univBlock">
            <h2>{t().sectionTitle3}</h2>
            <p>{t().history}</p>
          </div>
        </section>

        <footer class="logoBar">
          <div class="separator">
            <span class="separatorLabel">
              <img src={logoTech} alt="Technical faculty logo" />
              Технически Факултет
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}