
import { createApp } from 'vue'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes/index'




const app = createApp(App);

app.use(PrimeVue)
app.use(router)

app.mount('#app');
