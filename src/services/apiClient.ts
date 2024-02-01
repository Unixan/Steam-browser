import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api' ,
    params: {
        key: 'f2eb173391334fd1af2e2b008fed6e11'
    }
})