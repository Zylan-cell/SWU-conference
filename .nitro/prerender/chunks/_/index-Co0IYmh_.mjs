import { ssr, ssrHydrationKey, ssrStyleProperty, escape, ssrAttribute, createComponent } from 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/web/dist/server.js';
import { u as useLang, T as Title } from '../virtual/entry.mjs';
import { createSignal, onMount, onCleanup } from 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/dist/server.js';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/h3/dist/_entries/node.mjs';
import 'solid-start:get-manifest';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/radix3/dist/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/seroval/dist/esm/production/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/pathe/dist/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/web/storage/dist/storage.js';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/cookie-es/dist/index.mjs';

const campus1 = "/_build/assets/1-Dds-0y4n.jpg";
const campus2 = "/_build/assets/2-BZP38fBP.jpg";
const campus3 = "/_build/assets/3-CO52-Bz_.jpg";
const campus4 = "/_build/assets/4-BVsd3w8p.jpg";
const logoTech = "/_build/assets/technical-DJ1Ar0XL.png";
var _tmpl$ = ["<main", '><section class="hero-container"><button class="slider-btn prev" aria-label="Previous image">\u2039</button><div class="slider-track" style="', '">', '</div><button class="slider-btn next" aria-label="Next image">\u203A</button><div class="slider-dots">', '</div></section><div class="page"><!--$-->', "<!--/--><h1>", "</h1><p>", '</p><section class="univInfo"><div class="univBlock"><h2>', "</h2><p>", '</p></div><div class="univBlock"><h2>', "</h2><p>", '</p></div><div class="univBlock"><h2>', "</h2><p>", '</p></div></section><footer class="logoBar"><div class="separator"><span class="separatorLabel"><img', ' alt="Technical faculty logo">\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u0424\u0430\u043A\u0443\u043B\u0442\u0435\u0442</span></div></footer></div></main>'], _tmpl$2 = ["<div", ' class="slide-full"', "><img", ' alt="University campus"></div>'], _tmpl$3 = ["<button", ' aria-label="', '"></button>'];
const id$$ = "src/routes/index.tsx?pick=default&pick=$css";
const content = {
  bg: {
    title: "\u041D\u0430\u0447\u0430\u043B\u043E",
    welcome: "\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u043B\u0438!",
    desc: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u0435\u043D \u0441\u0430\u0439\u0442 \u0441 \u0431\u044A\u0440\u0437\u0430 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0438 \u043B\u0435\u0441\u0435\u043D \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F.",
    sectionTitle1: "\u0417\u0430 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430",
    sectionTitle2: "\u0410\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F",
    sectionTitle3: "\u041A\u0440\u0430\u0442\u043A\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F",
    highlight: "\u042E\u0433\u043E\u0437\u0430\u043F\u0430\u0434\u043D\u0438\u044F\u0442 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u201E\u041D\u0435\u043E\u0444\u0438\u0442 \u0420\u0438\u043B\u0441\u043A\u0438\u201C \u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u043F\u0440\u0435\u0437 1976 \u0433. \u0432 \u0411\u043B\u0430\u0433\u043E\u0435\u0432\u0433\u0440\u0430\u0434. \u0422\u043E\u0439 \u0435 \u0441\u0440\u0435\u0434 \u0432\u043E\u0434\u0435\u0449\u0438\u0442\u0435 \u043A\u043B\u0430\u0441\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0438 \u0432 \u0441\u0442\u0440\u0430\u043D\u0430\u0442\u0430.",
    accreditation: "\u0421\u044A\u0441 \u0441\u0432\u043E\u044F\u0442\u0430 45-\u0433\u043E\u0434\u0438\u0448\u043D\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u042E\u0417\u0423 \u201E\u041D\u0435\u043E\u0444\u0438\u0442 \u0420\u0438\u043B\u0441\u043A\u0438\u201C \u0437\u0430\u0432\u043E\u044E\u0432\u0430 \u0441\u0432\u043E\u0435\u0442\u043E \u043C\u044F\u0441\u0442\u043E \u0432 \u043D\u0430\u0443\u0447\u043D\u043E\u0442\u043E \u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u043D\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u0438 \u042E\u0433\u043E\u0438\u0437\u0442\u043E\u0447\u043D\u0430 \u0415\u0432\u0440\u043E\u043F\u0430. \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u044A\u0442 \u0435 \u0430\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0440\u0430\u043D \u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0442 \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0430\u0442\u0430 \u0430\u0433\u0435\u043D\u0446\u0438\u044F \u0437\u0430 \u043E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435 \u0438 \u0430\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F, \u043A\u043E\u0435\u0442\u043E \u0435 \u0433\u0430\u0440\u0430\u043D\u0446\u0438\u044F \u0437\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u0430\u0442\u0430 \u0443\u0441\u043B\u0443\u0433\u0430 \u0432 81 \u0431\u0430\u043A\u0430\u043B\u0430\u0432\u044A\u0440\u0441\u043A\u0438 \u0438 \u043C\u0430\u0433\u0438\u0441\u0442\u044A\u0440\u0441\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u0441\u043B\u0435\u0434 \u0441\u0440\u0435\u0434\u043D\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435, 153 \u043C\u0430\u0433\u0438\u0441\u0442\u044A\u0440\u0441\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u0441\u043B\u0435\u0434 \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u043D\u043E \u0432\u0438\u0441\u0448\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 83 \u0434\u043E\u043A\u0442\u043E\u0440\u0441\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438. \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435\u0442\u043E \u0441\u0435 \u043F\u0440\u043E\u0432\u0435\u0436\u0434\u0430 \u0432 30 \u043F\u0440\u043E\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0442\u0430 \u043D\u0430 \u0445\u0443\u043C\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u0438\u0442\u0435, \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0442\u0435, \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0442\u0435, \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0441\u043A\u0438\u0442\u0435, \u0441\u043E\u0446\u0438\u0430\u043B\u043D\u0438\u0442\u0435, \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0442\u0435, \u043F\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0438 \u0438\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0442\u0435 \u043D\u0430\u0443\u043A\u0438, \u0438\u0437\u043A\u0443\u0441\u0442\u0432\u0430\u0442\u0430, \u0437\u0434\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0433\u0440\u0438\u0436\u0438, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043E\u0442\u043E \u0437\u0434\u0440\u0430\u0432\u0435 \u0438 \u0441\u043F\u043E\u0440\u0442\u0430, \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442\u0442\u0430 \u0438 \u043E\u0442\u0431\u0440\u0430\u043D\u0430\u0442\u0430 \u0438 \u0434\u0440. \u041F\u043E \u0442\u043E\u0437\u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u044A\u0442 \u0435 \u043D\u0430 \u043F\u044A\u0440\u0432\u043E \u043C\u044F\u0441\u0442\u043E \u0432 \u0441\u0442\u0440\u0430\u043D\u0430\u0442\u0430.",
    history: "\u041F\u044A\u0440\u0432\u0438\u0442\u0435 200 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0438 \u0431\u044F\u0445\u0430 \u043F\u0440\u0438\u0435\u0442\u0438 \u043F\u0440\u0435\u0437 \u0443\u0447\u0435\u0431\u043D\u0430\u0442\u0430 1976/1977 \u0433. \u0432 \u0434\u0432\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u043D\u043E\u0441\u0442\u0438 \u0438 \u0442\u0430\u043A\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430\u0442\u0430 \u043D\u0430 \u0434\u0435\u0442\u0441\u043A\u0438 \u0438 \u043D\u0430\u0447\u0430\u043B\u043D\u0438 \u0443\u0447\u0438\u0442\u0435\u043B\u0438 \u0441 \u0432\u0438\u0441\u0448\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435."
  },
  en: {
    title: "Home",
    welcome: "Welcome!",
    desc: "A minimalist site with fast navigation and easy access to information.",
    sectionTitle1: "About the university",
    sectionTitle2: "Accreditation",
    sectionTitle3: "Brief history",
    highlight: "South-West University \u2018Neofit Rilski\u2019 was founded in 1976 in Blagoevgrad. It is one of the leading classical universities in the country. With its 45-year history, SWU has secured its place in the scientific and educational space of Bulgaria and Southeast Europe.",
    accreditation: "The university is accredited with the maximum score by the National Evaluation and Accreditation Agency, which guarantees the quality of education in 81 bachelor and master programs after secondary education, 153 master programs after higher education, and 83 doctoral programs.",
    fields: "Education is conducted in 30 professional fields in the humanities, technical, natural, management, social, pedagogical, legal and economic sciences, arts, healthcare, public health and sports, security and defense, etc. By this measure, the university ranks first in the country.",
    address: "66 Ivan Mihailov St., Blagoevgrad 2700, Bulgaria",
    history: "The university in Blagoevgrad, whose patron is the patriarch of modern Bulgarian education Neofit Rilski, began its history as a branch of Sofia University \u201CSt. Kliment Ohridski\u201D by Order No. 323 of August 9, 1975, of the Bureau of the Council of Ministers (State Gazette, No. 65 of 1975). The first 200 students were admitted in the 1976/1977 academic year in two specialties \u2013 \u201CPedagogy for training kindergarten teachers\u201D and \u201CPedagogy for training primary school teachers\u201D. Thus, for the first time in Bulgaria, university education for kindergarten and primary school teachers began. The education was provided by three professors, two associate professors and thirteen assistants.",
    campus: "Explore the university:",
    logos: 'South-West University "Neofit Rilski" and Technical Faculty'
  }
};
function Home() {
  const {
    lang
  } = useLang();
  const t = () => content[lang()];
  const images = [campus1, campus2, campus3, campus4];
  const [current, setCurrent] = createSignal(0);
  const next = () => setCurrent((current() + 1) % images.length);
  const translate = () => `translateX(-${current() * 100}%)`;
  let intervalId;
  onMount(() => {
    intervalId = window.setInterval(next, 5e3);
  });
  onCleanup(() => {
    if (intervalId) window.clearInterval(intervalId);
  });
  return ssr(_tmpl$, ssrHydrationKey(), ssrStyleProperty("transform:", escape(translate(), true)), escape(images.map((img, index) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("key", escape(index, true), false), ssrAttribute("src", escape(img, true), false)))), escape(images.map((_, index) => ssr(_tmpl$3, ssrHydrationKey() + ssrAttribute("class", "dot" + (index === current() ? " active" : ""), false), `Go to image ${escape(index, true) + 1}`))), escape(createComponent(Title, {
    get children() {
      return t().title;
    }
  })), escape(t().welcome), escape(t().desc), escape(t().sectionTitle1), escape(t().highlight), escape(t().sectionTitle2), escape(t().accreditation), escape(t().sectionTitle3), escape(t().history), ssrAttribute("src", escape(logoTech, true), false));
}

export { Home as default, id$$ };
//# sourceMappingURL=index-Co0IYmh_.mjs.map
