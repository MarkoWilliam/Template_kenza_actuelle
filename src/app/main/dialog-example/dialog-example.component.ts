import { Component,Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  produitId: any;
  constructor(private route: ActivatedRoute, 
    @Inject(MAT_DIALOG_DATA) public data: {element}) { 
      console.log('Donner modal', data);
  }

  ngOnInit() {
  // recuperer id seulement
    // this.produitId = this.route.snapshot.paramMap.get('id');
    // console.log('Id produit',  this.produitId)
  }

}
