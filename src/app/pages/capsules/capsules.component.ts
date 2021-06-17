import { Component, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsules.model';
import { CapsulesService } from '../../services/capsules/capsules.service';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {

  capsules: Capsule[] = [];
	
	selectedCapsule?: Capsule;
  

	
  onSelect(capsule: Capsule): void {
		this.selectedCapsule = capsule;
	}
  
  constructor(private capsuleService: CapsulesService) { }

  ngOnInit(): void {
    this.getAllCapsules();
    console.log(this.capsules)
  }

  getAllCapsules(): void {
    this.capsuleService.getAllCapsules().subscribe(capsules => this.capsules = capsules );				
  }

}
