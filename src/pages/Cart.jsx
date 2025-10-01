import { PRODUCTS } from "../App";

export default function Cart({ cart, setCart }) {
  return (
    <>
      <h1>Your Cart</h1>
      <div className="customer-cart">
        {PRODUCTS.filter(product => cart[product.id] > 0).map(product => (
          <CartItem key={product.name} data={product} qty={cart[product.id]} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
}

function CartItem( { data, qty, cart, setCart }) {
  const { id, name, file, price } = data;

  function handleRemoveFromCart(id) {
    setCart({
      ...cart,
      [id]: cart[id] - 1,
    })
  }

  return (
    <div className="product">
      <img src={file} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>Qty: {qty}</p>
      <button onClick={() => handleRemoveFromCart(id)} >Remove from Cart</button>
    </div>
  );
}