import axios from 'axios';

axios.post('https://dummyjson.com/auth/login', {
  username: 'kminchelle',
  password: '0lelplR',
  // expiresInMins: 60, // opcional
}, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    // Manipular a resposta do servidor
    console.log(response.data);
  })
  .catch(error => {
    // Lidar com erros
    console.error(error);
  });