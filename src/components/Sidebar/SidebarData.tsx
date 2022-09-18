import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineUser,
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Главная',
    path: '/',
    icon: <AiOutlineHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <AiOutlineUser />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <AiOutlineMoneyCollect />,
      },
    ],
  },
  {
    title: 'О проекте',
    path: '/about',
    icon: <FaOpencart />,
  },
  {
    title: 'Redux',
    path: '/redux',
    icon: <AiOutlineHistory />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'Description',
        path: '/redux#description',
        icon: <AiOutlineUser />,
      },
      {
        title: 'Redux Test',
        path: '/redux#reduxtest',
        icon: <AiOutlineMoneyCollect />,
      },
    ],
  },
  {
    title: 'MobX',
    path: '/mobx',
    icon: <FaCog />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'Description',
        path: '/mobx#description',
        icon: <AiOutlineUser />,
      },
      {
        title: 'MobX Test',
        path: '/mobx#mobxtest',
        icon: <AiOutlineMoneyCollect />,
      },
    ],
  },
  {
    title: 'Recoil',
    path: '/recoil',
    icon: <FaCog />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'Description',
        path: '/recoil#description',
        icon: <AiOutlineUser />,
      },
      {
        title: 'Recoil Test',
        path: '/recoil#recoiltest',
        icon: <AiOutlineMoneyCollect />,
      },
    ],
  },
];
