import React, { Component } from 'react';
import { createResource } from './fetch-utils';
import './App.css';

export default class CreatePage extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    city_id: 1,
    county: '',
    zip: 12345,
    usstate: '',
    state_id: 1,
    number: '',
    altnumber: '',
    email: '',
    website: '',
    category: '',
    category_id: 1,
    subcategory: '',
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleZipChange = (e) => {
    this.setState({ zip: e.target.value });
  };

  handleCountyChange = (e) => {
    this.setState({ county: e.target.value });
  };

  handleUSStateChange = (e) => {
    this.setState({ usstate: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleAltNumberChange = (e) => {
    this.setState({ altnumber: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleWebsiteChange = (e) => {
    this.setState({ website: e.target.value });
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleSubcategoryChange = (e) => {
    this.setState({ subcategory: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    await createResource({
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      city_id: this.state.city_id,
      usstate: this.state.usstate,
      zip: this.state.zip,
      county: this.state.county,
      state_id: this.state.state_id,
      number: this.state.number,
      altnumber: this.state.altnumber,
      email: this.state.email,
      website: this.state.website,
      category: this.state.category,
      category_id: this.state.category_id,
      subcategory: this.state.subcategory,
    });

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="detail">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of Business:
            <input onChange={this.handleNameChange} />
          </label>
          <label>
            Street Address:
            <input type="address" onChange={this.handleAddressChange} />
          </label>
          <label>
            City:
            <input type="text" onChange={this.handleCityChange} />
          </label>
          <label>
            Zipcode:
            <input type="number" maxLength="5" onChange={this.handleZipChange} />
          </label>
          <label>
            County:
            <input type="text" onChange={this.handleCountyChange} />
          </label>
          <label>
            State:
            <input type="text" onChange={this.handleUSStateChange} />
          </label>
          <label>
            Phone number:
            <input type="tel" onChange={this.handleNumberChange} />
          </label>
          <label>
            Alt phone number:
            <input type="tel" onChange={this.handleAltNumberChange} />
          </label>
          <label>
            Email:
            <input type="email" onChange={this.handleEmailChange} />
          </label>
          <label>
            Website:
            <input type="url" onChange={this.handleWebsiteChange} />
          </label>
          <label>
            Category of Emergency:
            <select
              value={this.state.value}
              onChange={this.handleCategoryChange}
            >
              <option value="environmental">Environmental</option>
              <option value="mentalhealth">Mental Health</option>
              <option value="substanceuse">Substance Use</option>
              <option value="domestic">Domestic</option>
              <option value="animals">Animals</option>
              <option value="everyday">Everyday</option>
              <option value="national">National</option>
            </select>
          </label>
          <label>
            Subcategory:
            <input type="text" onChange={this.handleSubcategoryChange} />
          </label>
          <input type="submit" value="Submit" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
