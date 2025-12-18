import ProductCard from "./ProductCard.jsx";
import milkShake from '../../images/milkShake.png';
import Espresso from '../../images/Espresso.png';
import matcha from '../../images/matcha.png';
import cake from '../../images/cake.jpg';

const ProductsGrid = () => {
  const products = [
    { image_url: milkShake, title: "Milk Shake", price: "79" },
    { image_url: Espresso, title: "Espresso", price: "129" },
    { image_url: cake, title: "Cake", price: "499" },
    { image_url: matcha, title: "Matcha", price: "399" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          image_url={product.image_url} 
          title={product.title} 
          price={product.price}
          slideFrom={index % 4 < 2 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;