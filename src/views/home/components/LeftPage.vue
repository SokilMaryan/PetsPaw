<template>
  <section class="flex justify-between flex-col">
    <header class="mb-20">
      <router-link to="/home">
        <el-image src="src/assets/images/Logo.svg" />
      </router-link>
    </header>

    <div class="mr-auto">
      <h1 class=" mb-4 text-5xl font-medium text-black tracking-tight leading-none md:text-5xl xl:text-6xl">
        Hi intern!
      </h1>
      <p class=" mb-16 font-normal text-xl text-gray lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Welcome to MSI 2021 Front-end test</p>
      <p class="mb-4 font-medium text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Lets start using The Dogs API</p>

      <div class="flex gap-10">
        <!-- VOTING -->
        <div class="flex-rules">
          <el-image 
            class="el-width bg-[#B4B7FF] block px-5 py-9 mb-2"
            src="src/assets/images/vote-table.svg" 
          />
          <router-link to="/voting">
            <AppButton>VOTING</AppButton>
          </router-link>
        </div>

        <!-- BREEDS -->
        <div class="flex-rules">
          <el-image class="el-width h-full bg-[#97EAB9] block px-3 py-4 mb-2"
            src="src/assets/images/pet-breeds.svg" 
          />
          <router-link to="/breeds">
            <AppButton>BREEDS</AppButton>
          </router-link>
        </div>

        <!-- GALLERY -->
        <div class="flex-rules">
          <el-image 
            class="el-width bg-[#FFD280]  block px-3 py-1 mb-2"
            src="src/assets/images/images-search.svg" 
          />
          <router-link to="/gallery">
            <AppButton>GALLERY</AppButton>
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped >
  .el-width {
    @apply max-w-[138px] max-h-[198px] rounded-[20px]
  }

  .flex-rules {
    @apply flex flex-col items-center
  }
</style>