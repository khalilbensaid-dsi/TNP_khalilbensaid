import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Produit } from '../Produit';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  identifiant:number;
  titre:string;
  c: Produit;
  onModif()
  { 
    this.router.navigate(['/modif']); 
      }
      retourProduit(){
        this.router.navigate(['/produits']); 
      }  
  
  constructor(private activatedRoute:ActivatedRoute,private produitsService:ProduitsService, private router:Router) { }

  ngOnInit() {

    let id= Number(this.activatedRoute.snapshot.params['id']);
    this.c= this.produitsService.getProduitById(id);
  }
   

}