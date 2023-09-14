<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="justify-center align-center ma-4">
          
          <v-col cols="12">
            <v-img
              :src="Logo"
              class="my-3"
              contain
              height="200"
            />
          </v-col>

          <FilterBlock />

          <ContentBlock />

        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <MainFooter />
    </v-footer>

  </v-app>
</template>

<script lang="ts" setup>
  import Logo from '@/assets/logo.svg'
  import MainFooter from '@/components/MainFooter.vue'
  import ContentBlock from '@/components/ContentBlock.vue'
  import FilterBlock from '@/components/FilterBlock.vue'
</script>
