import axios from 'axios';

const register = async (data) => {
  const res = await axios.post('/v1/user', data);

  console.log(res);
  return res.data;
};
