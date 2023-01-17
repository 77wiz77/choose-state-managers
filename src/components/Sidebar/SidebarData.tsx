import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'О проекте',
    path: '/about',
  },
  {
    title: 'Redux',
    path: '/redux',
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'О Redux',
        path: '/redux#description',
      },
      {
        title: 'Документация',
        path: '/redux#documentation',
      },
      {
        title: 'Популярность',
        path: '/redux#popularity',
      },
      {
        title: 'Размер',
        path: '/redux#size',
      },
      {
        title: 'Масштабируемость',
        path: '/redux#scalability',
      },
      {
        title: 'Эксперимент',
        path: '/redux#experiment',
      },
    ],
  },
  {
    title: 'MobX',
    path: '/mobx',
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'О MobX',
        path: '/mobx#description',
      },
      {
        title: 'Документация',
        path: '/mobx#documentation',
      },
      {
        title: 'Популярность',
        path: '/mobx#popularity',
      },
      {
        title: 'Размер',
        path: '/mobx#size',
      },
      {
        title: 'Масштабируемость',
        path: '/mobx#scalability',
      },
      {
        title: 'Эксперимент',
        path: '/mobx#experiment',
      },
    ],
  },
  {
    title: 'Recoil',
    path: '/recoil',
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'О Recoil',
        path: '/recoil#description',
      },
      {
        title: 'Документация',
        path: '/recoil#documentation',
      },
      {
        title: 'Популярность',
        path: '/recoil#popularity',
      },
      {
        title: 'Размер',
        path: '/recoil#size',
      },
      {
        title: 'Масштабируемость',
        path: '/recoil#scalability',
      },
      {
        title: 'Эксперимент',
        path: '/recoil#experiment',
      },
    ],
  },
];
