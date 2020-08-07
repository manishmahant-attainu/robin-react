import Axios from 'axios';

const axioDefaultOption = {
  baseURL: 'http://localhost:3232/api/v1/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json'
  },
  responseType: 'json',
};

// const axiosConfig = Axios.create(axioOption);

const createConfig = () => {
  const authToken = localStorage.getItem('access_token');
  const isAuth = !!authToken;
  if(isAuth) {
    axioDefaultOption.headers['Authorization'] = `Bearer ${authToken}`;
  }
  return axioDefaultOption;
};

const httpRequest = (options) => {
  const { data, url, method } = options;
  const axioOption = createConfig();
  return Axios({
    method,
    url,
    data,
    ...axioOption
  });
};

export default httpRequest;
