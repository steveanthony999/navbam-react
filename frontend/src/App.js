import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Builder from './components/Builder';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/builder' component={Builder} exact />
    </Router>
  );
}

export default App;
