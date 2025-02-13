import {api} from '../boot/axios.js';

export const fetchMeetings = (room) => api.get('/meetings', {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {room}
  });

  export default fetchMeetings
