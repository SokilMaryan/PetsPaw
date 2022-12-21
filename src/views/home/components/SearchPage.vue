<template>
  <div class="flex flex-col p-8">
    <!-- SEARCH BAR -->
    <div class="flex justify-center items-center gap-2">
      <form class="form">
        <input 
          v-model="inputValue" 
          class="pl-10 w-[85%] font-medium text-xl " 
          type="text"
          placeholder="Search for breeds by name" />

        <AppButton class="m-auto mr-3 rounded-lg w-10 h-10  text-xl">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </AppButton>
      </form>

      <!-- Like -->
      <router-link to="/liked">
        <AppButton class="btn-link-bar">
          <font-awesome-icon icon="fa-regular fa-face-smile" />
        </AppButton>
      </router-link>

      <!-- Favorite -->
      <router-link to="/favorite">
        <AppButton class="btn-link-bar">
          <font-awesome-icon icon="fa-regular fa-heart" />
        </AppButton>
      </router-link>

      <!-- Dislike -->
      <router-link to="/disliked">
        <AppButton class="btn-link-bar ">
          <font-awesome-icon icon="fa-regular fa-face-frown" />
        </AppButton>
      </router-link>
      <div></div>
    </div>

    <!-- SEARCH PAGE -->
    <div class="flex flex-col mt-2  rounded-[20px] bg-white ">

      <h1 class="m-4 text-gray text-base"> 
        Search results for: <b>{{ inputValue }}</b>
      </h1>

      <div class=" flex m-5 gap-3 ">
        <router-link to="$router.go(-1)">
          <AppButton class=" w-10 h-10 text-xl">
            <font-awesome-icon icon="fa-solid fa-angle-left" />
          </AppButton>
        </router-link>

        <router-link to="/liked">
          <AppButton class="h-10"> SEARCH </AppButton>
        </router-link>
      </div>

      <section class="container px-5 py-5 mx-auto h-auto flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-2/3 p-4" 
          v-for="dog of filteredByName" 
          :key="dog.image.id"
          >
          <div class="flex relative">
            <img class=" w-[200px] h-[140px] rounded-[20px] inset-0 object-cover object-center " 
              :src="dog.image.url"
              :id="dog.image.id" alt="dog image" 
              />
              <div class="hover-item">
                <font-awesome-icon class="text-white text-xl" icon="fa-regular fa-face-smile" />
                <span class="bg-white text-purpur text-center rounded-[20px] p-auto px-2 ">
                  {{ dog.name }} 
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>

const inputValue = ref()
const breedsStore = useBreedsStore()
const { breeds } = storeToRefs(breedsStore)

const filteredByName = computed(() => {
  if (inputValue.value) {
    console.log(inputValue.value)
    return breeds.value.filter((el) =>
      el.name.toLowerCase().includes(inputValue.value.toLowerCase())
    )
  }
})
</script>

<style lang="scss" scoped >
  .btn-link-bar {
    @apply w-[60px] h-[60px] text-3xl
  }

  .form {
    @apply flex flex-row items-center w-[470px] h-[60px] border-solid border-0 bg-white overflow-hidden rounded-[20px]
  }

  .hover-item {
    @apply w-[200px] h-[140px] rounded-[20px] gap-2 text-base absolute z-10 flex flex-col justify-center 
           items-center pt-5 border-2 border-gray-light  bg-purpur opacity-0 hover:opacity-60 cursor-pointer
  }
</style>