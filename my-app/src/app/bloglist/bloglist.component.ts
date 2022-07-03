import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghug';
import { blog } from '../model/bloglist';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {
 blogs:Blog[]=blog
  constructor() { }

  ngOnInit(): void {
    this.blogs=blog
  }

}
