import { group, sleep } from 'k6';
import GetApi from './scenarios/Get-Api.js';
import PostApi from './scenarios/Post-Api.js';

export default () => {
    group ('GET - Testing GET method', () => {
        GetApi()
        sleep(1)
    })
    group ('POST - Testing POST method', () => {
        PostApi()
        sleep(1)
    })
}