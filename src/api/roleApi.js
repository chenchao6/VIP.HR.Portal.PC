import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios; //使用axios触发请求
export  default{
	get(url,params){
		return new Promise((resolve, reject) => {
        	axios.get(url,{params:params}).then(response => {
         		resolve(response.data);
        	}).catch((error) => {
        		reject(error);
        	});
      	});
	},
	delete(url,params){
		return new Promise((resolve, reject) => {
        	axios.delete(url,{params:params}).then(response => {
         		resolve(response.data);
        	}).catch((error) => {
        		reject(error);
        	});
      	});

	},
	post(url,params){
		return new Promise((resolve, reject) => {
	        axios.post(url,params).then(response => {
	        	resolve(response.data);
	        }).catch((error) => {
	        	reject(error);
	        });
	    });
	},
	put(url,params){
		return new Promise((resolve, reject) => {
        	axios.put(url,params).then(response => {
         		resolve(response.data);
        	}).catch((error) => {
        		reject(error);
        	});
      	});

	},

    all(v){
       return new Promise((resolve, reject) => {
            axios.all(v).then(axios.spread(function (acct, perms) {
                let res=[];
                res.push(acct,perms)
                resolve(res);
            })).catch((error) => {
                reject(error);
            });
        });       

    },
}
