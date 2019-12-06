import { Injectable } from '@angular/core';
import { Produit } from './Produit';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
//GET ID  
  getProduitById(id: number): Produit {
    var i:number;
    for(i=0;i<this.products.length;i++){
      if(id==this.products[i].id)
      return this.products[i];
    }
    return null ;
  }

 
  products =[
    new Produit('porte clé','loup','../assets/porte_cle2.jpg',10,20,true,new Date(2000,1,2)),
    new Produit('sapin','déco noel','../assets/sapin.JPG',40,32,true,new Date(2000,1,2)),
    new Produit('rotaract','décoration pour voiture','../assets/voiture.jpg',20,45,true,new Date(2000,1,2)),
    new Produit('pochette lunette ','résistante et pérsonalisée','../assets/pochette_lunette.jpg',45,20,true,new Date(2000,1,2)),
    new Produit('bracelet','forme de brise','../assets/bracelet_vie.jpg',20,32,true,new Date(2000,1,2)),
    new Produit('porte cle personnalisé','vous pouvez mettre limage que vous voulez','../assets/porte_clé1.jpg',10,45,true,new Date(2000,1,2)),
    new Produit('boule de noel','decoration noel','../assets/boule.jpg',30,45,true,new Date(2000,1,2)),
    new Produit('box pour deux','deux porte clé avec box personalisée','../assets/box_cle.jpg',30,45,true,new Date(2000,1,2)),
    new Produit('automne','des boucles tomber des arbres','../assets/boucle2.jpg',25,45,true,new Date(2000,1,2)),
    new Produit('les arcs ','chic et moderne pour vos soirées','../assets/boucle1.jpg',25,45,true,new Date(2000,1,2)),
    new Produit( 'personnalisé','cadre personnalisé','../assets/person.jpg',15,96,true,new Date(2000,1,2))
  ];
  title:string;
  desc:string;
  img:string;
  id:number;
  prix:number;
  ep:boolean;
  date:Date;



// ADD PRODUCT  
public addProduit(title:string,desc:string,img:string, id:number,prix:number,ep:boolean,date:Date):boolean {
  this.products.push(new Produit(title,desc,img,prix,id,ep,date));
  return true ;
}
//delete produit 
public suppProduit(id:number):Produit[]
{
  let i:number;
  for(i=0;i<this.products.length;i++){
    if (id==this.products[i].id)
    this.products.splice(i,1);
  }
  return this.products;
}

//edit produit
public editerProd(idOr:number,title:string,desc:string,img:string,id:number,prix:number,ep:boolean,date:Date){
let nvx:Produit=this.getProduitById(idOr);

  nvx.title=title;
  nvx.desc=desc;
  nvx.img=img;
  nvx.id=id; 
  nvx.prix=prix;
  nvx.ep=ep;
 
}



 constructor() { }

}
