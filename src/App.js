import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App(): React.Node {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
