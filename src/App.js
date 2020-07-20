import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/header';


function App() {
  return (
    <div className="root">
      <Header/>
      <Switch>
          <Route path="/cart" component={CartPage} />
						<Route path="/thankYou" component={CartThankYou} />
						<Route path="/" component={Products} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
