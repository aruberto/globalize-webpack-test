import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHashHistory} from 'history';

import './styles.scss';
import DatePage from './components/date';
import NumberPage from './components/number';
import CurrencyPage from './components/currency';
import PluralPage from './components/plural';
import RelativeTimePage from './components/relative-time';
import UnitPage from './components/unit';
import MessagePage from './components/message';

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
        &nbsp;|&nbsp;
        <Link to='/plural'>Plural</Link>
        &nbsp;|&nbsp;
        <Link to='/relative-time'>Relative Time</Link>
        &nbsp;|&nbsp;
        <Link to='/unit'>Unit</Link>
        &nbsp;|&nbsp;
        <Link to='/message'>Message</Link>
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
          <Route component={PluralPage} path='plural'/>
          <Route component={RelativeTimePage} path='relative-time'/>
          <Route component={UnitPage} path='unit'/>
          <Route component={MessagePage} path='message'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
