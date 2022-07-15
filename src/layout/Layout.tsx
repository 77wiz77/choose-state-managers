import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

import React from 'react'

const Layout: React.FC = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;


//import CustomLink from './CustomLink';

// const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

// function Layout() {
//   return (
//     <div className='body'>
//       <header>
//         <NavLink to='/' className={setActive}>
//           Home
//         </NavLink>
//         <NavLink to='/posts' className={setActive}>
//           Blog
//         </NavLink>
//         <NavLink to='/about' className={setActive}>
//           About
//         </NavLink>
//         {/* Ниже пример использования CustomLink */}
//         {/* <CustomLink to='/'>test</CustomLink> */}
//       </header>
//       <main>
//         <Outlet />
//       </main>
//       <footer>2022</footer>
//     </div>
//   );
// }

// export default Layout;
