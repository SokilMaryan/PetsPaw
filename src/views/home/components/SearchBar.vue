<template>
  <div class="flex justify-center items-center gap-2">

    <form class="form ">
      <input class="pl-10 w-[85%] font-medium text-xl " 
        type="text"
        placeholder="Search for breeds by name"
        v-model ="inputValue" />
      <router-link to="/search">
        <AppButton 
          class="m-auto mr-3 rounded-lg w-10 h-10  text-xl">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </AppButton>
      </router-link>
    </form>

    <!-- Like -->
    <router-link to="/liked">
      <AppButton class="btn-link-bar ">
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
    
  </div>
</template>

<script lang="ts" setup>
  const inputValue = ref()
</script> 

<style lang="scss" scoped >
  .btn-link-bar {
    @apply w-[60px] h-[60px] text-3xl
  }

  .form {
    @apply flex flex-row items-center w-[470px] h-[60px] border-solid border-2 border-white bg-white overflow-hidden hover:border-purpur-light
     rounded-[20px]
  }
</style>