import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";

const content = {
  bg: {
    title: "За авторите",
    intro:
      "Авторите се поканват да изпращат оригинални, преди това непубликувани научни трудове, които не се рецензират в момента в други конференции или списания. Всички статии следва да се изпращат през сайта на конференцията, като се посочва секцията, за която се предлага трудът.",
    requirements:
      "Авторите трябва да използват официалния шаблон на конференцията, като спазват изискванията за структура, стил и форматиране. Препоръчителната дължина е от 2 до 4 страници, включително фигури, таблици и библиография.",
    formatsTitle: "Формати за подаване",
    formatConference: "за сборник на конференция",
    formatJournal: "за списание на английски език",
    downloadLabel: "ИЗТЕГЛЯНЕ",
    files:
      "Ръкописите се изготвят на български или на английски език и се подават в PDF формат.",
    confirmation:
      "След изпращане проверете електронната си поща за автоматично потвърждение на получаването.",
    responsibility:
      "Авторите носят пълна отговорност за точността на въведените данни, както и за съответствието на ръкописа с всички технически изисквания.",
    reviewTitle: "Рецензиране и приемане",
    reviewProcess:
      "Всички статии ще преминат през процес на двойна анонимна рецензия от независими експерти.",
    reviewDecision:
      "Окончателното решение (приемане / отхвърляне / коригиране) ще бъде съобщено на авторите по електронната поща.",
    participation:
      "За да бъде включена приетата статия в сборника на конференцията, е необходимо поне един от авторите да представи труда по време на събитието.",
    journal:
      "Част от представените доклади на конференцията ще бъдат публикувани в списание E+E",
    conferenceTemplateUrl:
      "https://docs.google.com/document/d/1XqjVlMPQSPg9m_hVJXXcIiLOcl6Immnw/edit?usp=sharing&ouid=106724579998279197746&rtpof=true&sd=true",
    journalTemplateUrl:
      "https://docs.google.com/document/d/1TbCEHw6kSxCweDt8GQgojXRjKBeas62-/edit?usp=drive_link&ouid=106724579998279197746&rtpof=true&sd=true"
  },
  en: {
    title: "For Authors",
    intro:
      "Authors are invited to submit original, previously unpublished scientific papers that are not currently under review by other conferences or journals. All papers should be submitted through the conference website, with the relevant section indicated for the proposed work.",
    requirements:
      "Authors must use the official conference template and follow the requirements for structure, style, and formatting. The recommended length is from 2 to 4 pages, including figures, tables, and bibliography.",
    formatsTitle: "Submission Formats",
    formatConference: "for conference proceedings",
    formatJournal: "for an English-language journal",
    downloadLabel: "DOWNLOAD",
    files:
      "Manuscripts can be prepared in Bulgarian or English and should be submitted in PDF format.",
    confirmation:
      "After submission, please check your email for an automatic confirmation of receipt.",
    responsibility:
      "Authors are fully responsible for the accuracy of the submitted data and for ensuring that the manuscript complies with all technical requirements.",
    reviewTitle: "Review and Acceptance",
    reviewProcess:
      "All papers will go through a double-blind review process by independent experts.",
    reviewDecision:
      "The final decision (acceptance / rejection / revision) will be communicated to the authors by email.",
    participation:
      "For an accepted paper to be included in the conference proceedings, at least one of the authors must present the work during the event.",
    journal:
      "A selection of the conference presentations will be published in the E+E journal.",
    conferenceTemplateUrl:
      "https://docs.google.com/document/d/1XqjVlMPQSPg9m_hVJXXcIiLOcl6Immnw/edit?usp=sharing&ouid=106724579998279197746&rtpof=true&sd=true",
    journalTemplateUrl:
      "https://docs.google.com/document/d/1TbCEHw6kSxCweDt8GQgojXRjKBeas62-/edit?usp=drive_link&ouid=106724579998279197746&rtpof=true&sd=true"
  },
};

export default function Authors() {
  const { lang } = useLang();
  const t = () => content[lang()];

  return (
    <main class="page authors-page">
      <Title>{t().title}</Title>
      <h1>{t().title}</h1>

      <div class="authors-content">
        <p>{t().intro}</p>
        <p>{t().requirements}</p>

        <h2>{t().formatsTitle}</h2>
        <div class="authors-downloads">
          <a class="authors-download" href={t().conferenceTemplateUrl} target="_blank" rel="noopener">
            {t().downloadLabel} <span>{t().formatConference}</span>
          </a>
          <a class="authors-download" href={t().journalTemplateUrl} target="_blank" rel="noopener">
            {t().downloadLabel} <span>{t().formatJournal}</span>
          </a>
        </div>

        <p>{t().files}</p>
        <p>{t().confirmation}</p>
        <p>{t().responsibility}</p>

        <h2>{t().reviewTitle}</h2>
        <p>{t().reviewProcess}</p>
        <p>{t().reviewDecision}</p>
        <p>{t().participation}</p>
        <p>{t().journal}</p>
      </div>
    </main>
  );
}
