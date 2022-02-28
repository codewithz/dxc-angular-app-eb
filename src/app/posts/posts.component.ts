import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {



  }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe(
        (response) => {
          this.posts = response;
        }
      )
  }

  createPost(input: HTMLInputElement) {
    let newPost = { title: input.value, id: 0 };

    this.http.post<Post>(this.url, JSON.stringify(newPost))
      .subscribe(
        (response) => {
          let id = response.id ? response.id : 0;
          newPost.id = id;
          this.posts.splice(0, 0, newPost);
          input.value = ''
        }
      )
  }

  updatePost(post: Post) {
    post.title = 'Updated: ' + post.title;
    this.http.put(this.url + '/' + post.id, JSON.stringify(post))
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }

  deletePost(post: Post) {
    let id = post.id ? post.id : 0;
    this.http.delete(this.url + "/" + id)
      .subscribe(
        (response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }
      )

  }

}
