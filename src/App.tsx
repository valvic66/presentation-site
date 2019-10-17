import React from "react";
import "./App.css";
import { store } from "./store/store";
import { addItem, removeItemById, changeSiteName } from "./actions/actions";
import { Route, Link } from 'react-router-dom';
import { Box } from './components/Box';
import { Home } from './components/Home';

import { Button } from './components/buttons';
 
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

store.dispatch(changeSiteName('New Site Name'));

console.log('change site name', store.getState());

const App: React.FC = () => {
  const onHandleClick = () => console.log('Button clicked!');

  return (
    <div className="App">
      <Button size='sm' onClick={onHandleClick} isFullWidth isDisabled> Small button</Button>
      <Button size='sm' onClick={onHandleClick}> Small button</Button><br />
      <Button size='md' isDisabled> Medium button</Button><br />
      <Button size='lg'> Large button</Button><br />
      <Button > Default button</Button><br />
      <Button hasShadow> Default button</Button><br />

      <Button colorTheme='red'> Default button</Button>
      <Button colorTheme='blue'> Default button</Button>
      <Button colorTheme='green'> Default button</Button>
      <Button colorTheme='black'> Default button</Button>


      <img src="icon-menu-alt.svg" alt="svg" />

      <Route path='/' exact component={Home} />
      <Route path='/box' render={(props) => <Box className="new-class" />} />
    </div>
  );
};

export default App;
