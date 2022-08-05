import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

//init
export const options = {
  // vus: 50, // 50 users looping for 1 minute // stages
  // duration: '30s',
stages: [
  {duration:'30s', target:10}, //duration : tempo target x usuários utilizados para essa carga
  {duration:'30s', target:20}, //ramp up : aumentando a carga que está enviando de 10 para 20 simulataneos
  {duration:'30s', target:10}, //ram down :decrescima ded usuários virtuais
]
  // thresholds: {
  //   http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  // },
};



export default function () {
  http.get('https://mari-dev.ambevdevs.com.br/login');
  sleep(1)
}





  const BASE_URL = 'https://ambev-stakeholders-front.azurewebsites.net/login';
  const USERNAME = 'HDN';
  const PASSWORD = 'eyJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImNvbnRhdG9AaGRuLmRpZ2l0YWwifQ.m5z8fMetyIiuARNZ4QY42ghed2zB9iQFKClOYcckpvA';

// // export default () => {
   const loginRes = http.post(`${BASE_URL}/auth/token/login/`, {
     username: USERNAME,
     password: PASSWORD,
   });

   check(loginRes, {
     'logged in successfully': (resp) => resp.json('access') !== '',
   });

//   const authHeaders = {
//     headers: {
//       Authorization: `Bearer ${loginRes.json('access')}`,
//     },
//   };

//   const myObjects = http.get(`${BASE_URL}/my/crocodiles/`, authHeaders).json();
//   check(myObjects, { 'retrieved crocodiles': (obj) => obj.length > 0 });

//   sleep(1);
// // };
