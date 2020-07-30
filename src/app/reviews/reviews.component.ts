import { Component, OnInit } from '@angular/core';
import { StudentService }from '../shared/student.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title:String = "Add Product";
  constructor() { }

  ngOnInit(): void {
  }

}
