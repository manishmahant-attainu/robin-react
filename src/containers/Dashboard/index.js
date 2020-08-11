import React, { Fragment } from 'react';
import _ from 'lodash';
import { httpRequest } from '../../config';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cities: [],
      error:'',
      userInfo: JSON.parse(localStorage.getItem('user_info'))
    };
  }

  componentDidMount(){
    console.log('MOUNTED');
    this.fetchCitiesData();
  }

  fetchCitiesData = async () => {
    const cities = await httpRequest({
      method:'GET',
      url:'cities',
    });
    this.setState({cities:cities.data.data});
  }

  render(){
    const { cities, error, userInfo } = this.state;
    console.log(userInfo);
    return(
      <Fragment>
        <div><h1>{`${userInfo.firstName.toUpperCase()}'s`} DASHBOARD</h1></div>
        {error && <h2 style={{color:'red'}}>Error Occured: {error}</h2>}
        <ul>
          {
            _.map(cities, (city, idx) => {
              return(
                <li key={idx}>{city.name}</li>
              );
            })
          }
        </ul>
      </Fragment>
    );
  }

}

export default Dashboard;
