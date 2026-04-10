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

var _tmpl$ = ["<main", ' class="page"><!--$-->', "<!--/--><h1>", "</h1><p>", "</p></main>"];
const id$$ = "src/routes/authors.tsx?pick=default&pick=$css";
const content = {
  bg: {
    title: "\u0417\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0442\u0435",
    desc: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0442\u0435."
  },
  en: {
    title: "For Authors",
    desc: "Information for authors."
  }
};
function Authors() {
  const {
    lang
  } = useLang();
  const t = () => content[lang()];
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Title, {
    get children() {
      return t().title;
    }
  })), escape(t().title), escape(t().desc));
}

export { Authors as default, id$$ };
//# sourceMappingURL=authors-DS0nxUX7.mjs.map
