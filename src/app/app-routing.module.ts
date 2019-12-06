import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ErrorComponent } from './application/error/error.component';
import { ProduitComponent } from './application/produit/produit.component';
import { AjoutProduitComponent } from './application/ajout-produit/ajout-produit.component';
import { LoginComponent } from './application/login/login.component';

import { ModifComponent } from './application/modif/modif.component';




const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},   
  {path:'produits', component:ProduitsComponent},
  
  
  {path:'modif', component:ModifComponent},
  {path:'Login', component:LoginComponent},
  {path:'AjoutProduit', component:AjoutProduitComponent},
  {path:'produits/:id', component:ProduitComponent},
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
