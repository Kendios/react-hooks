import { Outlet } from 'react-router-dom'
import './layout.scss'
function Layout() {
  return (
    <section id='container'>
      <aside>aside</aside>
      <section>
        <header>
          headr
        </header>
        <main><Outlet /></main>
      </section>
    </section>

  )
}
export default Layout