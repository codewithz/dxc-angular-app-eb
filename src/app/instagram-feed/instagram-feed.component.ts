import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit {

  images = [
    'https://picsum.photos/300/200',
    'http://shorturl.at/orJNZ',
    'https://picsum.photos/300/200'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
