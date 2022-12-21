import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/components/Home.vue'
import Voting from '@/views/home/components/votong/Voting.vue'
import Breeds from '@/views/home/components/breds/Breeds.vue'
import Liked from '@/views/home/components/Liked.vue'
import Favorite from '@/views/home/components/Favorite.vue'
import Disliked from '@/views/home/components/Disliked.vue'
import SearchPageVue from './components/SearchPage.vue'
import GirlPage from '@/views/home/components/GirlPage.vue'
import BredsInfo from './components/breds/BredsInfo.vue'
import GalleryPage from './components/gallery/GalleryPage.vue'
import PhotoUpload from './components/gallery/PhotoUpload.vue'


const homeRoutesNames = {
  home: 'home',
  voting: 'voting',
  breeds: 'breeds',
  breedsinfo: 'breedsinfo',
  gallery: 'gallery',
  girlpage: 'girlpage',
  search: 'search',
  liked: 'liked',
  favorite: 'favorite',
  disliked: 'disliked',
  photoupload: 'photoupload'
}

// const votingRoutesNames = {
//   voting: 'voting'
// }

// const breedsRoutesNames = {
//   breeds: 'breeds'
// }

// const breedsInfoNames = {
//   breedsinfo: 'breedsinfo'
// }

// const galleryRoutesNames = {
//   gallery: 'gallery'
// }

// const girlPageRoutesNames = {
//   girlpage: 'girlpage'
// }

// const searchPageRoutesNames = {
//   search: 'search'
// }

// const likedRoutesNames = {
//   liked: 'liked'
// }

// const favoriteRoutesNames = {
//   favorite: 'favorite'
// }

// const dislikedRoutesNames = {
//   disliked: 'disliked'
// }


const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: homeRoutesNames.home,
    component: Home
  },
  {
    path: '/voting',
    name: homeRoutesNames.voting,
    component: Voting
  },
  {
    path: '/breeds',
    name: homeRoutesNames.breeds,
    component: Breeds
  },
  {
    path: '/breedsinfo',
    name: homeRoutesNames.breedsinfo,
    component: BredsInfo
  },
  {
    path: '/gallery',
    name: homeRoutesNames.gallery,
    component: GalleryPage
  },
  {
    path: '/girlpage',
    name: homeRoutesNames.girlpage,
    component: GirlPage
  },
  {
    path: '/search',
    name: homeRoutesNames.search,
    component: SearchPageVue
  },
  {
    path: '/liked',
    name: homeRoutesNames.liked,
    component: Liked
  },
  {
    path: '/favorite',
    name: homeRoutesNames.favorite,
    component: Favorite
  }, 
  {
    path: '/disliked',
    name: homeRoutesNames.disliked,
    component: Disliked
  },
  {
    path: '/photoupload',
    name: homeRoutesNames.photoupload,
    component: PhotoUpload
  },
 
]

export {
  homeRoutesNames,
  homeRoutes
}
