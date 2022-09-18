import { atom, atomFamily, selector } from 'recoil';

const ValueState = atom({
  key: 'ValueState',
  default: 100,
});

export default ValueState;
