import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/web/dist/server.js';
import { u as useLang, T as Title } from '../virtual/entry.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/h3/dist/_entries/node.mjs';
import 'solid-start:get-manifest';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/dist/server.js';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/radix3/dist/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/seroval/dist/esm/production/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/pathe/dist/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/web/storage/dist/storage.js';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/cookie-es/dist/index.mjs';

var _tmpl$ = ["<main", ' class="page"><!--$-->', "<!--/--><h1>", '</h1><section class="locationBlocks"><article class="locationText"><p><strong>', "</strong></p><p>", '</p></article><article class="locationMap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.1544461354665!2d23.0749929755676!3d42.018419056617866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aaf5f5bcb8e9cf%3A0x9dfcd08ef61c0444!2z0K7Qs9C-0LfQsNC_0LDQtNC10L0g0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDigJ7QndC10L7RhNC40YIg0KDQuNC70YHQutC44oCc!5e0!3m2!1sru!2sbg!4v1773836632145!5m2!1sru!2sbg" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen class="mapIframe"></iframe></article></section></main>'];
const id$$ = "src/routes/location.tsx?pick=default&pick=$css";
const content = {
  bg: {
    title: "\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    address: "\u0443\u043B. \u0418\u0432\u0430\u043D \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432 \u211666, \u0411\u043B\u0430\u0433\u043E\u0435\u0432\u0433\u0440\u0430\u0434 2700",
    mapHint: "\u0413\u043B\u0435\u0434\u0430\u0439\u0442\u0435 \u043A\u0430\u0440\u0442\u0430\u0442\u0430 \u043D\u0430 \u043A\u0430\u043C\u043F\u0443\u0441\u0430 \u043F\u043E-\u0434\u043E\u043B\u0443."
  },
  en: {
    title: "Location",
    address: "66 Ivan Mihailov St., Blagoevgrad 2700",
    mapHint: "See the campus map below."
  }
};
function Location() {
  const {
    lang
  } = useLang();
  const t = () => content[lang()];
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Title, {
    get children() {
      return t().title;
    }
  })), escape(t().title), escape(t().address), escape(t().mapHint));
}

export { Location as default, id$$ };
//# sourceMappingURL=location-lkX6yV2k.mjs.map
