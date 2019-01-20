<template>
    <div class="product">
        <h1>商品情報</h1>
        <p>このページは ID. {{ id }} の詳細を表示する</p>
        <dl>
            <dt>商品名</dt><dd>{{ item.name }}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: { id: Number }
}
</script>