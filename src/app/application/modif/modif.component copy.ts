import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  constructor(private produitsService:ProduitsService,private router:Router) { }
 

    retourProduit(){
      this.router.navigate(['/produits']); 
    }    

  ngOnInit() {
  }

}
