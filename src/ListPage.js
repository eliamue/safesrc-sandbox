import React, { Component } from 'react';
import { getAllResources } from './fetch-utils';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
  state = {
    resource: [],
  };

  componentDidMount = async () => {
    const resourcelist = await getAllResources();

    this.setState({resource: resourcelist});
  };

  render() {
    return (
      <div className="resourcelist">
        {this.state.resource.map(resource => 
          <Link to={`/resource/${resource.id}`}>
            <div className="resource-info">
              <h2 className="name">{resource.name}</h2>
              <h3 className="category">{resource.category}</h3>
              <h4 className="subcategory">{resource.subcategory}</h4>

              <section className="resource-address">
                <p className="street-add">{resource.address}</p>
                <p className="city">{resource.city}</p>
                <p className="zip">{resource.zip}</p>
                <p className="county">{resource.county}</p>
                <p className="usstate">{resource.usstate}</p>
              </section>
              <section className="contact-info">
                <p className="phone-numbers">
                  Phone numbers: <p className="number1">{resource.number}</p>,
                  <p className="altnumber">{resource.altnumber}</p>
                </p>
                <p className="email">Email: {resource.email}</p>
                <p className="website">Website: {resource.website}</p>
              </section>
            </div>
          </Link>
        )}
      </div>
    );
  }
}
