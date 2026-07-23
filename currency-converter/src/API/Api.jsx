import axios from"axios"; 
const api=axios.create({
         baseURL: "https://api.frankfurter.dev/v1"
    })
export const fetchCurrency = async({queryKey}) =>{
    const [,amount,from,to]=queryKey;
    console.log(amount,from,to)
    const res= await api.get(`/latest?amount=${amount}&from=${from.toUpperCase()}&to=${to.toUpperCase()}`)
     console.log(res);
   return  res.data ;
  
}