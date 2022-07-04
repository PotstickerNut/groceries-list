import GroceryItem from "./GroceryItem";

const ItemList = (props) => {
  return (
    <div>
      {props.items.map(
        (item, idx) =>
          !item.isPurchased && (
            <GroceryItem item={item} key={idx} addToList={props.addToList} />
          )
      )}
    </div>
  );
};

export default ItemList;
