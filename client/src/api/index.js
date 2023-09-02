import axios from 'axios';

const url = 'http://localhost:5000/posts';
//const createUrl = 'http://localhost:5000/posts/create';


export const fetchPosts = () => axios.get(url); 
//export const createPost = (newPost) => axios.post(createUrl, newPost)
export const createPost = (newPost) => axios.post(url, newPost)
.then(response =>console.log("response",response));
