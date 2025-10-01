export default function Product({ data, cart, setCart }) {
  const { id, name, file, price } = data;

  function handleAddToCart(id) {
    setCart({
      ...cart,
      [id]: cart[id] + 1,
    })
  }

  return (
    <div className="product">
      <img src={file} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button className="add-cart" onClick={() => handleAddToCart(id)} >Add to Cart</button>
    </div>
  );
}