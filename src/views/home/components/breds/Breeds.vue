<template>
  <!-- BREEDS PAGE PART -->
  <div class="mx-auto w-[680px] h-[840px] lg:mt-0 lg:col-span-5 lg:flex rounded-3xl ">
    <div class="flex flex-col  mx-auto  p-8">
      <SearchBar class="mb-4" />
      <div class="flex flex-col  rounded-[20px] bg-white">
        <div class="flex justify-between items-center m-5 gap-1">
          <router-link to="$router.go(-1)">
            <AppButton class="w-10 h-10 text-xl">
              <font-awesome-icon icon="fa-solid fa-angle-left" />
            </AppButton>
          </router-link>

          <router-link to="/breeds">
            <AppButton class="h-10"> BREEDS </AppButton>
          </router-link>
  
          <!-- breeds option -->
          <select
            v-model="selectedItem"
            class="h-10 bg-gray-light rounded-[10px] px-2 text-gray">
            <option>All breeds</option>
            <option v-for="{ value, label } in breedsFilterOptions" :key="value" :value="value" :label="label"></option>
          </select>

          <!-- img show limit -->
          <select 
            v-model="selectedLimit"
            class="h-10 bg-gray-light rounded-[10px] px-2 text-gray">
            <option v-for="{ value, label } in imageShowLimitOptions" :key="value" :value="value" :label="label"></option>
          </select>

          <!-- alphabetical show limit -->
          <select 
            v-model="selectedSortingAZ"
            class="h-10 bg-gray-light rounded-[10px] px-2 text-gray">
            <option v-for="{ value, label } in imageSortingAZ" :key="value" :value="value" :label="label"></option>
          </select>
        </div>

         <!-- BREEDS -->
      <section class="bg-white rounded-[20px] mt-3">
        <div class="container px-5 py-5  mx-auto">
          <div 
            class="flex flex-wrap m-4">
            <div 
              class="lg:w-1/3 sm:w-2/3 p-1" 
              v-for="dog of filteredOptionBreeds" 
              :key="dog.image.id"
              >
              <router-link to="/breedsinfo">
                <div class="flex relative">
                  <img 
                    alt="gallery" 
                    class=" w-[200px] h-[140px] rounded-[20px] inset-0 object-cover object-center "
                    :src="dog.image.url" 
                    :id="dog.image.id" />
                  <div 
                    @click="addInfoData(dog)"
                    class="hover-item"
                    >
                    <span 
                      class="bg-white text-purpur text-xl text-center rounded-[20px] p-auto px-2">
                      {{ dog.name }}
                    </span>
                  </div>
                </div>
              </router-Link>
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
import { useBreedsStore } from './breeds.store';

const infoStore = useInfoStore()
const { addInfoStore } = storeToRefs(infoStore)
const breedsStore = useBreedsStore()
const { breeds } = storeToRefs(breedsStore)
const selectedItem = ref('All breeds')
const selectedLimit = ref('1000')
const selectedSortingAZ = ref('A-z')

const imageShowLimitOptions: { label: string; value: number }[] = [
  {
    value: 1000,
    label: 'Lim: All'
  },
  {
    value: 5,
    label: 'Limit: 5'
  },
  {
    value: 10,
    label: 'Limit: 10'
  },
  {
    value: 15,
    label: 'Limit: 15'
  },
  {
    value: 20,
    label: 'Limit: 20'
  }
]

const imageSortingAZ: { label: string; value: string }[] = [
  {
    value: 'A-z',
    label: 'Sorting: A-z'
  },
  {
    value: 'Z-a',
    label: 'Sorting: Z-a'
  }
]

const breedsFilterOptions = computed<{ label: string; value: number | string }[]>(() => {
  const breedsItem = breeds.value.map(item => ({ label: item.name, value: item.name }))
  return breedsItem.filter((item, index) => {
    return breedsItem.indexOf(item) === index
  });
})

function addInfoData (breeds: IBreeds) {
  addInfoStore.value[0] = breeds
}

const filteredOptionBreeds = computed(() => {
  const limits = +selectedLimit.value
  
  if (selectedItem.value === 'All breeds') {
    return (selectedSortingAZ.value === 'A-z') 
            ? breeds.value.slice(0, limits)
              .sort((a, b) => a.name.localeCompare(b.name)) 
            : breeds.value.slice(0, limits)
              .sort((a, b) => b.name.localeCompare(a.name))
  } 
  else 
  {
   return (selectedSortingAZ.value === 'A-z') 
          ? breeds.value
           .filter(dog => dog.name.toLocaleLowerCase()
           .includes(selectedItem.value.toLowerCase()))
           .slice(0, limits).sort((a, b) => a.name.localeCompare(b.name))
          
           : breeds.value
           .filter(dog => dog.name.toLocaleLowerCase()
           .includes(selectedItem.value.toLowerCase()))
           .slice(0, limits).sort((a, b) => b.name.localeCompare(a.name))
  }  
})

</script>

<style lang="scss" scoped >
  .hover-item {
    @apply w-[200px] h-[140px] rounded-[20px] text-base absolute z-10 flex flex-col justify-center 
           items-center pt-5  border-2 border-gray-light bg-purpur opacity-0 hover:opacity-60 cursor-pointer 
  }
</style>

