const GroceryItem = (props) => {
  const { item, brand, units, quantity, isPurchased } = props.item;

  return (
    <div onClick={() => props.addToCart(props.item)}>
      <h3>Item: {item}</h3>
      <p>Brand: {brand}</p>
      <p>Units: {units}</p>
      <p>Quantity: {quantity}</p>
      <p>Purchased: {isPurchased + ""}</p>
    </div>
  );
};

export default GroceryItem;
