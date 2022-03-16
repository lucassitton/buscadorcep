import axios from "axios";

// 94040001/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;