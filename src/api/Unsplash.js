import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4d882302ddfb2665f8587da98ee4f99a5ab9e79b7c791a2ce2c1411632cda30b'
    }
})