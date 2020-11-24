import { Component,Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GlobaleService } from '../service/globale.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  produitId: any;

  constructor(private route: ActivatedRoute, 
    private globalServ: GlobaleService,
    private toastr: ToastrService,
    // Récuperer les données envoyées depuis produit component
    @Inject(MAT_DIALOG_DATA) public data: {element}) { 
      console.log('Donner modal', data);
  }

  ngOnInit() {
  // recuperer id seulement
    // this.produitId = this.route.snapshot.paramMap.get('id');
  }

  Updatemodif(produitId) {
  this.globalServ.UpdatProduit(produitId,this.data).subscribe(results=> {
    if(results) {
      this.toastr.success('Donner bien modifier', 'Success')
    } else {
      this.toastr.warning('Il y a une ereeur', 'Erreur')
    }
  }, (error) => {
    if(error.status === 501) {
      console.log("Erreur", error.status)
      this.toastr.warning('Il y a une champ vide', 'Erreur')
    }else {
      console.log("Erreur Trouver")
    }

  })
}

}
