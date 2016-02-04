import React, {Component} from 'react';
import Globalize from 'globalize';

const provinceFormatter = Globalize.messageFormatter('province');
const regionFormatter = Globalize.messageFormatter('region');
const postalCodeFormatter = Globalize.messageFormatter('postalCode');
const taskFormatter = Globalize.messageFormatter('task');

export default class MessagePage extends Component {
  render() {
    return (
      <div>
        <h3>Globalize Message Formatting</h3>
        <div>
          <h5>Translations</h5>
          <div>Province: {provinceFormatter()}</div>
          <div>Region: {regionFormatter()}</div>
          <div>Postal Code: {postalCodeFormatter()}</div>
        </div>
        <br/>
        <div>
          <h5>Plural Messages</h5>
          <div>0: {taskFormatter({count: 0})}</div>
          <div>1: {taskFormatter({count: 1})}</div>
          <div>2: {taskFormatter({count: 2})}</div>
        </div>
      </div>
    );
  }
}
