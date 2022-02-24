import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {

  post = {
    account: 'codewithz',
    image: 'https://images.unsplash.com/photo-1606228281437-dc226988dc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMCUyMHglMjAxMDgwfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    likesCount: 123,
    isLiked: false
  }

  onPostLikeEvent() {
    this.post.likesCount += (this.post.isLiked) ? -1 : +1;
    this.post.isLiked = !this.post.isLiked;
  }

}
