import React, { Component } from 'react';
import TimeStamps from './stores/TimeStamps'
import {createTimeStamp} from './actions/TimeStampAction'

class TimeStampList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      times: TimeStamps.getAllTimeStamps()
    }
  }

  handleAddTimeStamp(){
    createTimeStamp()
  }

  setAllTimeStamps(){
    console.log(this)
    this.setState({
      times: TimeStamps.getAllTimeStamps()
    })
  }

  componentWillMount(){
    TimeStamps.on('change', this.setAllTimeStamps.bind(this))
  }

  render() {
    let list = this.state.times.map(function(item){
      return (
        <li>
          {item}
        </li>
        );
      })
      return (
        <div>
          <ul>
            {list}
          </ul>
          <button onClick={this.handleAddTimeStamp.bind(this)}>Create new time stamp</button>
        </div>
      )
    }
  }

export default TimeStampList;
