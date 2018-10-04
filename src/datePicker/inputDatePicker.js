import React, { Component, Fragment } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "./inputDatePicker.css";

export class InputDatePicker extends Component {
  state = {
    selectedDay: undefined
  };

  handleDayChange = day => {
    this.setState({ selectedDay: day });
  };

  render() {
    const { selectedDay } = this.state;
    const { icon, label } = this.props;

    return (
      <Fragment>
        {label && label}
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>}
        <DayPickerInput
          className="c-input-date-picker"
          component={props => (
            <div className="c-input-date-picker">
              <span className="c-input-date-picker--icon">{icon}</span>
              <input className="c-input-date-picker--input" {...props} />
            </div>
          )}
          onDayChange={this.handleDayChange}
        />
      </Fragment>
    );
  }
}
