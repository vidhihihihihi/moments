import axios from 'axios';

//const url = 'http://localhost:5000/posts';
const url = 'https://moments-25dt.onrender.com/posts';
//const createUrl = 'http://localhost:5000/posts/create';


export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost)
.then(response =>console.log("response",response));
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);