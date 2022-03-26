import http from "k6/http";
import { sleep } from 'k6';

export default function get() {
    http.get('https://jsonplaceholder.typicode.com/posts/');
    sleep(1);
}