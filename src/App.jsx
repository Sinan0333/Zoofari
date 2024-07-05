import Header from './components/Header'
import Banner from './components/Banner'
import './index.css'
import AboutSection from './components/AboutSection'
import AnimalSection from './components/AnimalSection'
import PackagesSection from './components/PackagesSection'
import Section2 from './components/Section2'
import EventSection from './components/EventSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SvgPath from './components/SvgPath'

function App() {

  return (
   <div >
    <Header/>
    <Banner/>
    <SvgPath>
      <AboutSection/>
      <AnimalSection/>
      <PackagesSection/>
      <Section2/>
      <EventSection/>
      <FaqSection/>
      <ContactSection/>
      <Footer/>
    </SvgPath>
   </div>
  )
}

export default App
