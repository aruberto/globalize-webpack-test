import React, {Component} from 'react';
import Globalize from 'globalize';

const currency = 'GBP';

const basicCurrencyFormatter = Globalize.currencyFormatter(currency);
const accountingFormatter = Globalize.currencyFormatter(currency, {style: 'accounting'});
const nameFormatter = Globalize.currencyFormatter(currency, {style: 'name'});
const codeFormatter = Globalize.currencyFormatter(currency, {style: 'code'});
const roundUpFormatter = Globalize.currencyFormatter(currency, {rounf: 'ceil'});

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
