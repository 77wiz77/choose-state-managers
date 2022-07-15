import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import NoFoundPage from './pages/NotFoundPage';

import ReduxPage from './pages/ReduxPage';
import MobXPage from './pages/MobXPage';
import RecoilPage from './pages/RecoilPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/redux' element={<ReduxPage/>}></Route>
        <Route path='/mobx' element={<MobXPage/>}></Route>
        <Route path='/recoil' element={<RecoilPage/>}></Route>
        <Route path='*' element={<NoFoundPage/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
