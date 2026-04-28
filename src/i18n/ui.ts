export const languages = {
  bg: 'Български',
  en: 'English',
};

export const defaultLang = 'bg';

export const ui = {
  bg: {
    'nav.home': 'Начало',
    'nav.structure': 'Организационна структура',
    'nav.topics': 'Основни теми',
    'nav.authors': 'За авторите',
    'nav.location': 'Местоположение',
    'nav.submit': 'Изпрати статия',
    'footer.creator': 'Сайтът е създаден от Тимофий Пригуза, студент в ЮЗУ "Неофит Рилски", специалност ИКТ, 4 курс бакалавър (към момента).',
    'faculty.name': 'Технически Факултет'
  },
  en: {
    'nav.home': 'Home',
    'nav.structure': 'Organization Structure',
    'nav.topics': 'Main Topics',
    'nav.authors': 'For Authors',
    'nav.location': 'Location',
    'nav.submit': 'Submit Article',
    'footer.creator': 'This website was created by Timofiy Prihuza, a 4th-year bachelor student (at the time) in ICT at South-West University "Neofit Rilski".',
    'faculty.name': 'Technical Faculty'
  },
} as const;
