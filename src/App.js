import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div>
      <Layout>
       <Switch>
       <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
       </Switch>
      </Layout>
    </div>
  );
}

export default App;
