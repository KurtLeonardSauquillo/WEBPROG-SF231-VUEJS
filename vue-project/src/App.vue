<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>


<template>

<ul>
  <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
</ul>
    <h1>Food</h1>
    <personal-profile/> <br>
    <food-item/> 
    <food-item2/> 
    <food-item/>  
  </template>


<style>

</style>