import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-number',
  templateUrl: './contact-number.component.html',
  styleUrls: ['./contact-number.component.css']
})
export class ContactNumberComponent implements OnInit {
  title= 'ALL BRANCHES CONTACT LIST';

  header = ["School name" , "District","Office number","Email id"];
  
  rows =[
    {
     "School name": "Avatar primary school , and Public school OOTY",
     "District": "Nilgiri",
     "Office number": "0432-876757",
     "Email id": "avatarschoolooty@gmail.com"

    },
    {
      "School name": "Avatar primary school , and Public school SELAM",
      "District": "selam",
      "Office number": "0432-876758",
      "Email id": "avatarschoolselam@gmail.com"
 
     },
     {
      "School name": "Avatar primary school , and Public school COIMBATORE",
      "District": "coimbatore",
      "Office number": "0432-876759",
      "Email id": "avatarschoolcoimbatore@gmail.com"
 
     }

  ]
  constructor() { }

  ngOnInit(): void {
  }
circle="assets/symbol.jpg";
}
