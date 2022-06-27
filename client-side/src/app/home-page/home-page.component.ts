import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommandService } from '../command.service';
import { Command } from '../model/Command';
import { Consumer } from '../model/Consumer';
import { ProductService } from '../product.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  @Input() usernameOutput: string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  public itemTemp: string = 'itemOfGetAllProduct';
  itemOfGetAllProduct: string = "itemOfGetAllProduct";
  itemOfDemands: string = "itemOfDemands";
  itemOfMyDemand: string = "itemOfMyDemand";
  itemOfAdminPurchaseDemand: string = "itemOfAdminPurchaseDemand";
  consumer !: Consumer;
  navBarColor :string = "navBarColorSimpleUser" ;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(value);
    this.itemTemp = value;
  }



  constructor(private routerService: ActivatedRoute,private router : Router) { }

  logout () {
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }

  btnClick (path:string) {
     this.router.navigateByUrl('home/'+this.usernameOutput+'/'+path);
  }

  ngOnInit(): void {
    const logedUser = localStorage.getItem("consumer");
    if(logedUser) {
      this.consumer = JSON.parse(localStorage.getItem("consumer") || "");
      this.navBarColor = "navBarColorSimpleUser";
    }
    this.usernameOutput = this.routerService.snapshot.params['username'];
  }

}
