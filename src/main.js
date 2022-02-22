import {
    createApp
} from 'vue';

import App from './App.vue';
//import router nya
import router from './router';

createApp(App).use(router).mount('#app');