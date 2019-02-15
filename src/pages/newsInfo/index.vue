<template>
    <div class="news-info-container">
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间: {{ newsInfo.add_time }}</span>
            <span>点击: {{ newsInfo.click }}次</span>
        </p>
        <hr>
        <div class="contentImg" v-html="newsInfo.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    created() {
        this.getnewsInfo()
    },
    methods: {
        getnewsInfo(){
            this.$http.get('getnew/' + this.id).then(result => {
                console.log(result)
                this.newsInfo = result.body.message[0]
            })
        }
    },
}
</script>

<style lang="less">
    .news-info-container{
        padding: 0 4px;
        .title{
            color: red;
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content:space-between;
        }
        .contentImg{
            img{
                width: 100%;
            }
        }
    }
</style>>