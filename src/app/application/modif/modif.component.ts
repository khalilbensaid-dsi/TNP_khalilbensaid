import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import {Router} from '@angular/router';
import { Produit } from '../Produit';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {
  idOr:number;
  title:string;
  desc:string;
  img:string;
  id:number;
  prix:number;
  ep:boolean;
  date:Date;
  message:string;
  prod:boolean=false;


  lesProduits :Produit[];
  constructor(private produitsService:ProduitsService,private router:Router) { }
  
 

retourProduit(){
      this.router.navigate(['/produits']); 
    }    

editerProduit()
    {
  if(this.produitsService.getProduitById(this.idOr)!=null)  
  {  
      this.produitsService.editerProd(this.idOr,this.title,this.desc,this.img,this.id,this.prix,this.ep,this.date);
      this.router.navigate(['/produits']);
  }
  else
    {
    this.message="ID don't exist";
    this.prod=true;
    }
  }

  ngOnInit() {
  }

}
