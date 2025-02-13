import {api} from '../boot/axios.js';

export const fetchMeetings = (room) => api.get('/meetings', {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {room}
  });

  export const saveAllData = (obj) => api.post('/meetings', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {obj}
  });

  export default fetchMeetings
