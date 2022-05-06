import axios, { Axios } from "axios";
export const getAllPizzas=()=>async dispatch=>{
    dispatch({type:'GET_PIZZAS_REQUEST'});
    try{ 
        const response= await axios.get('/api/pizzas/getallpizzas')
        // console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCESS',payload: response.data});
    }catch(error){
        dispatch({type:'GET_PIZZAS_FAILED',payload: error});

    }
}
export const filterPizzas=(searchkey, category)=>async dispatch=>{
    var filteredPizzas;
    dispatch({type:'GET_PIZZAS_REQUEST'});
    try{ 
        const response= await axios.get('/api/pizzas/getallpizzas')
        filteredPizzas=response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey));
        if(category!=="all"){
            filteredPizzas=response.data.filter(pizza=>pizza.category.toLowerCase() == category);
        }
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:filteredPizzas});
    }catch(error){
        dispatch({type:'GET_PIZZAS_FAILED',payload: error});

    }
}
export const addPizza=(pizza)=>async dispatch=>{
    try{
        dispatch({type:'ADD_PIZZA_REQUEST'})
        const response = await axios.post('/api/pizzas/addpizza', pizza)
        
        console.log(response);
        dispatch({type:'ADD_PIZZA_SUCCESS'})
    }catch(error){
        console.log(error);
        dispatch({type:'ADD_PIZZA_FAILED'})
    }
}
export const getPizzaById=(pizzaid)=>async dispatch=>{
    dispatch({type:'GET_PIZZA_BY_ID_REQUEST'});
    try{ 
        const response= await axios.post('/api/pizzas/getpizzabyid',{pizzaid})
        // console.log(response);
        dispatch({type:'GET_PIZZA_BY_ID_SUCCESS',payload: response.data});
    }catch(error){
        dispatch({type:'GET_PIZZA_BY_ID_FAILED',payload: error});

    }
}
export const updatePizza=(updatedpizza)=>async dispatch=>{
    try{
        dispatch({type:'UPDATE_PIZZA_REQUEST'})
        const response = await axios.post('/api/pizzas/updatepizza', {updatedpizza})
        
        console.log(response);
        dispatch({type:'UPDATE_PIZZA_SUCCESS'})
        window.location.href='/admin/pizzaslist'
    }catch(error){
        console.log(error);
        dispatch({type:'UPDATE_PIZZA_FAILED'})
    }
}
export const deletePizza=(pizzaid)=>async dispatch=>{
    try{
        const response = await axios.post('/api/pizzas/deletepizza', {pizzaid})
        alert("Pizza deleted successfully")
        window.location.reload();
    }catch(error){
        console.log(error);
        alert("Something went wrong")
    }
}