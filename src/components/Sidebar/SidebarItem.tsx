export interface SidebarItem {
  title: string;
  path: string;
  iconOpened?: any;
  iconClosed?: any;
  subnav?: SidebarItem[];
}
