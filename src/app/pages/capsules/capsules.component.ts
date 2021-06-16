import { Component, OnInit } from '@angular/core';
import { Capsule } from 'src/app/models/capsule.model';
import { CapsuleService } from 'src/app/services/capsule.service';

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
  
  constructor(private capsuleService: CapsuleService) { }

  ngOnInit(): void {
    this.getAllCapsules();
  }

  getAllCapsules(): any {
    this.capsuleService.getAllCapsules().subscribe((response: any) => {
      console.log(response);
    }, err => {
      console.log(err);
    })
  }
}
