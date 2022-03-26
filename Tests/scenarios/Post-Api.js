import http from "k6/http";
import { sleep, check } from 'k6';

export const options = {
    vus: 50, // número de usuários simultâneos
    thresholds: {
        http_req_duration: [{threshold: 'p(95)<500', abortOnFail: true}], // 95% das requisições devem demorar menos de 500ms
    },
}

export default function () {
   const url = 'https://jsonplaceholder.typicode.com/posts'
   for (let userId = 1; userId <= 10; userId++) { 
   const payload = JSON.stringify({
       title: 'foo',
        body: 'bar',
        userId: userId,
   })
   const params = {
    headers: {
           'Content-Type': 'application/json',
    },
 }
 http.post(url, payload, params)
}
  sleep(1)
}
