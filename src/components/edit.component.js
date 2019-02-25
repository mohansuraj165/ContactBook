// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      phone: '',
      address:'',
      email:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                person_name: response.data.person_name,
                phone: response.data.phone,
                address: response.data.address,
               email: response.data.email});
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Person Name:  </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.person_name}
                  onChange={this.onChangePersonName}
                  />
            </div>
            <div className="form-group">
                <label>Phone: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                  />
            </div>
            <div className="form-group">
                <label>Address: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  />
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  />
            </div>
                <div className="form-group">
                    <input type="submit"
                      value="Update Contact"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
