import React, { Component } from 'react';

export default class CreateUsers extends Component {
  constructor (props) {
    // need to always call super when defining constructor of subclass
    super(props);
    // we need to make sure this refers to the parent class

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // create variables for React with state
    this.state = {
      username: '',
    }
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    }

    console.log(user);

// instead of relocate keep here so can add multiple user
    this.setState({
      username: ''
    })
  }


  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
