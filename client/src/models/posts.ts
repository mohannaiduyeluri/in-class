import { defineStore } from 'pinia'
import { api } from './myFetch';
import { list } from './user';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usePosts = defineStore('posts', {
  
    state: () => ({
        list: []  as Post[],    
        
    }),
    actions: {
        async fetchPosts() {
            const response = await fetch('/api/posts');
            const posts = await response.json();
            this.list = await api('posts');
        }
    }
})

export interface Post{  
    _id: string;
    src: string;
    caption: string;
    likes: number;
    comments: Comment[];
    owner: string;
    isPublic: boolean;

}
