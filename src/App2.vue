
<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

 
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
  <input type="text" id="newTask" name = 'newTask' v-model="newTask"/>
  <button type="submit">Submit</button>
  </form>
  

 <h3>Tasks:</h3>
 <ul>
  <li v-for="(task, index) in tasks":key="task"> <span>
    {{ task }}
  </span>
  <button @click="deleteTask(index)">x</ button>
    </li>
 </ul>

 <!-- <a v-bind:href="link">Click for Facebook</a> -->
 <!-- <a :href="link">Click for Facebook</a> -->
<br>
 <button @click="toggleStatus">Change Status</button>   
</template>

<script setup>
 import { onMounted, ref  } from 'vue';

    const name = ref ('Pere Edi');
    const status =ref ('active');
    const tasks = ref(['Task one', 'Task two', 'Task Three']);
    const newTask = ref('');
 
    const toggleStatus = () => {

      if(status.value === 'active') {
      status.value = 'pending'
    } else if(status.value === 'pending') {
      status.value = 'inactive'
    } else {
      status.value = 'active'  
    }

    };

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
         newTask.value = '';
      }
    };

    const deleteTask = (index) => {
      tasks.value.splice( index,1); 
    }

    onMounted (async () => {
      try {
         const res = await fetch('https://jsonplaceholder.typicode.com/todos');
         const data = await res.json();
         tasks.value = data.map((task) => task.title)
      } catch (error) {
        console.log('Error fetching tasks ')
      }
    });
</script>

