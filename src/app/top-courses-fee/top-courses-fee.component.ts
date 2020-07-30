import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-courses-fee',
  templateUrl: './top-courses-fee.component.html',
  styleUrls: ['./top-courses-fee.component.css']
})
export class TopCoursesFeeComponent implements OnInit {
 
title= 'SUBJECTS AND FEE';

header = ["class" , "subjects","Teachers","special classes", "fees"];

rows =[
  {
    "class": "Pre-Kg",
    "subjects": "Basic teaching ",
    "Teachers": "five teachers",
    "fees": "per month 2000"
  },
  {
    "class": "LKG-UKG",
    "subjects": "Tamil, English, Maths, Science, Social Science",
    "Teachers": "six teachers ",
    "special classes": "null",
    "fees": "per month 2500"
  },
  {
    "class": "1st-5th standard",
    "subjects": "Tamil, English, Maths, Science, Social Science",
    "Teachers": "five teachers",
    "special classes": "Null",
    "fees": "per month 3000"
  },
  {
    "class": "6th -9th standard",
    "subjects": "Tamil, English, Maths, Science, Social Science",
    "Teachers": "five teachers",
    "special classes": "Null",
    "fees": "per month 3500"
  },
  {
    "class": "10th standard",
    "subjects": "Tamil, English, Maths, Science, Social Science",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 4500"
  }
]
  
title2: 'higher school courses ';
headers = ["class" , "subjects","Teachers","special classes", "fees"];

rowss =[
  {
    "class": "11th standard ",
    "subjects": "Maths Biology ",
    "Teachers": "7 teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 3000"
  },
  {
    "class": "11th standard",
    "subjects": "Maths Computer",
    "Teachers": "six teachers ",
    "special classes": "Evening special class after 6",
    "fees": "per month 2500"
  },
  {
    "class": "11th standard",
    "subjects": "Computer Science ",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 3500"
  },
  {
    "class": "11th standard",
    "subjects": "Commerce",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 3000"
  },
  {
    "class": "11th standard",
    "subjects": "Angry",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 4500"
  },
  {
    "class": "seminar classes ",
    "subjects": "class including motivation, campus interviws",
    "Teachers": "we having special teachers from ooty ",
    "special classes": "Evening special class after 6",
    "fees": "free classes"
  },
  {
    "class": "12th standard ",
    "subjects": "Maths Biology ",
    "Teachers": "7 teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 3000"
  },
  {
    "class": "12th standard",
    "subjects": "Maths Computer",
    "Teachers": "six teachers ",
    "special classes": "Evening special class after 6",
    "fees": "per month 2500"
  },
  {
    "class": "12th standard",
    "subjects": "Computer Science ",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 3500"
  },
  {
    "class": "12th standard",
    "subjects": "Commerce",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 3000"
  },
  {
    "class": "12th standard",
    "subjects": "Angry",
    "Teachers": "five teachers",
    "special classes": "Evening special class after 6",
    "fees": "per month 4500"
  },
  {
    "class": "seminar classes ",
    "subjects": "class including motivation, campus interviws",
    "Teachers": "we having special teachers from ooty ",
    "special classes": "Null",
    "fees": "free classes"
  }
]
 
constructor() { }


ngOnInit(): void {
 
}


}
