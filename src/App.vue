<template>
  <el-container class="m-0 p-0 max-w[1440px] flex justify-center items-center max-h-[900px] overflow-hiden">
    <div class="grid max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-3 lg:grid-cols-12">
      <div class=" lg:col-span-7">
        <LeftPage class="fixed" />
      </div>
      <div class="mx-auto w-[680px] h-[840px] lg:mt-0 lg:col-span-5 lg:flex  rounded-[20px]" >
        <RouterView  class="sticky-top"  />
      </div>
    </div>
  </el-container>
</template>
