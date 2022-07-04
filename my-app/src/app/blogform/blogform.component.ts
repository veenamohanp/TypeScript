import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {
 category=['Fullstack', 'Web Development', 'Database Administration','Backend Development']
  constructor() { }

  ngOnInit(): void {
  }

}
