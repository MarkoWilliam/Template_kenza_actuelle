import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../service/auth/auth.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
