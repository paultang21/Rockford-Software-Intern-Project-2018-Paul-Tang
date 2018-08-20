import React, {PureComponent} from 'react';
import CalendarEvent from './CalendarEvent';
import PropTypes from 'prop-types';



//begin

/*export default class CalendarDay extends PureComponent() {
  static PropTypes = {
    events: PropTypes.array.isRequired,
    deletionFunction:PropTypes.function.isRequired,
    date:PropTypes.number.isRequired,
  };
  handleClick = (e) => {
    e.preventDefault();
  }
  render(){
    return (
      <div style={{ border: '1px solid red', width: 400 }}>
        <h2 onClick = {this.handleClick}>{this.PropTypes.date}</h2>
        <ul>
          {this.PropTypes.events.map((event) => {
            if(event.date == this.PropTypes.date){
              return <CalendarEvent deletionFunction={this.PropTypes.deletionFunction} key={event.id} event={event} />
            }
            return null;
          }

        )}
        </ul>
      </div>
    );
  }
}*/




//everything below is good
const CalendarDay = ({date, deletionFunction, events, changeName}) => (
  <div style={{ border: '1px solid red', width: 400 }}>
    <h2 onClick = {this.handleClick}>{date}</h2>
  

    <ul>
      {events.map((event) => {
        if(event.date == date){
          return <CalendarEvent deletionFunction={deletionFunction} key={event.id} event={event} />
        }
        return null;
      }

    )}
    </ul>
  </div>
)

export default CalendarDay;
