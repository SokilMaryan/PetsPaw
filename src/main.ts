import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store/create-store'
import { VueGlobalPropertiesPlugin } from '@/plugins'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faAngleLeft, faHeart as fasHeart, 
        faXmark, faArrowUpZA , faArrowDownZA, faTrashArrowUp, 
        faUpload, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import {  faHeart,faFaceSmile, faFaceFrown, faImage} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
import '@/assets/styles/main.scss'

library.add(
  faMagnifyingGlass, 
  faAngleLeft, 
  faHeart, 
  fasHeart,
  faXmark,
  faFaceSmile,
  faFaceFrown,
  faArrowUpZA,
  faArrowDownZA, 
  faTrashArrowUp,
  faRotateRight,
  faImage,
  faUpload
  )
const app = createApp(App)


app
  .use(router)
  .use(store)
  .use(VueGlobalPropertiesPlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

export {
  app
}
