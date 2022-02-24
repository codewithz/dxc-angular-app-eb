import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {

  tweet = {
    body: 'Some Tweet about bitcoin',
    likes: 100,
    isLiked: true
  }

  onTweetLikeStatusChanged(status: boolean) {
    console.log("Tweet Like Status have been changed...", status);
  }

}
