import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHashHistory} from 'history';

import './styles.scss';
import DatePage from './components/date';
import NumberPage from './components/number';
import CurrencyPage from './components/currency';

const history = createHashHistory();

class Navbar extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Link to='/date'>Date</Link>
        &nbsp;|&nbsp;
        <Link to='/number'>Number</Link>
        &nbsp;|&nbsp;
        <Link to='/currency'>Currency</Link>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={Navbar} path='/'>
          <Route component={DatePage} path='date'/>
          <Route component={NumberPage} path='number'/>
          <Route component={CurrencyPage} path='currency'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
