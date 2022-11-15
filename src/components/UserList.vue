<template>
   <div class="block__users">
      <ul class="users" v-bind:value="user.name" v-for="user of this.$store.state.users" :key="user.id">
         <div class="item__search">
            <li>{{ user.name }}</li>
            <button class="btn" @click="getKey(user.id), isOpen = !isOpen">{{ btnText }}</button>
         </div>
         <div v-if="isOpen">
            <li  class="info-block" v-if="getId == user.id">
               {{ user.username }}<br>
               {{ user.website }}<br>
               {{ user.phone }}
            </li>
         </div>
      </ul>
   </div>
</template>
 
<script>
import axios from "axios"
export default {
   data() {
      return {
         isOpen: false,
         getId: 0,
      }
   },
   computed: {
      btnText: function (index) {
         if (this.isOpen) {
            return '-'
         }
         return '+'
      }
   },
   mounted() {
      this.getUsers()
   },
   methods: {
      getKey(index) {
         this.getId = index;
      },
      async getUsers() {
         const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
         );
         this.$store.state.users = response.data;
      },
   }
}
</script>
 
<style>
ul {
   list-style: none;
}

.users {
   width: 250px;
}

.item__search {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.btn {
   width: 20px;
   height: 20px;
   border-radius: 10px;
   border: 1px solid black;
}

.block__users {
   width: 300px;
   margin: 30px auto;
}
.info-block{
   width: 200px;
   padding: 5px 15px;
   background:wheat;
   border-radius: 10px; 
}
</style>
 