<template>
  <div class="photo-info-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图 -->
    <div class="thumbs">
        <img
        class="preview-img"
        v-for="(item, i) in list"
        :key="i"
        :src="item.src"
        height="100"
        @click="$preview.open(i, list)"
        >
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论组件 -->
    <comment :id="id"></comment>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  created() {
    this.getimageInfo()
    this.getthumimages()
  },
  methods: {
    getimageInfo() {
      this.$http.get("getimageInfo/" + this.id).then(result => {
        // console.log(result);
        this.photoinfo = result.body.message[0];
      });
    },
    getthumimages(){
        this.$http.get('getthumimages/' + this.id).then(result => {
            console.log(result)
            if (result.body.status === 0) {
                result.body.message.forEach(item => {
                    item.w = 600
                    item.h = 400
                });
                this.list = result.body.message
            }
        })
    }
  }
};
</script>

<style lang="less">
.photo-info-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs{
    img{
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
