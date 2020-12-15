import React, { Fragment } from 'react';
import _ from 'lodash';
import { httpRequest, WEB_URL } from '../../config';

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

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    this.props.history.push(WEB_URL.LOGIN);
  }

  render(){
    const { cities, error, userInfo } = this.state;
    console.log(userInfo);
    return(
      <Fragment>
        <div><h1>{`${userInfo.firstName.toUpperCase()}'s`} DASHBOARD</h1></div>
        <button onClick={this.logout}>Logout</button>
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
