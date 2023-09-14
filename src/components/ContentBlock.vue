<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list lines="three">
        <v-list-subheader>List</v-list-subheader>   
        <transition-group name="list" tag="div">
          <v-list-item
            v-for="user in users.filteredUsers" 
            :key="user.id" 
            :title="user.title"
            :id="`overlay-${user.id}`"
          >

            <template v-slot:prepend>
              <v-avatar :image="user.avatar" @click="showAddress(user.id)" />
            </template>

            <template v-slot:subtitle>
              <div v-html="user.subtitle"></div>
            </template>
            
          </v-list-item>
        </transition-group>
        
        <v-overlay
          v-if="currentUser" 
          v-model="show" 
          :attach="`#overlay-${currentUser.id}`" 
          absolute 
          open-on-click
        >
          <v-card  class="pa-2">{{ currentUser.address }}</v-card>
        </v-overlay>
      </v-list>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
  import { useUsersStore } from '@/stores/users'
  import { ref } from 'vue'

  const users = useUsersStore()
  const show = ref(false)
  const currentUser = ref()

  const showAddress = (id: number) => {
    currentUser.value = users.filteredUsers.find(el => el.id === id)
    show.value = !show.value
  }
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 0.8s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: rotateX(0.5turn);
  }
</style>