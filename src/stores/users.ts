import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type IUsers } from '@/types/users'
import { getUsers } from '@/api/users'

export const useUsersStore = defineStore('users', () => {
  
  // Получение пользователей с внешнего api
  // getUsers().then((data) => {
  //   if(Array.isArray(data)) {
  //     users.value = data
  //   } else {
  //     console.log('ERROR' , data)
  //   }
  // })
  
  const users = ref<IUsers[]>(
    [
      {
        id: 1,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        country: 'russia',
        score: 25,
        address: 'user1. here we can see my home address'
      },
      {
        id: 2,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        country: 'russia',
        score: 9,
        address: 'user2. here we can see my home address'
      },
      {
        id: 3,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        country: 'usa',
        score: 50,
        address: 'user3. here we can see my home address'
      },
      {
        id: 4,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        country: 'usa',
        score: 4,
        address: 'user4. here we can see my home address'
      },
      {
        id: 5,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        country: 'russia',
        score: 42,
        address: 'user5. here we can see my home address'
      },
    ]
  )

  const countryFilter = ref()
  const scoreFilter = ref()

  const filteredUsers = computed(() => {

    let filteredUsers = users.value

    if(scoreFilter.value === '> 20') {
      filteredUsers = filteredUsers.filter(el => el.score > 20)
    } 
    if(scoreFilter.value === '< 10') {
      filteredUsers = filteredUsers.filter(el => el.score < 10)
    }
    if(countryFilter.value) {
      filteredUsers = filteredUsers.filter(el => el.country === countryFilter.value)
    }

    return filteredUsers 
  })

  return { filteredUsers, countryFilter, scoreFilter }
})
