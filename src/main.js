import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// Add imported icons
library.add(faLinkedin);
library.add(faInstagram);
library.add(faFacebook);

// Create app
const app = createApp(App)

// Register FontAwesome component
.component('font-awesome-icon', FontAwesomeIcon)

// Use router
.use(router)

// Start app
app.mount("#app");
