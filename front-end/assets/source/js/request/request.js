import axios from 'axios';

export const getAllUsers = () => {
  axios.get('localhost:3000/usuarios')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}