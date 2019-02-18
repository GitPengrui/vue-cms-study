<template>
  <div class="goods-info">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in LunbotuImg" :key="index">
        <img :src="item.src" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <div class="numbox">
            <span class="title">购买数量：</span>
            <input 
            type="button" 
            value="-"
            @click=" byCount>=2 && byCount--"
            :disabled="byCount == 1">
            <input type="number" v-model="byCount">
            <input 
            type="button" 
            value="+"
            @click=" byCount < goodsinfo.stock_quantity && byCount++"
            :disabled="byCount == goodsinfo.stock_quantity">
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      LunbotuImg: [],
      goodsinfo: {},
      byCount: 1
    };
  },
  created() {
    this.getLunbotu();
    this.getgoodsinfo();
  },
  methods: {
    getLunbotu() {
      this.$http.get("getthumimages/" + this.id).then(result => {
        // console.log(result);
        this.LunbotuImg = result.body.message;
      });
    },
    getgoodsinfo() {
      this.$http.get("goods/getinfo/" + this.id).then(result => {
        console.log(result)
        this.goodsinfo = result.body.message[0];
      });
    }
  }
};
</script>

<style lang="less">
.goods-info {
  background-color: #eee;
  overflow: hidden;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .numbox {
    display: flex;
    height: 50px;
    align-items: center;
    input {
      width: 30px;
      height: 30px;
      padding: 0;
      margin: 0;
      text-align: center;

      &[type="number"] {
        border-left: 0;
        border-right: 0;
        font-size: 12px;
        color: gray;
      }
    }
  }

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
}
</style>
