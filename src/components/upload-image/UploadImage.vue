<template>
<div class="upload-image">
  <znv-input prefix=" iconfont2 iconhuabuye_tupianlianjie" v-model="imageUrl" size="small" placeholder="url"></znv-input>
  <znv-upload
    class="avatar-uploader mt5"
    action="#"
    :show-upload-list="false"
    accept=".jpg,.png,.gif"
    :before-upload="upload"
  >
    <img v-if="imageUrl" :src="imageUrl"
         style="max-width: 100%;max-height: 100%;vertical-align: middle;">
    <span v-else>点击上传图片</span>
    <znv-loading fix show-text="正在上传..." v-if="uploading"></znv-loading>
  </znv-upload>
</div>
</template>

<script>
import { uploadFile } from '@/api/upload/uploadFile'

export default {
  name: 'UploadImage',
  props: {
    value: String
  },
  data () {
    return {
      uploading: false,
      imageUrl: ''
    }
  },
  watch: {
    value: {
      handler (v) {
        this.imageUrl = v
      },
      immediate: true
    },
    imageUrl (v) {
      this.$emit('input', v)
      this.$emit('on-change', v)
    }
  },
  methods: {
    async upload (file) {
      if (file.size > 2 * 1024 * 1024) {
        this.$message.error('图片大小不能超过2M')
        return
      }
      const temp1 = file.name.split('.')
      const temp = temp1[temp1.length - 1]
      if (!['jpg', 'png', 'gif'].includes(temp)) {
        this.$message.error('请上传jpg/png/gif文件')
        return false
      }
      const params = new FormData()
      params.append('file', file)
      this.uploading = true
      try {
        const { data } = await uploadFile(params)
        this.imageUrl = data.path
      } catch (e) {
        console.log(e)
      } finally {
        this.uploading = false
      }
      return false
    }
  }
}
</script>

<style scoped lang="scss">
.upload-image{
  width: 100%;
  /deep/.znv-input-prefix i{
    color: #fff;
  }
}
</style>
