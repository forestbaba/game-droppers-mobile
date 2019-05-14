export const instance = axios.create({
    baseURL: 'http://10.0.3.2:7000/api',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer ' + token }
});

// instance.get('/path')
//     .then(response => {
//         return response.data;
//     })