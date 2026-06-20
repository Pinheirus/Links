import type { LinkCategory } from '../types/link'

export const PAGE_TITLE = 'Links das questões'

export const PAGE_DESCRIPTION =
  'Acesso rápido às aulas gravadas e listas de questões de anatomia.'

export const categories: LinkCategory[] = [
  {
    id: 'recorded-classes',
    title: 'Classes gravadas',
    items: [
      {
        id: 1,
        title: 'Aula 1,1',
        url: 'https://drive.google.com/file/d/1I4IKRanysxFWBOxhMMwQoD8_fmenFSOX/view?usp=sharing',
      },
      {
        id: 2,
        title: 'Aula 1,2',
        url: 'https://drive.google.com/file/d/1c9uK_7DOpHmLxfydmEDnNBMc-qQtvlNx/view?usp=sharing',
      },
      {
        id: 3,
        title: 'Aula 2,1',
        url: 'https://drive.google.com/drive/folders/10a_CwrukOtrHBoQxUCOqLFrdn0cnyDLr?usp=sharing',
      },
      {
        id: 4,
        title: 'Aula 2,2',
        url: 'https://drive.google.com/drive/folders/1AEE_tb-z5IxBIumkhPHOu1kYu7o8BDB-?usp=sharing',
      },
    ],
  },
  {
    id: 'questions',
    title: 'Questões',
    items: [
      {
        id: 1,
        title: 'Coração e Diafragma',
        url: 'https://share.gemini.google/Pjqik28UtwVM',
      },
      {
        id: 2,
        title: 'Pulmões e traqueia',
        url: 'https://share.gemini.google/yLbDqU9BXgdO',
      },
      {
        id: 3,
        title: 'Digestivo',
        url: 'https://share.gemini.google/vrCAamDeinqf',
      },
    ],
  },
]
