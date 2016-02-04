import React, {Component} from 'react';
import Globalize from 'globalize';

const basicDateFormatter = Globalize.dateFormatter();
const skeletonDateFormatter = Globalize.dateFormatter({skeleton: 'GyMMMd'});
const mediumDateFormatter = Globalize.dateFormatter({date: 'medium'});
const mediumTimeFormatter = Globalize.dateFormatter({time: 'medium'});
const mediumDateTimeFormatter = Globalize.dateFormatter({datetime: 'medium'});

export default class DatePage extends Component {
  handleClick = () => this.setState({});

  render() {
    const date = new Date();

    return (
      <div>
        <h3>Globalize Date/Time Formatting</h3>
        <div>Basic: {basicDateFormatter(date)}</div>
        <div>Skeleton (GyMMMd): {skeletonDateFormatter(date)}</div>
        <div>Medium Date: {mediumDateFormatter(date)}</div>
        <div>Medium Time: {mediumTimeFormatter(date)}</div>
        <div>Medium Date/Time: {mediumDateTimeFormatter(date)}</div>
        <br/>
        <button onClick={this.handleClick} type='button'>Refresh</button>
      </div>
    );
  }
}
