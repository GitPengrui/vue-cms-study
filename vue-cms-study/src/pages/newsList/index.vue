<template>
  <div class="news-list-container">
    <!-- 图文列表 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
        <router-link :to="'/home/newsInfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">{{item.title}}
            <p class="mui-ellipsis">
                <span>发表时间:{{item.add_time}}</span>
                <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        newsList: []
    };
  },
  created() {
      this.getnewsList()
  },
  methods: {
      getnewsList(){
          this.$http.get('getnewslist').then(result => {
                console.log(result)
                this.newsList = result.body.message
          })
      }
  },
};
</script>

<style lang="less" scope>
    .news-list-container{
        .mui-media-body{
            font-size: 14px;
            text-overflow: ellipsis;
            .mui-ellipsis{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>