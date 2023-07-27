import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  posts:Post[] = this.getPosts()
    constructor(private postSvc:PostService){}

    getPosts():Post[]{
      this.postSvc.ngOnInit()
      return this.postSvc.getPosts()
    }
}
