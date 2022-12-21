<template>
  <!-- BREEDS PAGE PART -->
  <div class="mx-auto w-[680px] h-[840px] lg:mt-0 lg:col-span-5 lg:flex rounded-3xl ">
    <div class="flex flex-col p-8 ">
      <SearchBar class="mb-4" />


      <div class="rounded-[20px]  mt-3 mx-auto bg-white">

        <div class="flex flex-col">

          <div class="flex justify-between items-center m-5 gap-3">
            <div class="flex gap-2">
              <router-link to="$router.go(-1)">
                <AppButton class="w-10 h-10 text-xl">
                  <font-awesome-icon icon="fa-solid fa-angle-left" />
                </AppButton>
              </router-link>

              <router-link to="/breeds">
                <AppButton class="h-10"> BREEDS </AppButton>
              </router-link>
            </div>

            <router-link to="/photoupload">
              <AppButton class="flex h-10 bg-purpur text-white">
                <font-awesome-icon class="mr-4" icon="fa-solid fa-upload" />
                UPLOAD
              </AppButton>
            </router-link>
          </div>

          <div class="flex flex-col bg-gray-light rounded-[20px] mx-5 ">
            <div class="flex justify-between m-5 mt-6">
              <!-- ORDER option -->
              <div>
                <p class=" text-xs text-gray ml-2 mb-1">ORDER</p>
                <select  class="h-10 w-[290px] bg-white rounded-[10px] px-2 text-gray">
                  <option v-for="{ value, label } in orderParams" :key="value" :value="value" :label="label">
                  </option>
                </select>
              </div>

              <!-- TYPE option ...hew now idia --> 
              <div>
                <p class=" text-xs text-gray ml-2 mb-1">TYPE</p>
                <select  class="h-10 w-[290px] bg-white  rounded-[10px] px-2 text-gray">
                  <option v-for="{ value, label } in typeParams" :key="value" :value="value" :label="label">
                  </option>
                </select>
              </div>

            </div>

            <div class="flex justify-between items-center m-5">
              <!-- BREED option -->
              <div>
                <p class=" text-xs text-gray ml-2 mb-1">BREED</p>
                <select v-model="selectedItem" class="h-10 w-[290px] bg-white  rounded-[10px] px-2 text-gray">
                  <option>All breeds</option>
                  <option v-for="{ value, label } in breedsFilterOptions" :key="value" :value="value" :label="label">
                  </option>
                </select>
              </div>

              <!-- LIMIT option -->
              <div >
                <p class=" text-xs text-gray ml-2 mb-1">LIMIT</p>
                <select v-model="selectedLimit" class="h-10 w-[240px] bg-white  rounded-[10px] px-2 text-gray">
                  <option v-for="{ value, label } in imageShowLimitOptions" :key="value" :value="value" :label="label">
                  </option>
                </select>

                <AppButton class="h-10 w-10 ml-2 mb-1 bg-purpur text-white">
                  <font-awesome-icon icon="fa-solid fa-rotate-right" />
                </AppButton>
              </div>
            </div>
          </div>
        </div>

        <section class="rounded-[20px] mt-2">
          <div class="container px-5 py-5  mx-auto">
            <div class="flex flex-wrap m-4">
              <div 
                class="lg:w-1/3 sm:w-2/3 p-1" 
                v-for="dog of filteredOptionBreeds" 
                :key="dog.image.id"
                >
                <!-- <router-link to=""> -->
                  <div class="flex relative">
                    <img 
                      class=" w-[200px] h-[140px] rounded-[20px] inset-0 object-cover object-center "
                      :src="dog.image.url" 
                      :id="dog.image.id" 
                      alt="dogs images"/>
                    <div class="hover-item ">
                      <AppButton 
                        @click.stop="onFavorited(dog)"
                        class="w-10 bg-white text-purpur "
                        >
                        <font-awesome-icon icon="fa-regular fa-heart" />
                      </AppButton>
                    </div>
                  </div>
                <!-- </router-Link> -->
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchBar from '../SearchBar.vue';
import { useBreedsStore } from '../breds/breeds.store';
import { useActionStore } from '../votong/voting.store';

const breedsStore = useBreedsStore()
const { breeds } = storeToRefs(breedsStore)
const { addHistoriAction, addFavorited } = useActionStore()
const selectedItem = ref('All breeds')
const selectedLimit = ref('1000')

const imageShowLimitOptions: { label: string; value: number }[] = [
  {
    value: 1000,
    label: 'All items per page'
  },
  {
    value: 5,
    label: '5 items per page'
  },
  {
    value: 10,
    label: '10 items per page'
  },
  {
    value: 15,
    label: '15 items per page'
  },
  {
    value: 20,
    label: '20 items per page'
  }
]

const orderParams: { label: string; value: string }[] = [
  {
    value: 'default',
    label: 'Random'
  },
  {
    value: 'asc',
    label: 'Asc'
  },
  {
    value: 'dsc',
    label: 'Desc'
  }
]

const typeParams: { label: string; value: string }[] = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'static',
    label: 'Static'
  },
  {
    value: 'animated',
    label: 'Animated'
  }
]


const breedsFilterOptions = computed<{ label: string; value: number | string }[]>(() => {
  const breedsItem = breeds.value.map(item => ({ label: item.name, value: item.name }))
  return breedsItem.filter((item, index) => {
    return breedsItem.indexOf(item) === index
  });
})

const filteredOptionBreeds = computed(() => {
  const limits = +selectedLimit.value

  if (selectedItem.value === 'All breeds') {
    return breeds.value.slice(0, limits)
      
  }
  else {
    return breeds.value
          .filter(dog => dog.name.toLocaleLowerCase()
          .includes(selectedItem.value.toLowerCase()))
          .slice(0, limits)
  }
})


function onFavorited(breeds: IBreeds) {
  if (addFavorited.includes(breeds)) {
    for (let i = 0; i < addFavorited.length; i++) {
      if (addFavorited[i].image.id === breeds.image.id) {
        addFavorited.splice(i, 1);
        break;
      }
    }

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
.hover-item {
  @apply w-[200px] h-[140px] rounded-[20px] text-base absolute z-10 flex flex-col justify-center 
         items-center pt-5  border-2 border-gray-light bg-purpur opacity-0 hover:opacity-60 cursor-pointer 
}
</style>

