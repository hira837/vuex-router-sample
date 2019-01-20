<template>
    <div class="product">
        <h1>商品情報</h1>
        <p>このページは ID. {{ id }} の詳細を表示する</p>
        <dl>
            <dt>商品名</dt><dd>{{ item.name }}</dd>
            <dt>価格</dt><dd>{{ item.price }}円</dd>
            <dt>商品説明</dt><dd>{{ item.content }}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: { id: Number }
}
</script>