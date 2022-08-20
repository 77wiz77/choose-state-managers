import { makeAutoObservable } from 'mobx';

class LeftSideMenu {
  openMobile = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleDrawerToggle = () => {
    this.openMobile = !this.openMobile;
  };
}

export default new LeftSideMenu();
