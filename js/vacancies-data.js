/* site_structure/js/vacancies-data.js */

const VACANCY_CITIES = {
  vologda: 'Вологда',
  kaluga: 'Калуга (Обнинск)',
  perm: 'Пермь'
};

const VACANCIES = [
  {
    title: 'Мастер смены',
    city: 'vologda',
    salary: 'от 100 000 ₽ на руки',
    recruiter_name: 'Александра Караваева',
    recruiter_telegram: '@alexandra_recruiter',
    recruiter_max: 'https://max.ru/u/f9LHodD0cOL5E2OobzhmlfO2-U-SNOrCe4WWCfVmQQvs2NCEiKBRAF4-y_0',
    recruiter_phone: '+7 (900) 123-45-67',
    location: 'Вологда, ул. Маяковского, 38',
    conditions: ['Официальное трудоустройство', 'График 5/2', 'ДМС со старта'],
    duties: ['Управление сменой', 'Контроль качества', 'Ведение документации'],
    requirements: ['Опыт работы от 2 лет', 'Среднее специальное образование', 'Ответственность']
  },
  {
    title: 'Оператор линии',
    city: 'kaluga',
    salary: 'от 80 000 ₽ на руки',
    recruiter_name: 'Юлия Лисевич',
    recruiter_telegram: '@julia_recruiter',
    recruiter_max: 'https://max.ru/u/f9LHodD0cOJyL7Wsfk9CyKGj2UmhpuSE1I47vciQi1QLkwLJJnBXXQezwKY',
    recruiter_phone: '+7 (900) 765-43-21',
    location: 'Калуга, ул. Ленина, 15',
    conditions: ['Полный соцпакет', 'Премии', 'Обучение за счет компании'],
    duties: ['Работа на линии', 'Контроль параметров', 'Участие в ППР'],
    requirements: ['Опыт приветствуется', 'Готовность обучаться', 'Внимательность']
  }
];

const VACANCY_WHY_US = [
  { icon: '🌍', title: 'Международная компания', text: 'Greif — глобальный производственный лидер с 1877 года' },
  { icon: '📈', title: 'Карьерный рост', text: 'Возможности профессионального развития и обучения' },
  { icon: '💼', title: 'Официальное трудоустройство', text: 'Полный социальный пакет и стабильность' },
  { icon: '🏭', title: 'Современное производство', text: 'Передовые технологии и оборудование' }
];

const VACANCY_STUDENTS_CONTACTS = [
  {
    name: 'Александра Караваева',
    telegram: '@AleksandraGREIF',
    phone: '+79115101433',
    phone_display: '+7 911 510 14 33',
    max: 'https://max.ru/u/f9LHodD0cOL5E2OobzhmlfO2-U-SNOrCe4WWCfVmQQvs2NCEiKBRAF4-y_0'
  },
  {
    name: 'Юлия Лисевич',
    telegram: '@Julia_Greif',
    phone: '+79115023665',
    phone_display: '+7 911 502 36 65',
    max: 'https://max.ru/u/f9LHodD0cOL5E2OobzhmlfO2-U-SNOrCe4WWCfVmQQvs2NCEiKBRAF4-y_0'
  }
];
