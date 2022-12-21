<template>
  <!-- VOTING PAGE PART -->
  <div class="mx-auto w-[680px] h-[840px] lg:mt-0 lg:col-span-5 lg:flex rounded-3x">
    <div class="flex flex-col p-8">
      <!-- SEARCH BAR -->
      <SearchBar class="mb-4" />

      <!-- NAVIGATE -->
      <div class="flex flex-col  rounded-[20px] bg-white ">

        <div class="flex m-5 gap-3 ">
          <router-link to="$router.go(-1)">
            <AppButton class=" w-10 h-10 text-xl">
              <font-awesome-icon icon="fa-solid fa-angle-left" />
            </AppButton>
          </router-link>

          <router-link to="/voting">
            <AppButton class="h-10"> VOTING </AppButton>
          </router-link>
        </div>

        <!-- VOTING IMAGE ACTION CAROUSEL -->
        <div class="reletive mb-12 flex flex-col ">
          <el-carousel 
            arrow="always" 
            :autoplay=false 
            indicator-position="none"
            class=" w-[640px] h-[360px] m-auto rounded-2xl" 
            direction="horizontal">

            <el-carousel-item
              class="max-w-[640px] max-h-[360px] flex flex-col justify-center items-center m-auto overflow-visible "
              v-for="item in breed" 
              :key="item.image.id">
              <img 
                class=" max-w-[640px] max-h-[360px] rounded-[20px] object-fill" 
                :id="item.image.id"
                :src="item.image.url" />

              <el-button-group
                class="absolute -bottom-[20%] z-10 left-1/3 bg-white border-y-4 border-white rounded-[20px] 
                flex flex-row gap-1 overflow-visible">
                <el-button 
                      class="btn-item  bg-grean_bg  hover:text-grean_bg hover:bg-grean_light_bg focus:bg-grean_bg  rounded-l-[20px]" 
                       @click.stop="onLiked(item)">
                  <font-awesome-icon icon="fa-regular fa-face-smile" />
                </el-button>

                <el-button
                  class="btn-item  bg-purpur hover:text-purpur hover:bg-purpur_light_bg focus:bg-purpur"
                  @click.stop="onFavorited(item)">

                  <font-awesome-icon icon="fa-regular fa-heart" />
                </el-button>

                <el-button 
                    class="btn-item bg-yellow_bg hover:text-yellow_bg hover:bg-yellow_light_bg focus:bg-yellow_bg rounded-r-[20px]" 
                     @click.stop="onDisliked(item)"
                  >
                  <font-awesome-icon icon="fa-regular fa-face-frown" />
                </el-button>

              </el-button-group>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- VOTING LOG ACTION -->
        <div class="max-h-[270px] overflow-y-scroll">
          <div 
            class="flex flex-col m-auto w-[640px] h-[60px] rounded-[20px] bg-gray-light gap-1 mb-5"
            v-for="item of addHistoriAction">
            <div class="flex flex-row text-base rounded-[20px] items-center justify-between mx-5 my-4 ">
              <p class=" w-16 h-7 mr-5 flex-nowrap rounded-md bg-white p-1 ">
                {{ item.timeHours }} : {{ item.timeMin }}
              </p>
              <span class="flex-1 font-medium text-gray text-base">
                Image ID: <b class="text-black"> {{ item.id}}</b> 
                was added to {{ item.groupActionName }}
              </span>
              <font-awesome-icon :class="item.imgStyle" :icon="item.imgSate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import SearchBar from '../SearchBar.vue';
import { useActionStore } from './voting.store';
import { useBreedsStore } from '../breds/breeds.store';

const breedsStore = useBreedsStore()
const { breeds } = storeToRefs(breedsStore)
const { addHistoriAction, addLiked, addDisliked, addFavorited } = useActionStore()

const breed = computed(() => {
  return breeds.value.filter(el => el.image)
})

function onLiked(breeds: IBreeds) {
  if (addLiked.includes(breeds) ) {
    addLiked.splice(breeds.image.id, 1)

    addHistoriAction.unshift({
      groupActionName: 'removed from Liked',
      timeHours: new Date().getHours(),
      timeMin: new Date().getMinutes(),
      id: breeds.image.id,
      imgSate: 'fa-solid fa-trash-arrow-up',
      imgStyle: "text-red-600"
    })
  } else {
    addLiked.push(breeds)

    addHistoriAction.unshift({
      groupActionName: 'Like',
      timeHours: new Date().getHours(),
      timeMin: new Date().getMinutes(),
      id: breeds.image.id,
      imgSate: "fa-regular fa-face-smile",
      imgStyle: 'text-grean_bg'
    })
  }
}

function onDisliked(breeds: IBreeds) {
  if (addDisliked.includes(breeds)) {
    addDisliked.splice(breeds.image.id, 1)

    addHistoriAction.unshift({
      groupActionName: 'removed from Disliked',
      timeHours: new Date().getHours(),
      timeMin: new Date().getMinutes(),
      id: breeds.image.id,
      imgSate: 'fa-solid fa-trash-arrow-up',
      imgStyle: 'text-red-600'
    })
  } else {
    addDisliked.push(breeds)

    addHistoriAction.unshift({
      groupActionName: 'Dislike',
      timeHours: new Date().getHours(),
      timeMin: new Date().getMinutes(),
      id: breeds.image.id,
      imgSate: "fa-regular fa-face-frown",
      imgStyle: 'text-grean_bg'
    })
  }
}

function onFavorited(breeds: IBreeds) {
  if (addFavorited.includes(breeds)) {
    addFavorited.splice(breeds.image.id, 1)

    addHistoriAction.unshift({
      groupActionName: 'removed from Favorites',
      timeHours: new Date().getHours(),
      timeMin: new Date().getMinutes(),
      id: breeds.image.id,
      imgSate: 'fa-solid fa-trash-arrow-up',
      imgStyle: "text-red-600"
    })
  } 
  else {
    addFavorited.push(breeds)

    addHistoriAction.unshift({
      groupActionName: 'Favorite',
      timeHours: new Date().getHours(),
      timeMin: new Date().getMinutes(),
      id: breeds.image.id,
      imgSate: "fa-regular fa-heart",
      imgStyle: 'text-purpur'
    })
  }
}
</script>

<style lang="scss" scoped >
  .btn-item {
    @apply w-20 h-20 text-3xl text-white  focus:text-white
  }
</style>

