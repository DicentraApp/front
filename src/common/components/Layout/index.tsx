import { Header } from '../Header'
import Footer from '../Footer'
import { forClientsNav, forCompanyNav, logoContentData } from '../Footer/data'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

const Layout = () => {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer
        logoContentData={logoContentData}
        navForClients={forClientsNav}
        navForCompany={forCompanyNav}
      />
    </div>
  )
}

export default Layout
