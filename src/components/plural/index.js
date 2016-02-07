import React, { Component } from 'react';
import Globalize from 'globalize';

const basicPluralFormatter = Globalize.pluralGenerator();
const ordinalPluralFormatter = Globalize.pluralGenerator({ type: 'ordinal' });

export default class PluralPage extends Component {
  render() {
    return (
      <div>
        <h3>Globalize Plural Formatting</h3>
        <div>
          <h5>Basic</h5>
          <div>0: {basicPluralFormatter(0)}</div>
          <div>1: {basicPluralFormatter(1)}</div>
          <div>2: {basicPluralFormatter(2)}</div>
          <div>3: {basicPluralFormatter(3)}</div>
        </div>
        <br/>
        <div>
          <h5>Ordinal</h5>
          <div>0: {ordinalPluralFormatter(0)}</div>
          <div>1: {ordinalPluralFormatter(1)}</div>
          <div>2: {ordinalPluralFormatter(2)}</div>
          <div>3: {ordinalPluralFormatter(3)}</div>
        </div>
      </div>
    );
  }
}
