import React, { Component } from 'react';
import Globalize from 'globalize';

const basicCurrencyFormatter = Globalize.currencyFormatter('GBP');
const accountingFormatter = Globalize.currencyFormatter('GBP', { style: 'accounting' });
const nameFormatter = Globalize.currencyFormatter('GBP', { style: 'name' });
const codeFormatter = Globalize.currencyFormatter('GBP', { style: 'code' });
const roundUpFormatter = Globalize.currencyFormatter('GBP', { round: 'ceil' });

export default class CurrencyPage extends Component {
  render() {
    return (
      <div>
        <h3>Globalize Currency Formatting</h3>
        <div>Basic: {basicCurrencyFormatter(1)}</div>
        <div>Accounting: {accountingFormatter(-1)}</div>
        <div>Name: {nameFormatter(69900)}</div>
        <div>Code: {codeFormatter(69900)}</div>
        <div>Round Up: {roundUpFormatter(1.491)}</div>
      </div>
    );
  }
}
