import React, { Component } from 'react';

export default class CreateExercises extends Component {
  constructor (props) {
    // need to always call super when defining constructor of subclass
    super(props);
    // we need to make sure this refers to the parent class

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // create variables for React with state
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [] // so you can select user from db
    }
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e){
    this.setState({
      duration: e.target.value
    });
  }
  onChangeDate(e){
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    window.location = '/';
  }
  render() {
    return (
      <div>
      <p>Exercises create component!</p>
      </div>
    )
  }
}