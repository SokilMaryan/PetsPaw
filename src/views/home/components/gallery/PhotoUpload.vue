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

  
      <el-upload 
        class="avatar-uploader rounded-[20px] w-[640px] h-[320px] border-dashed border-2 border-purpur-light mt-2 mb-4 bg-white flex justify-center items-center cursor-pointer" 
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false" 
        :on-success="handleAvatarSuccess" 
        :before-upload="beforeAvatarUpload">
        <img  v-if="imageUrl" :src="imageUrl" class="avatar w-full" />
       
        <div v-else class="flex relative justify-center items-center ">
          <font-awesome-icon class="text-[200px] text-gray-light" icon="fa-regular fa-image" />
          <span class="w-[369px] text-xl text-black absolute z-10">
            <b>Drag here </b>your file or <b>Click here</b> to upload
          </span>
        </div>
      </el-upload>

      <h1 class="text-xl text-center text-gray">No file selected</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<style lang="scss" scoped >
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

</style>