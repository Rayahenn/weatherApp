import Vue from "vue";
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    faCloud,
    faSun,
    faCloudShowersHeavy,
    faTemperatureHigh,
    faTemperatureLow,
    faWind,
    faBolt,
    faTint,
    faTachometerAlt,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faCloud, faSun, faCloudShowersHeavy, faTemperatureHigh, faTemperatureLow, faBolt, faTint, faWind, faTachometerAlt, faMapMarkerAlt)

Vue.component('fa-icon', FontAwesomeIcon)