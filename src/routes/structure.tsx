import { Title } from "@solidjs/meta";
import { useLang } from "../lib/lang";

const content = {
  bg: {
    title: "Организационна структура",
    conferenceName: "Иновации и бъдещи тенденции в комуникациите и компютърните науки",
    president: "Председател: проф. д-р Николай Марин – Ректор на Югозападен университет „Неофит Рилски“",
    cochairsTitle: "Съпредседатели",
    cochairs: [
      "проф. д-р Иванка Станкова",
      "проф. д-р Стефан Стефанов",
      "проф. д-р инж. Снежина Андонова",
    ],
    orgCommitteeTitle: "Организационен комитет",
    orgCommitteeMembersTitle: "Членове",
    orgCommitteeMembers: [
      "проф. д-р инж. Габриела Атанасова",
      "доц. д-р Фатима Сапунджи",
      "доц. д-р Димитрина Керина",
      "доц. д-р инж. Николай Атанасов",
      "доц. д-р инж. Иавн Недялков",
      "доц. д-р инж. Иван Иванов",
      "гл. ас. д-р Иво Ангелов",
      "гл. ас. д-р инж. Георги Георгиев",
      "гл. ас. д-р инж. Филип Цветанов",
      "ас. д-р Манол Аврамов",
      "Драгана Здравкова",
      "Елеизабет Симеонова",
      "Станислав Грозданов",
      "Димитър Шопов",
      "Росен Митов",
      "Димитър Суванджиев",
      "Георги Достинов",
      "Фатион Сина",
      "Борислав Борисов",
      "Тимофий Пригуза",
      "Георги Радулов",
    ],
    programCommitteeTitle: "Програмен комитет",
    programCommitteeMembersTitle: "Членове",
    programCommitteeMembers: [
      "проф. д-р инж. Снежина АНДОНОВА - Югозападен университет „Неофит Рилски“",
      "проф. д-р инж. Габриела АТАНАСОВА - Югозападен университет „Неофит Рилски“",
      "Professor Simona MICLĂUȘ - \"Nicolae Balcescu\" Land Forces Academy of Sibiu",
      "проф. д-р Найден Шиваров – Българска академия на науките",
      "доц. д-р Фатима Сапунджи - Югозападен университет „Неофит Рилски“",
      "доц. д-р Димитрина Керина - Югозападен университет „Неофит Рилски“",
      "Associate Professor Annamaria Sarbu, \"Nicolae Balcescu\" Land Forces Academy of Sibiu",
      "доц. д-р инж. Николай Атанасов - Югозападен университет „Неофит Рилски“",
      "доц. д-р инж. Иван Недялков - Югозападен университет „Неофит Рилски“",
      "доц. д-р инж. Иван Иванов - Югозападен университет „Неофит Рилски“",
    ],
  },
  en: {
    title: "Organizational Structure",
    conferenceName: "Innovations and Future Trends in Communications and Computer Science",
    president: "Chair: Prof. Dr. Nikolay Marin – Rector of South-West University “Neofit Rilski”",
    cochairsTitle: "Co-chairs",
    cochairs: [
      "Prof. Dr. Ivanka Stankova",
      "Prof. Dr. Stefan Stefanov",
      "Prof. Dr. Eng. Snezhina Andonova",
    ],
    orgCommitteeTitle: "Organizing Committee",
    orgCommitteeMembersTitle: "Members",
    orgCommitteeMembers: [
      "Prof. Dr. Eng. Gabriela Atanasova",
      "Assoc. Prof. Dr. Fatima Sapundzhi",
      "Assoc. Prof. Dr. Dimitrina Kerina",
      "Assoc. Prof. Dr. Eng. Nikolay Atanasov",
      "Assoc. Prof. Dr. Eng. Ivan Nedyalkov",
      "Assoc. Prof. Dr. Eng. Ivan Ivanov",
      "Assist. Prof. Dr. Ivo Angelov",
      "Assist. Prof. Dr. Eng. Georgi Georgiev",
      "Assist. Prof. Dr. Eng. Filip Tsvetanov",
      "Assist. Prof. Dr. Manol Avramov",
      "Dragana Zdravkova",
      "Eleizabet Simeonova",
      "Stanislav Grozdanov",
      "Dimitar Shopov",
      "Rossen Mitov",
      "Dimitar Suvandzhiev",
      "Georgi Dostonov",
      "Fation Sina",
      "Borislav Borisov",
      "Timofiy Priguza",
      "Georgi Radulov",
    ],
    programCommitteeTitle: "Program Committee",
    programCommitteeMembersTitle: "Members",
    programCommitteeMembers: [
      "Prof. Dr. Eng. Snezhina ANDONOVA - South-West University “Neofit Rilski”",
      "Prof. Dr. Eng. Gabriela ATANASOVA - South-West University “Neofit Rilski”",
      "Professor Simona MICLĂUȘ - \"Nicolae Balcescu\" Land Forces Academy of Sibiu",
      "Prof. Dr. Nayden Shivarov – Bulgarian Academy of Sciences",
      "Assoc. Prof. Dr. Fatima Sapundzhi - South-West University “Neofit Rilski”",
      "Assoc. Prof. Dr. Dimitrina Kerina - South-West University “Neofit Rilski”",
      "Associate Professor Annamaria Sarbu, \"Nicolae Balcescu\" Land Forces Academy of Sibiu",
      "Assoc. Prof. Dr. Eng. Nikolay Atanasov - South-West University “Neofit Rilski”",
      "Assoc. Prof. Dr. Eng. Ivan Nedyalkov - South-West University “Neofit Rilski”",
      "Assoc. Prof. Dr. Eng. Ivan Ivanov - South-West University “Neofit Rilski”",
    ],
  },
};

export default function Structure() {
  const { lang } = useLang();
  const t = () => content[lang()];
  return (
    <main class="page">
      <Title>{t().title}</Title>
      <h1>{t().title}</h1>
      <p>
        <strong>{t().conferenceName}</strong>
      </p>

      <section class="section">
        <h2>{t().president}</h2>
      </section>

      <details class="details">
        <summary class="detailsSummary">{t().cochairsTitle}</summary>
        <ul class="detailsList">
          {t().cochairs.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </details>

      <details class="details">
        <summary class="detailsSummary">{t().orgCommitteeTitle}</summary>
        <ul class="detailsList">
          {t().orgCommitteeMembers.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </details>

      <details class="details">
        <summary class="detailsSummary">{t().programCommitteeTitle}</summary>
        <ul class="detailsList">
          {t().programCommitteeMembers.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </details>
    </main>
  );
}