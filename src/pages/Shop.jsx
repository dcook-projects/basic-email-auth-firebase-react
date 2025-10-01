import { PRODUCTS } from "../App.jsx";
import Product from "../components/Product.jsx"

export default function Shop({ cart, setCart }) {
  return (
    <div className="shop">
      {PRODUCTS.map((product) => (
        <Product data={product} cart={cart} setCart={setCart} key={product.name}/>
      ))}
    </div>
  );
}
