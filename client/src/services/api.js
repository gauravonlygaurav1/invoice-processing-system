import axios from 'axios';  

const API_URL = "http://localhost:8080";

export const saveInvoice = async (payload) => {
    try{
        const response = await axios.post(`${API_URL}/invoice`, payload); 
        return response.data;
    } catch (error){
        console.log("Error: ",error.response && error.response.data ? error.response.data : error.message);
        return error.response.data;
    }
}

export const getAllInvoice = async () => {
    try{
        const response = await axios.get(`${API_URL}/invoice`);
        return response.data;
    }
    catch (error){
        console.log("Error: ", error.message);
        return error.response.data;
    }
}

export const deleteInvoice = async (id) => {
    try{
        return await axios.delete(`${API_URL}/invoice/${id}`); 
    } catch (error){
        console.log("Error: ",error.response);
        return error.response.data;
    }
}

