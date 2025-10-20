import { PRODUCTS } from "../App.jsx";
import Product from "../components/Product.jsx"

export default function Shop({ cart, setCart }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>Welcome to the Shop {user && user.email}</h1>
      <div className="shop">
      
        {PRODUCTS.map((product) => (
          <Product data={product} cart={cart} setCart={setCart} key={product.name}/>
        ))}
      </div>
    </div>
  );
}
