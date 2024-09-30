import { Component } from '@angular/core';
import { Category } from 'src/app/models/categorie';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories : Category[]=[
    {"id":1,"title":"Grand électroménager", "image":"assets/images/7-single-default.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic", "available":true},
    {"id":2,"title":"Petit électroménager", "image":"assets/images/gros-electromenager.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic", "available":true},
    {"id":3,"title":"Produits informatiques", "image":"assets/images/VENTE-INFO.jpg" , "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic", "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/mobile_phone.jpg" , "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic", "available":false},
    {"id":5,"title":"TV, images et son", "image":"assets/images/LB870V-ZA_large_00.jpg" , "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic", "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/meilleur-shampoing-voiture-detailing.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic","available":false},
  ]
  getDescription(description:string){
    alert (description);
  }
  titre : string = "";
}
