import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];


  constructor(private service: PostsService) {



  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        (response) => {
          this.posts = response;
        }
      )
  }

  createPost(input: HTMLInputElement) {
    let newPost = { title: input.value, id: 0 };

    this.service.createPost(newPost)
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
    this.service.updatePost(post)
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }

  deletePost(post: Post) {
    let id = post.id ? post.id : 0;
    this.service.deletePost(id)
      .subscribe(
        (response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }
      )

  }

}
