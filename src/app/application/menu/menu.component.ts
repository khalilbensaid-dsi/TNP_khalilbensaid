import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../Produit';
import { ProduitsService } from '../produits.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  search:string;
  verif:boolean;

  onAfficher(form:NgForm)
{
console.log("Façon 1: "+ this.search);
for (let i=0;i<this.lesProduits.length;i++){
  console.log("Façon 1: "+ this.lesProduits[i]);
}

}

lesProduits :Produit[];
constructor(private produitsService:ProduitsService,private router:Router ) { }

ngOnInit() {

}


}
