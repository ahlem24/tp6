import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../employe.service';
@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css']
})
export class SelectedEmployeComponent implements OnInit {
  identifiant:number;
  lesEmployes:any[];
  constructor(private employeService:EmployeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.lesEmployes=this.employeService.lesEmployes;
    this.identifiant = this.activatedRoute.snapshot.params['matricule'];
  }

}


 
  
