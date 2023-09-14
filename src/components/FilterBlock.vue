<template>
  <v-col cols="12" md="4">
    <v-select
      type="text"
      name="country"
      density="comfortable"
      variant="outlined"
      v-model="usersStore.countryFilter"
      :items="countryItems"
      clearable
      single-line
      label="Filter by country"
    />

    <v-select
      type="text"
      name="score"
      density="comfortable"
      variant="outlined"
      v-model="usersStore.scoreFilter"
      :items="scoreItems"
      clearable
      single-line
      label="Filter by score"
    />
  </v-col>
</template>

<script lang="ts" setup>
  import { useUsersStore } from '@/stores/users'
  import { ref } from 'vue'

  const countryItems = ref(['russia', 'usa'])
  const scoreItems = ref (['> 20', '< 10'])

  const usersStore = useUsersStore()
</script> 