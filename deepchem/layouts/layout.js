import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}