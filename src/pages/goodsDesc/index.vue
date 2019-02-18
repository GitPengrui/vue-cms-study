<template>
    <div class="goods-desc">
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            goodsinfo: {}
        }
    },
    created() {
        this.getdesc()
    },
    methods: {
        getdesc() {
            this.$http.get('goods/getdesc/' + this.id).then(result => {
                console.log(result)
                this.goodsinfo = result.body.message[0]
            })
        }
    },
}
</script>