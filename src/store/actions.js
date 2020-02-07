import axios from 'axios';
import Actions from '../constants/actions';
import Api from '../constants/api';

export const fetchShow = (payload) => ({
  type: Actions.FETCH_SHOW,
  payload
});

export const fetchShowData = () => {
  return (dispatch) => {
    return axios.get(`${Api.rootUrl}${Api.showEndpoint}`)
      .then(response => {
        dispatch(fetchShow(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};