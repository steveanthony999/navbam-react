import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Builder from './components/Builder';
import Code from './components/Code';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/builder' component={Builder} exact />
      <Route path='/code' component={Code} exact />
    </Router>
  );
}

export default App;
