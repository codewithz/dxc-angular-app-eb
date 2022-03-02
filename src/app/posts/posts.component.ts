import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';

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
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            alert('Bad Request detected');
          }
          else throw error;
          console.log(error);
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
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('Post is already deleted');
          }
          else throw error;
          console.log(error);
        }
      )

  }

}
