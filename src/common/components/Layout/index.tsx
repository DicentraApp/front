import { Header } from '../Header'
import Footer from '../Footer'
import { forClientsNav, forCompanyNav, logoContentData } from '../Footer/data'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer
        logoContentData={logoContentData}
        navForClients={forClientsNav}
        navForCompany={forCompanyNav}
      />
    </>
  )
}

export default Layout
