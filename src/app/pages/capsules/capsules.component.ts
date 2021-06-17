import { Component, Input, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsules.model';
import { CapsulesService } from '../../services/capsules/capsules.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {

  capsules: Capsule[] = [];

	selectedCapsule?: Capsule;
  
  public isCollapsed = false;


	
  onSelect(capsule: Capsule): void {
		this.selectedCapsule = capsule;
	}
  
  @Input() buttonText?: string;
  isActive = false;

  toggle() {
    this.isActive = !this.isActive;
  }

  public showUpcoming:boolean = false;
  public showPast:boolean = false;

  public buttonName:any = 'Upcoming Capsules';
  public buttonName2:any = 'Past Capsules';


  

  constructor(private capsuleService: CapsulesService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCapsules();
  }


   
 
  
  upcomingCapsules() {
    this.showUpcoming = !this.showUpcoming;
  }

  pastCapsules() {
    this.showPast = !this.showPast;
  }


  getAllCapsules(): void {
    this.capsuleService.getAllCapsules().subscribe(
      (response: any) => {
        this.capsules = response.sort((a: { original_launch: string | number | Date; }, b: { original_launch: string | number | Date; }) => {
          return <any>new Date(b.original_launch) - <any>new Date(a.original_launch);
        });
        console.log(this.capsules);
      },
      (error: any) => {
        console.log(error);
      });	
    console.log(this.capsules);

  }
}
