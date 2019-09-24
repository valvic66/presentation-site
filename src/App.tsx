import React from "react";
import "./App.css";
import { store } from "./store/store";
import { addItem, removeItemById } from "./actions/fetchItems";

const item = {
  id: 1,
  name: "Presentation Site",
  details: "Presentation site",
  imageUrl: "https://google.com",
  presentationLink: "https://google.com",
  codeLink: "https://google.com"
};

console.info('initial store', store.getState());

store.dispatch(addItem(item));

console.info('added in store', store.getState());

store.dispatch(removeItemById(1));

console.info('removed from store', store.getState());


const App: React.FC = () => {
  return (
    <div className="App">
      <img src="icon-menu-alt.svg" />
      <header className="App-header">
        <h1>Hello Vali to your presentation site rebuilt!</h1>
      </header>
    </div>
  );
};

export default App;
