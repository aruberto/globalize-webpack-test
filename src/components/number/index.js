import React, {Component} from 'react';
import Globalize from 'globalize';

const basicNumberFormatter = Globalize.numberFormatter();
const maxFiveDecimalFormatter = Globalize.numberFormatter({maximumFractionDigits: 5});
const roundDownFormatter = Globalize.numberFormatter({round: 'floor'});
const minTwoDecimalFormatter = Globalize.numberFormatter({minimumFractionDigits: 2});
const percentFormatter = Globalize.numberFormatter({style: 'percent'});

export default class NumberPage extends Component {
  render() {
    return (
      <div>
        <h3>Globalize Number Formatting</h3>
        <div>Basic: {basicNumberFormatter(Math.PI)}</div>
        <div>Max Five Decimal Places: {maxFiveDecimalFormatter(Math.PI)}</div>
        <div>Round Down: {roundDownFormatter(Math.PI)}</div>
        <div>Min Two Decimal Places: {minTwoDecimalFormatter(10000)}</div>
        <div>Percent: {percentFormatter(0.5)}</div>
      </div>
    );
  }
}
