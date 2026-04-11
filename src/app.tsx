
import { MetaProvider, Title } from "@solidjs/meta";
import { A, Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LangProvider } from "./lib/lang";
import logoUniv from "../images/swu.png";
import Home from "./routes/index";
import Structure from "./routes/structure";
import Topics from "./routes/topics";
import Authors from "./routes/authors";
import Location from "./routes/location";
import NotFound from "./routes/[...404]";
import "./app.css";

export default function App() {
  return (
    <Router
      base={import.meta.env.BASE_URL}
      root={props => (
        <MetaProvider>
          <LangProvider>
            <Title>SolidStart</Title>
            <header class="site-header">
              <nav class="site-nav">
                <A class="navLink" href="">
                  Начало
                </A>
                <A class="navLink" href="structure">
                  Организационна структура
                </A>
                <A class="navLink" href="topics">
                  Основни теми на конференцията
                </A>

                <img class="navLogo navLogoBig" src={logoUniv} alt="SWU logo" />

                <A class="navLink" href="authors">
                  За авторите
                </A>
                <A class="navLink" href="location">
                  Местоположение
                </A>
                <a
                  class="navLink navLinkAccent"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScX2LXIdVwF6hW1FGtUdVBVC6rhiPOtOpc9YypDN0oPOiltpA/viewform?usp=header"
                  target="_blank"
                  rel="noopener"
                >
                  Изпрати статия
                </a>
              </nav>
              <div class="lang-switch">
                <LanguageSwitcher />
              </div>
            </header>
            <Suspense>{props.children}</Suspense>
          </LangProvider>
        </MetaProvider>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/structure" component={Structure} />
      <Route path="/topics" component={Topics} />
      <Route path="/authors" component={Authors} />
      <Route path="/location" component={Location} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
