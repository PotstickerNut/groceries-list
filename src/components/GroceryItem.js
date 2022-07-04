const GroceryItem = (props) => {
  const { item, brand, units, quantity, isPurchased } = props.item;

  return (
    <div onClick={() => props.addToCart(props.item)}>
      <h3 className="item">Item: {item}</h3>
      <div className="info-bar">
        <p className="brand">Brand: {brand} |</p>
        <p className="units">Units: {units} |</p>
        <p className="quantity">Quantity: {quantity} |</p>
        <p className="purchased">Purchased: {isPurchased + ""}</p>
      </div>
    </div>
  );
};

export default GroceryItem;
