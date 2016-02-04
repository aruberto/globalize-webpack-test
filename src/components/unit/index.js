import React, {Component} from 'react';
import Globalize from 'globalize';

const secondFormatter = Globalize.unitFormatter('second');
const secondShortFormatter = Globalize.unitFormatter('second', {form: 'short'});
const secondNarrowFormatter = Globalize.unitFormatter('second', {form: 'narrow'});
const mileFormatter = Globalize.unitFormatter('mile');
const mileShortFormatter = Globalize.unitFormatter('mile', {form: 'short'});
const mileNarrowFormatter = Globalize.unitFormatter('mile', {form: 'narrow'});
const kilometerPerHourFormatter = Globalize.unitFormatter('kilometer-per-hour');
const kilometerPerHourShortFormatter =
  Globalize.unitFormatter('kilometer-per-hour', {form: 'short'});
const kilometerPerHourNarrowFormatter =
  Globalize.unitFormatter('kilometer-per-hour', {form: 'narrow'});
const megabyteFormatter = Globalize.unitFormatter('megabyte');
const megabyteShortFormatter = Globalize.unitFormatter('megabyte', {form: 'short'});
const megabyteNarrowFormatter = Globalize.unitFormatter('megabyte', {form: 'narrow'});

export default class UnitPage extends Component {
  render() {
    return (
      <div>
        <h3>Globalize Unit Formatting</h3>
        <div>
          <h5>Second</h5>
          <div>Basic: {secondFormatter(10)}</div>
          <div>Short: {secondShortFormatter(10)}</div>
          <div>Narrow: {secondNarrowFormatter(10)}</div>
        </div>
        <br/>
        <div>
          <h5>Mile</h5>
          <div>Basic: {mileFormatter(10)}</div>
          <div>Short: {mileShortFormatter(10)}</div>
          <div>Narrow: {mileNarrowFormatter(10)}</div>
        </div>
        <br/>
        <div>
          <h5>Kilometer Per Hour</h5>
          <div>Basic: {kilometerPerHourFormatter(10)}</div>
          <div>Short: {kilometerPerHourShortFormatter(10)}</div>
          <div>Narrow: {kilometerPerHourNarrowFormatter(10)}</div>
        </div>
        <br/>
        <div>
          <h5>Megabytes</h5>
          <div>Basic: {megabyteFormatter(10)}</div>
          <div>Short: {megabyteShortFormatter(10)}</div>
          <div>Narrow: {megabyteNarrowFormatter(10)}</div>
        </div>
      </div>
    );
  }
}
