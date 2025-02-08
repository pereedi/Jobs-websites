<script setup>
import Hero from '@/components/Hero.vue';
import Homecards from '@/components/Homecards.vue';
import jobListings from '@/components/JobListings.vue';

</script> 

<template>
 <Hero />
  <Homecards/>
  <jobListings :limit="3" :showButton="true"/>
</template>