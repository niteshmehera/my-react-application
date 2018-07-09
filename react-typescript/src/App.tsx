import * as React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import MyClass from './Components/MyClass';
import MyComponents from './Components/mycomponent';




class App extends React.Component {
  public render() {
    return (
    <Router>
        <div>
          <ul>
            <li>              
              <Link to="/components/MyClass">MyClass</Link>
            </li>
            <li>
              <Link to="/components/mycomponents">MyComp</Link>
            </li>
          </ul>

          <hr />

          <Route path="/components/MyClass" component={MyClass} />
          <Route path="/components/MyComponents" component={MyComponents} />

          
          
        </div>
    </Router>
    );
  }
}

export default App;
