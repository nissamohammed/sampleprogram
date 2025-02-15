import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });