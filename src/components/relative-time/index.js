import React, {Component} from 'react';
import Globalize from 'globalize';

const secondsRelativeTimeFormatter = Globalize.relativeTimeFormatter('second');
const minutesRelativeTimeFormatter = Globalize.relativeTimeFormatter('minute');
const hoursRelativeTimeFormatter = Globalize.relativeTimeFormatter('hour');
const daysRelativeTimeFormatter = Globalize.relativeTimeFormatter('day');
const monthsRelativeTimeFormatter = Globalize.relativeTimeFormatter('month');
const yearsRelativeTimeFormatter = Globalize.relativeTimeFormatter('year');

export default class RelativeTimePage extends Component {
  render() {
    return (
      <div>
        <h3>Globalize Relative Time Formatting</h3>
        <div>
          <h5>Seconds</h5>
          <div>-2: {secondsRelativeTimeFormatter(-2)}</div>
          <div>-1: {secondsRelativeTimeFormatter(-1)}</div>
          <div>0: {secondsRelativeTimeFormatter(0)}</div>
          <div>1: {secondsRelativeTimeFormatter(1)}</div>
          <div>2: {secondsRelativeTimeFormatter(2)}</div>
        </div>
        <br/>
        <div>
          <h5>Minutes</h5>
          <div>-2: {minutesRelativeTimeFormatter(-2)}</div>
          <div>-1: {minutesRelativeTimeFormatter(-1)}</div>
          <div>0: {minutesRelativeTimeFormatter(0)}</div>
          <div>1: {minutesRelativeTimeFormatter(1)}</div>
          <div>2: {minutesRelativeTimeFormatter(2)}</div>
        </div>
        <br/>
        <div>
          <h5>Hours</h5>
          <div>-2: {hoursRelativeTimeFormatter(-2)}</div>
          <div>-1: {hoursRelativeTimeFormatter(-1)}</div>
          <div>0: {hoursRelativeTimeFormatter(0)}</div>
          <div>1: {hoursRelativeTimeFormatter(1)}</div>
          <div>2: {hoursRelativeTimeFormatter(2)}</div>
        </div>
        <br/>
        <div>
          <h5>Days</h5>
          <div>-2: {daysRelativeTimeFormatter(-2)}</div>
          <div>-1: {daysRelativeTimeFormatter(-1)}</div>
          <div>0: {daysRelativeTimeFormatter(0)}</div>
          <div>1: {daysRelativeTimeFormatter(1)}</div>
          <div>2: {daysRelativeTimeFormatter(2)}</div>
        </div>
        <br/>
        <div>
          <h5>Months</h5>
          <div>-2: {monthsRelativeTimeFormatter(-2)}</div>
          <div>-1: {monthsRelativeTimeFormatter(-1)}</div>
          <div>0: {monthsRelativeTimeFormatter(0)}</div>
          <div>1: {monthsRelativeTimeFormatter(1)}</div>
          <div>2: {monthsRelativeTimeFormatter(2)}</div>
        </div>
        <br/>
        <div>
          <h5>Years</h5>
          <div>-2: {yearsRelativeTimeFormatter(-2)}</div>
          <div>-1: {yearsRelativeTimeFormatter(-1)}</div>
          <div>0: {yearsRelativeTimeFormatter(0)}</div>
          <div>1: {yearsRelativeTimeFormatter(1)}</div>
          <div>2: {yearsRelativeTimeFormatter(2)}</div>
        </div>
      </div>
    );
  }
}
