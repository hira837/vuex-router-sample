<template>
    <div class="product" v-if="item" key="product">
        <h1>商品情報</h1>
        <p>このページは ID. {{ id }} の詳細を表示する</p>
        <dl>
            <dt>商品名</dt><dd>{{ item.name }}</dd>
            <dt>価格</dt><dd>{{ item.price }}円</dd>
            <dt>商品説明</dt><dd>{{ item.content }}</dd>
        </dl>
    </div>
    <div v-else key="loading">
        商品情報を読み込んでいます...
    </div>
</template>

<script>
export default {
    props: { id: Number },
    data() {
        return {
            item: null
        }
    },
    watch: {
        id: {
            handler() {
                products.asyncFind(this.id, item => {
                    this.item = item
                })
            }
        }
    }
}
</script>