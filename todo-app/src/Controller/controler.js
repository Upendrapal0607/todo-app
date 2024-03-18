import axios from "axios";
const bashUrl = "https://dream-park-backend.onrender.com/"

// Gett All Todos
export const getTodos = async () => {
  return await axios.get(bashUrl + "todo/");
};

// Add new Todos
export const addTodos = async (params) => {

    try {
        if(params){
            return await axios.post(`${bashUrl}todo/add`,params);
        }
        else{
            return "please give a valid todos body"
        }
    } catch (error) {
        return error
    }

};

export const deleteTodos = async(id)=>{
 try {
    if(id){
        return await axios.delete(`${bashUrl}todo/delete/${id}`);
    }
 } catch (error) {
    return error
 }
    }

export const updateTodos = async(id,params)=>{
 try {
    if(id){
        return await axios.patch(`${bashUrl}todo/update/${id}`,params);
    }
 } catch (error) {
    return error
 }
    }

