<template>
  <!-- BREEDS INFO PAGE PART -->
  <div class="flex flex-col p-8">
    <!-- SEARCH BAR -->
    <SearchBar class="mb-4" />

    <div class="flex flex-col  rounded-[20px] bg-white " 
      v-for="dog of addInfoStore" 
      :key="dog.image.id"
      >
      <div class="flex m-5 gap-3 ">
        <router-link to="$router.go(-1)">
          <AppButton class=" w-10 h-10 text-xl">
            <font-awesome-icon icon="fa-solid fa-angle-left" />
          </AppButton>
        </router-link>

        <router-link to="/breeds">
          <AppButton class="h-10"> BREEDS </AppButton>
        </router-link>

        <AppButton class="h-10"> {{ dog.id }}</AppButton>

      </div>

      <div>
        <section>
          <div class="flex justify-center items-center mx-auto">
            <div class=" m-auto">
              <div class="w-full">
                <div class="flex items-center justify-center">
                  <img 
                    class=" w-[640x] h-[360px] rounded-[20px] inset-0 object-cover object-center "
                    :src="dog.image.url" 
                    :id="dog.image.id" 
                    alt="dogs img" />
                </div>

                <div class="flex justify-center flex-row items-center mx-auto h-auto 
                     border-[2px] border-purpur-light rounded-[20px] my-6 p-2 "
                 >
                  <div class="mx-auto">
                    <div class="flex-wrap mb-6 text-center">
                      <h1 class="text-4xl text-black">{{ dog.name }}</h1>
                      <h2 class="text-xl text-gray">{{ dog.bred_for }}</h2>
                    </div>

                    <div class="flex items-center text-start gap-2">
                      <div class=" flex-row w-[270px] ml-10">
                        <h1><b>Temperament</b></h1>
                        <span>{{ dog.temperament }}</span>
                      </div>

                      <div class="flex-row w-[270px]">
                        <h1><b>Height: </b> {{ dog.height.metric }} cm at the withers</h1>
                        <h1><b>Weight: </b> {{ dog.weight.metric }} kgs</h1>
                        <h1><b>Life span:</b>{{ dog.life_span }} years</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInfoStore } from './breeds_helper.store';
const infoStore = useInfoStore()
const { addInfoStore } = storeToRefs(infoStore)
</script>