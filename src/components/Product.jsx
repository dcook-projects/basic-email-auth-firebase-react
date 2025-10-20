export default function Product({ data, cart, setCart }) {
  const { id, name, file, price } = data;
  const user = JSON.parse(localStorage.getItem('user'));

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
      {/* only display if the user is signed in */}
      {user && 
      <button className="add-cart" onClick={() => handleAddToCart(id)} >Add to Cart</button>}
    </div>
  );
}