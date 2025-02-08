import './assets/main.css'
import "primeicons/primeicons.css";
import router from './router';

import { createApp } from 'vue';
import App from './App.vue'; 

 const app = createApp(App)
 
 app.use(router);
 
 
 app.mount('#app')

 app.use(cors({ origin: "http://localhost:5174" }));

