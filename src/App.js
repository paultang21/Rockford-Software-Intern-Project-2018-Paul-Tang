import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CalendarDay from './CalendarDay';
import NameRenderer from './NameRenderer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'August',
      events: [

      ]
    }

    this.changeName = this.changeName.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  changeName() {
    var titleName = prompt("Please enter your event's name", "")
    var dateName = prompt("Please enter your event's date (ex: 25)", "")
    var timeName = prompt("Please enter your event's time (ex: 9:30am)", "")

    this.state.events.push({
      id: this.state.events.length,
      title: titleName,
      date: dateName,
      time: timeName
    });

    this.setState({
      events: this.state.events
    });
  }

  deleteEvent(id) {
    window.alert(`going to delete ${id}`);
    //for now

    this.state.events.splice(id,1);
    console.log(this.state.events);
    console.log(id);
    //resetting id's to the array order.
    for(var i = 0; i < this.state.events.length; i++){
      this.state.events[i].id = i;
    }
    //updates the events as they are displayed on the calendar
    this.setState({
      events: this.state.events
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameRenderer name={this.state.name} />
          <button onClick={this.changeName}>add event</button>
        </header>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <CalendarDay date={null} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={1} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={2} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={3} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={4} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <CalendarDay date={5} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={6} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={7} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={8} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={9} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <CalendarDay date={10} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={11} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={12} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={13} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={14} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <CalendarDay date={15} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={16} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={17} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={18} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
          <CalendarDay date={19} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <CalendarDay date={20} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={21} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={22} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={23} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={24} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <CalendarDay date={25} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={26} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={27} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={28} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={29} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <CalendarDay date={30} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={31} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={null} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        <CalendarDay date={null} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName}/>
        <CalendarDay date={null} deletionFunction={this.deleteEvent} events={this.state.events} changeName = {this.changeName} />
        </div>
      </div>

    );
  }
}

export default App;
