<template>
  <div class="mx-auto w-[680px] h-[840px] lg:mt-0 lg:col-span-5 lg:flex rounded-3xl ">
    <div class="flex flex-col p-8 bg-gray-light rounded-[20px]">

      <div class="flex justify-end items-center m-5 gap-3">
        <router-link to="/gallery">
          <AppButton class="flex h-10 bg-purpur text-white">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </AppButton>
        </router-link>
      </div>

      <h1 class=" text-4xl text-center text-black mb-4">Upload a .jpg or .png Dog Image</h1>

      <h3 class=" text-xl text-center text-gray mb-10">
        Any uploads must comply with the <b class="text-purpur">upload guidelines</b> or face deletion.
      </h3>

      <section class="rounded-[20px] w-[640px] h-[320px] border-dashed border-2 border-purpur-light mt-2 mb-4 bg-white">
        <div class="flex relative py-8 mx-auto justify-center items-center ">
          <font-awesome-icon class="text-[200px] text-gray-light" icon="fa-regular fa-image" />
          <span class="w-[369px] text-xl text-black absolute z-10">
            <b>Drag here </b>your file or <b>Click here</b> to upload
          </span>
        </div>
      </section>
      <h1 class="text-xl text-center text-gray">No file selected</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped >

</style>