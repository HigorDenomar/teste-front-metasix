import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FAQ from './pages/frequentlyAskedQuestions';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/faq" component={ FAQ } />
      </Switch>
    </BrowserRouter>
  );
}