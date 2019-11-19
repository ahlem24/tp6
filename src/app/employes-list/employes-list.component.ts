import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
  lesEmployes:any[];
  
  constructor(private employeService:EmployeService,private router:Router) { }

  ngOnInit() {
    this.lesEmployes=this.employeService.lesEmployes;
    
  }
 
}
