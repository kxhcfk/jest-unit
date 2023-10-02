const axios = require('axios');

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        return response.data.map(item => String(item.id));
    } catch (e) {}
}

module.exports = getData;