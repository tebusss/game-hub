import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ba95cbbe6bed4c73a89c4f1b10ba2d33'
    }
})