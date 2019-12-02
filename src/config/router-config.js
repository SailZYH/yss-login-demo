import Todo from "../todo";
import Tomato from "../tomato";
import NotAccess from "../access/NotAccess";
import Login from "../page/login";

const router = {
        "/todo": {
          exact: true,
          component: Todo
        },
        "/tomato": {
          component: Tomato
        },
        "/404": {
          component: NotAccess,
          exact: true
        },
        "/login":{
          component:Login,
          exact:true
        }
}

export default router;