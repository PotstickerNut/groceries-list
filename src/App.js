import "./App.css";
import { data } from "./data/data";
import { Component } from "react";

import NewItemForm from "./components/NewItemForm";
import ItemsList from "./components/ItemsList";

class App extends Component {
  state = {
    data,
    item: "",
    brand: "",
    units: "",
    quantity: 0,
    isPurchased: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: false,
    };

    this.setState({
      data: [newItem, ...this.state.data],
      item: "",
      brand: "",
      units: "",
      quantity: 0,
      isPurchased: false,
    });
  };

  addToList = (item) => {
    this.setState({
      listItems: [item, ...this.state.listItems],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Grocery App</h1>
        <NewItemForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          item={this.state.item}
          brand={this.state.brand}
          units={this.state.units}
          quantity={this.state.quantity}
          isPurchased={this.state.isPurchased}
        />
        <ItemsList items={this.state.data} addToList={this.addToList} />
      </div>
    );
  }
}

export default App;
