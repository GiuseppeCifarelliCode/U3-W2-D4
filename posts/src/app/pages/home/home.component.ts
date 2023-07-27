import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts:Post[] = this.getPosts()
  constructor( private postSvc:PostService){}

  modalOpen = false

  getPosts():Post[]{
    this.postSvc.ngOnInit()
    return this.postSvc.getPosts()
  }

  openModal():void{
    this.modalOpen = true
  }

  closeModal():void{
    this.modalOpen = false
  }
}
