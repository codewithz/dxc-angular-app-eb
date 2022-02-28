import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: Post) {
    return this.http.post<Post>(this.url, JSON.stringify(post));
  }

  updatePost(post: Post) {

    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
  }

  deletePost(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}
