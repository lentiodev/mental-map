const axios = require('axios');

const subscriptionKey = '1fb8f91dc6ea431aa431be26543f7b03';
const url = 'https://api.nhs.uk/mental-health';

axios.get(url, {
  headers: {
    'subscription-key': subscriptionKey,
    'Accept': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});