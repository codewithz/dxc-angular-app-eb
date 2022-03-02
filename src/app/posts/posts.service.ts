import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      )
  }

  createPost(post: Post) {
    return this.http.post<Post>(this.url, JSON.stringify(post))
      .pipe(
        catchError(this.handleError)
      )
  }

  updatePost(post: Post) {

    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePost(id: number) {
    return this.http.delete(this.url + "/zartab/" + id)
      .pipe(
        catchError(this.handleError)
      )


  }

  handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError())
    }
    if (error.status === 400) {
      return throwError(new BadInput())
    }
    else {
      return throwError(new AppError(error))
    }
  }



}
