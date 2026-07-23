import axios from"axios"; 
const api=axios.create({
        baseURL:"/api"
    })
export const fetchCurrency = async({queryKey}) =>{
    const [,amount,from,to]=queryKey;
    console.log(amount,from,to)
    const res= await api.get(`/latest?amount=${amount}&from=${from}&to=${to}`)
     console.log(res);
   return res.status === 200 ? res.data : []
  
}