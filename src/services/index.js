import axios from "axios";
const url = "http://api-upc.alboestudio.com/api/"

export default function(model){
  
  return {

    create(data){
      return axios({
        url: url + model + "/" ,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "JWT " + localStorage.getItem("token"),
        },
        data,
      });
    },
    read(id, params){
      return axios({
        url: url + model + (id ? "/" + id + "/" : "/"),
        method: "GET",
        params,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "JWT " + localStorage.getItem("token"),
        },
      })
    },
    edit(id, data){
      return axios({
        url: url + model + (id ? "/" + id + "/" : "/"),
        method: "PATCH",
        data,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "JWT " + localStorage.getItem("token"),
        },
      });
    },
    delete(id){
      return axios({
        url: url + model + (id ? "/" + id + "/" : "/"),
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "JWT " + localStorage.getItem("token"),
        },
      });
    },
  }

}
