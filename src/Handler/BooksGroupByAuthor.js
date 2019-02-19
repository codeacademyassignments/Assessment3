import axios from 'axios';

export default () => axios.get('http://localhost:8080/allBooksWithRating');
