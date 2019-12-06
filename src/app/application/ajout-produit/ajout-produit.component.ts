import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  img:string;
  title:string;
  desc:string;
  prix:number;
  Ide:number;
  ep:boolean;
  date:Date;
  
  message:string;

  /*onAfficher(form:NgForm)
  {
  console.log("Façon 1: "+ this.chaine);
  console.log("Façon 2: "+ form.value['ch']);
  }
  onSubmit(){
    console.log("le libelle est : "+ this.lib);
    console.log("le ide est : "+ this.Ide);
  }*/

  onSubmit(f:NgForm){
    
    this.service.addProduit(this.title,this.desc,this.img,this.Ide,this.prix,this.ep,this.date);
}
  
  constructor(private service:ProduitsService) { }


  ngOnInit() {
  }

}




