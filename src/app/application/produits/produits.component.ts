import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

id:number;
lawej:string;

  lesProduits :Produit[];
  constructor(private produitsService:ProduitsService) { }

  ngOnInit() {
    // initialisation du tableau les produits
    this.lesProduits = this.produitsService.products;}
delete(id:number)
    {
      this.lesProduits=this.produitsService.suppProduit(id);
  }
  getid(id:number){
    this.produitsService.getProduitById(id);
  }

}
