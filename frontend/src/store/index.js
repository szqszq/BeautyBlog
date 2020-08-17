import vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
vue.use(Vuex);
export default new Vuex.Store({
    states:{

    },
    mutations:{

    },
    actions:{
        getClass(){
            return axios.get('http://localhost:3000/getclass')
        },
        addClass(store,params){
            return axios.post('http://localhost:3000/addclass',{classfiy:params.classfiy,per:params.per});
        },
        modClass(store,params){
            console.log(params)
            return axios.post('http://localhost:3000/modclass',{classfiy:params.classfiy,per:params.per,id:params.id});
        },
        delClass(store,params){
            return axios.get('http://localhost:3000/delclass?id='+params._id);
        }
    },
    getters:{

    }
})