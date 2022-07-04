const NewItemForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <label htmlFor="item">Item</label>
      <input
        type="text"
        value={props.item}
        onChange={props.handleChange}
        id="item"
      />
      <label htmlFor="brand">Brand</label>
      <input
        type="text"
        value={props.brand}
        onChange={props.handleChange}
        id="brand"
      />
      <br />
      <label htmlFor="units">Units</label>
      <input
        type="text"
        value={props.units}
        onChange={props.handleChange}
        id="units"
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        value={props.quantity}
        onChange={props.handleChange}
        id="quantity"
      />
      <br />
      <label htmlFor="is-purchased">Purchased</label>
      <input
        type="checkbox"
        value={props.isPurchased}
        onChange={props.handleChange}
        id="is-puchased"
      />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewItemForm;
