import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FAQ from './pages/frequentlyAskedQuestions';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Categories from './pages/Categories';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/faq" component={ FAQ } />
        <Route path="/locais" component={ Locations } />
        <Route path="/categorias" component={ Categories } />
      </Switch>
    </BrowserRouter>
  );
}