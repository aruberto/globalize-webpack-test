import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Globalize from 'globalize';

const dateFormatter = Globalize.dateFormatter({datetime: 'medium'});

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
        <br/>
        {dateFormatter(new Date())}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
