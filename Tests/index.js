import Get from './scenarios/Get.js';
import { group, sleep } from 'k6';

export default () => {
    group ('GET - Testing GET method', () => {
        Get.get();
        sleep(1);
    });
}