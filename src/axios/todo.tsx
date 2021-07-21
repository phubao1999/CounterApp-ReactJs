import axios from "axios";

export default async function Todo() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: 1,
            _limit: 10
        }
    });

    return response.data.results;
};