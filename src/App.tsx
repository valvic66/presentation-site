import React from "react";
import "./App.css";
import { store } from "./store/store";
import { addItem, removeItemById } from "./actions/fetchItems";
import { Route, Link } from 'react-router-dom';
import { Box } from './components/Box';
import { Home } from './components/Home';
 
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
      <img src="icon-menu-alt.svg" alt="svg" />

      <Route path='/' exact component={Home} />
      <Route path='/box' render={(props) => <Box className="new-class" />} />
    </div>
  );
};

export default App;
