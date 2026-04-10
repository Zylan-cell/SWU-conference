import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/web/dist/server.js';
import { u as useLang, T as Title, H as HttpStatusCode } from '../virtual/entry.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/h3/dist/_entries/node.mjs';
import 'solid-start:get-manifest';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/dist/server.js';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/radix3/dist/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/seroval/dist/esm/production/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/pathe/dist/index.mjs';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/solid-js/web/storage/dist/storage.js';
import 'file:///home/thoisoi/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/Projects/js/university/node_modules/cookie-es/dist/index.mjs';

var _tmpl$ = ["<main", ' class="page"><!--$-->', "<!--/--><!--$-->", "<!--/--><h1>", "</h1><p>", "</p></main>"];
const id$$ = "src/routes/[...404].tsx?pick=default&pick=$css";
const content = {
  bg: {
    title: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430",
    message: "\u041C\u043E\u043B\u044F, \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u043C\u0435\u043D\u044E\u0442\u043E, \u0437\u0430 \u0434\u0430 \u0441\u0435 \u0432\u044A\u0440\u043D\u0435\u0442\u0435 \u043A\u044A\u043C \u043D\u0430\u0447\u0430\u043B\u043E\u0442\u043E."
  },
  en: {
    title: "Page Not Found",
    message: "Please use the menu to return to the home page."
  }
};
function NotFound() {
  const {
    lang
  } = useLang();
  const t = () => content[lang()];
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Title, {
    get children() {
      return t().title;
    }
  })), escape(createComponent(HttpStatusCode, {
    code: 404
  })), escape(t().title), escape(t().message));
}

export { NotFound as default, id$$ };
//# sourceMappingURL=_...404_-Be67uQaC.mjs.map
