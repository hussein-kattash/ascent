import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Range from "@/views/Range.vue";
import Form from "@/views/Form.vue";
import Result from '@/views/Result.vue';


// router
const router = createRouter({
    history:createWebHistory(),
    routes:[
      {path:"/", name:"Home", component:Home},
      {path:"/range", name:"Range", component:Range},
      {path:"/form", name:"Form", component:Form},
      {path:"/result", name:"Result", component:Result}
    ]
})

export default router;