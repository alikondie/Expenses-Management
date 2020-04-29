import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import { Wrapper, Input, Select } from './_ExpenseListFilters';
import { Container } from '../../styles/components/Container';
class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused,
    }));
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <Input
            type='text'
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
          <Select
            value={this.props.filters.sortBy}
            onChange={(e) => {
              console.log(this.props.filters.sortBy);
              if (e.target.value === 'date') this.props.dispatch(sortByDate());
              else if (e.target.value === 'amount')
                this.props.dispatch(sortByAmount());
            }}
          >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </Select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
