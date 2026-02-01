import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Layout() {
  return (
    <>
    <Header></Header>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Main'>Main</Link>
      <Link to='/Bye'>Bye</Link>
    </nav>
    <main>
      <Outlet></Outlet>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Layout;