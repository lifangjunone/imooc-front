<template>
    <mobile-navigation-vue v-if="isMobileTerminal" :data="categorysData"/>
</template>

<script setup>
import { isMobileTerminal } from "@/utils/flexible"
import mobileNavigationVue from "./mobile/index.vue"
import pcNavigationVue from "./pc/index.vue"
import { getCategory } from '@/api/category'
import { ref } from "vue"


const categorysData = ref([])
const getCategoryData = async () => {
    const { items } = await getCategory()
    categorysData.value = items
} 
getCategoryData() 
</script>
