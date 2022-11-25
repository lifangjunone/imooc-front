

<template>
    <div class="bg-white sticky top-0 left-0 z-10">
        <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden ">
            <li v-for="item in data" :key="item.id" class="shrink-0 px-1.5 py-0.5 z-10 duration-200">{{ item.data.name }}</li>
        </ul>
    </div>
</template>

<script setup>
// vite 构建的项目中我们可以直接使用 defineProps 来定义接收父组件传递过来的值，此时父组件需要绑定 :data 属性
defineProps({
    data:  {
        type: Array,
        required: true
    }
})
</script>