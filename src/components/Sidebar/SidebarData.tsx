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
        title: 'Description',
        path: '/redux#description',
      },
      {
        title: 'Redux Test',
        path: '/redux#reduxtest',
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
        title: 'Description',
        path: '/mobx#description',
      },
      {
        title: 'MobX Test',
        path: '/mobx#mobxtest',
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
        title: 'Description',
        path: '/recoil#description',
      },
      {
        title: 'Recoil Test',
        path: '/recoil#recoiltest',
      },
    ],
  },
];
