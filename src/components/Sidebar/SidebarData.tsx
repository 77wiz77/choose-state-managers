import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Главная',
    path: '/#home',
  },
  {
    title: 'О проекте',
    path: '/about',
  },
  {
    title: 'Redux',
    path: '/redux#redux',
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'О Redux',
        path: '/redux#redux-description',
      },
      {
        title: 'Документация',
        path: '/redux#redux-documentation',
      },
      {
        title: 'Популярность',
        path: '/redux#redux-popularity',
      },
      {
        title: 'Размер',
        path: '/redux#redux-size',
      },
      {
        title: 'Масштабируемость',
        path: '/redux#redux-scalability',
      },
      {
        title: 'Эксперимент',
        path: '/redux#redux-experiment',
      },
    ],
  },
  {
    title: 'MobX',
    path: '/mobx#mobx',
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'О MobX',
        path: '/mobx#mobx-description',
      },
      {
        title: 'Документация',
        path: '/mobx#mobx-documentation',
      },
      {
        title: 'Популярность',
        path: '/mobx#mobx-popularity',
      },
      {
        title: 'Размер',
        path: '/mobx#mobx-size',
      },
      {
        title: 'Масштабируемость',
        path: '/mobx#mobx-scalability',
      },
      {
        title: 'Эксперимент',
        path: '/mobx#mobx-experiment',
      },
    ],
  },
  {
    title: 'Recoil',
    path: '/recoil#recoil',
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'О Recoil',
        path: '/recoil#recoil-description',
      },
      {
        title: 'Документация',
        path: '/recoil#recoil-documentation',
      },
      {
        title: 'Популярность',
        path: '/recoil#recoil-popularity',
      },
      {
        title: 'Размер',
        path: '/recoil#recoil-size',
      },
      {
        title: 'Масштабируемость',
        path: '/recoil#recoil-scalability',
      },
      {
        title: 'Эксперимент',
        path: '/recoil#recoil-experiment',
      },
    ],
  },
];
