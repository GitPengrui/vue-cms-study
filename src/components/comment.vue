<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多输入120字)" maxlength="120" v-model="commentsContent"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        
        <ul class="commentsList" v-for="(item, i) in comments" :key="item.add_time">
            <li>第{{1+i}}楼 用户:{{ item.user_name }} 发表时间:{{ item.add_time | dateFormat }}</li>
            <li>{{ item.content }}</li>
        </ul>

        <mt-button type="default" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            pageindex: 1,
            comments: [],
            commentsContent: ''
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get('getcomments/' + this.id + '?pageindex=' + this.pageindex).then(result => {
                // console.log(result)
                this.comments = this.comments.concat(result.body.message)
            })
        },
        getMore(){
            this.pageindex++;
            this.getComments()
        },
        postComment(){
            if(this.commentsContent.trim().length === 0) return Toast('评论不能为空')

            this.$http.post('postcomment/' + this.id, { content: this.commentsContent }).then(result => {
                // console.log(result)
                Toast(result.body.message)

                //让添加的评论显示在第一条
                this.comments = []
                this.pageindex = 1
                this.getComments()
                this.commentsContent = ''

            })
        }
    },
    props: ['id']
}
</script>

<style lang="less">
.comment-container{
    textarea{
        height: 100px;
        margin-bottom: 0;
    }
    .commentsList{
        font-size: 14px;
        margin-top: 5px;
        li:nth-of-type(1){
            background-color: #ccc;
        }
        li:nth-of-type(2){
            height: 40px;
            line-height: 40px;
        }
    }
}
</style>
