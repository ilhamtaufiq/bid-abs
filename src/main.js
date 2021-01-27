import Vue from 'vue'
import App from './App.vue'

//Apollo
import VueApollo from "vue-apollo";
import apolloClient from "./apollo/apollo-vue";
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'

import vSelect from 'vue-select'

Vue.component('v-select', vSelect)



import VueCurrencyInput from 'vue-currency-input'
const pluginOptions = {
    /* see config reference */
    globalOptions: { currency: 'IDR', }
  }
  
Vue.use(VueCurrencyInput, pluginOptions)

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});


// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)


// axios
import axios from 'axios'
Vue.prototype.$http = axios

// Theme Configurations
import '../themeConfig.js'


// Algolia - Instant Search
import InstantSearch from 'vue-instantsearch';
Vue.use(InstantSearch);


// Firebase
import '@/firebase/firebaseConfig'


// Auth0 Plugin
import AuthPlugin from "./plugins/auth";
Vue.use(AuthPlugin);


// ACL
import acl from './acl/acl'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css';


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// i18n
import i18n from './i18n/i18n'


// Vuesax Admin Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')


// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'API_KEY',
        libraries: 'places', // This is required if you use the Auto complete plug-in
    },
})

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

import VxTooltip from '@/layouts/components/vx-tooltip/VxTooltip.vue'


new Vue({
    router,
    store,
    i18n,
    acl,
    apolloProvider,
    DefaultApolloClient,
    apolloClient,
    el: "#app",
    components: {
      VxTooltip,
  },
    render: h => h(App)
}).$mount('#app')

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

