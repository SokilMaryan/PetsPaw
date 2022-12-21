<template>
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

        <router-link to="/liked">
          <AppButton class="h-10"> LIKED </AppButton>
        </router-link>
      </div>

      <!-- LIKED -->
      <div>
        <div v-if="addLiked.length > 0">
          <section>
            <div class="container px-5 py-5 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-2/3 p-4" 
                  v-for="dog of addLiked" 
                  :key="dog.image.id">
                  <div class="flex relative">
                    <img  
                      class=" w-[200px] h-[140px] rounded-[20px] inset-0 object-cover object-center "
                      :src="dog.image.url" 
                      :id="dog.image.id" 
                      alt="dog image"/>
                    <div
                      @click="onRemove(dog)" 
                      class="hover-item"
                      >
                      <font-awesome-icon class="text-white text-xl" icon="fa-regular fa-face-smile" />
                      <span class="bg-white text-purpur text-center rounded-[20px] p-auto px-2 ">
                        {{dog.name}} 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

           <!-- ACTION -->
          <div class="max-h-[140px] overflow-y-scroll">
            <div class="flex flex-col m-auto w-[640px] h-[60px] rounded-[20px] bg-gray-light gap-1 mb-5"
              v-for="item of addHistoriAction">
              <div class="flex text-base  rounded-[20px] items-center justify-between mx-5 my-4 ">
                <p class=" w-16 h-7 mr-5 flex-nowrap rounded-md bg-white p-1 ">
                  {{ item.timeHours }} : {{ item.timeMin }}
                </p>
                <span class="flex-1 font-medium text-gray text-base">
                  Image ID:
                  <b class="text-black">{{ item.id }} </b>
                  was added to
                  {{ item.groupActionName }}
                </span>
                <font-awesome-icon :class="item.imgStyle" :icon="item.imgSate" />
              </div>
            </div>
          </div>
        </div>

         <!--  No find item -->
        <div v-else>
          <div class="max-h-[140px]">
            <div class="flex flex-col m-auto w-[640px] h-[60px] rounded-[20px] bg-gray-light gap-1 mb-5">
              <div class="flex text-base  rounded-[20px] items-center justify-between mx-5 my-4 ">
                <span class="flex-1 font-medium text-gray text-base">
                  No find item
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useActionStore } from './votong/voting.store';

const { addHistoriAction, addLiked} = useActionStore()

function onRemove(breeds: IBreeds) {
  for (let i = 0; i < addLiked.length; i++) {
    if (addLiked[i].image.id === breeds.image.id) {
      addLiked.splice(i, 1);
      break;

    }
  }

  addHistoriAction.unshift({
    groupActionName: 'removed from Liked',
    timeHours: new Date().getHours(),
    timeMin: new Date().getMinutes(),
    id: breeds.image.id,
    imgSate: 'fa-solid fa-trash-arrow-up',
    imgStyle: "text-red-600"
  })

}
</script>


<style lang="scss" scoped >
  .hover-item {
    @apply w-[200px] h-[140px] rounded-[20px] gap-2 text-base absolute z-10 flex flex-col justify-center 
           items-center pt-5  border-2 border-gray-light bg-purpur opacity-0 hover:opacity-60 cursor-pointer
  }
</style>