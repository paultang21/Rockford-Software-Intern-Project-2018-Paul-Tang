import React, {PureComponent} from 'react';
import CalendarEvent from './CalendarEvent';
import PropTypes from 'prop-types';

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
