import http from "k6/http";
import { sleep, check } from 'k6';

export const options = {
    vus: 50, // número de usuários simultâneos
    thresholds: {
        http_req_duration: [{threshold: 'p(95)<500', abortOnFail: true}], // 95% das requisições devem demorar menos de 500ms
    },
}

export default function () {
    let res
    for (let id = 1; id <= 100; id++) { // faz 100 requisições
        res = http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
    check(res, {
        'status is between 200 and 399': (r) => r.status >= 200 && r.status < 400,
    })
    sleep(1); // espera 1 segundo para que os usuários sejam criados
}
