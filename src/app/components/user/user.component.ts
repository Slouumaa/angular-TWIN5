import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
title:string="Hello 4 Twin 5";
nom!:string;//c à d le nom est null 
person={
  id:1,
  name:"Slouma",
  age:21
}
quantite=10;
img="assets/mm.jpg";
height=25;
width=25;
color="blue";

acheter(){
  this.quantite--;
}
  onInputChange(event:Event){
    const cl= event.target as HTMLInputElement
    this.color=cl.value
  }
}
