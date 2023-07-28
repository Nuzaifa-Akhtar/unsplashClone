import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID uNnjvmbBC-kp5Oy_43kuMQYw0kedw_dxggYDvO7-WSY`,
    },

});

export default api;