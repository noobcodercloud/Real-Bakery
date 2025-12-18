import Header from '../components/HomeComponents/Header.jsx'
import Hero from '../components/HomeComponents/Hero.jsx'
import Description from '../components/HomeComponents/Description.jsx'
import ExploreButton from '../components/HomeComponents/ExploreButton.jsx'
import ProductsGrid from '../components/HomeComponents/ProductsGrid.jsx'
import Footer from '../components/HomeComponents/Footer.jsx'
import SubHeaders from '../components/HomeComponents/SubHeaders.jsx'

export default function Home() {
    return (
        <div className="font-customOutfit overflow-x-hidden">
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