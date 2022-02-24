import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {

  @Input('image') image: string = 'http://shorturl.at/orJNZ';


  post = {
    account: 'codewithz',
    image: this.image,
    likesCount: 123,
    isLiked: false
  }

  onPostLikeEvent() {
    console.log(this.image)
    this.post.likesCount += (this.post.isLiked) ? -1 : +1;
    this.post.isLiked = !this.post.isLiked;
  }

}
