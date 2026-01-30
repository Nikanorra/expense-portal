import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Main'>Main</Link>
      <Link to='/Bye'>Bye</Link>
    </nav>
    <main>
      <Outlet></Outlet>
    </main>
    </>
  )
}

export default Layout;