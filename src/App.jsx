import './App.css'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Description from './components/Description.jsx'
import ExploreButton from './components/ExploreButton.jsx'
import ProductsGrid from './components/ProductsGrid.jsx'
import Footer from './components/Footer.jsx'
import SubHeaders from './components/SubHeaders.jsx'

export default function App() {
  return (
    <div className="font-customOutfit overflow-x-hidden">
      <Navbar />
      <div>
        <div>
          <Header />
          <Hero />
          <Description />
        </div>
        <div>
          <ExploreButton />
        </div>
      </div>
      <SubHeaders />
      <ProductsGrid />
      <Footer />
    </div>
  );
}