import { Component, OnInit } from '@angular/core';
import { Capsule } from 'src/app/models/capsules.model';
import { CapsulesService } from 'src/app/services/capsules/capsules.service';

@Component({
  selector: 'app-capsule-past',
  templateUrl: './capsule-past.component.html',
  styleUrls: ['./capsule-past.component.scss']
})
export class CapsulePastComponent implements OnInit {

  pastCapsules: Capsule[] = [];

  constructor(private capsuleService: CapsulesService) { }

  ngOnInit(): void {
    this.getPastCapsules();
  }

  getPastCapsules(): void {
    this.capsuleService.getPastCapsules().subscribe(
      (response: any) => {
        this.pastCapsules = response.sort((a: { original_launch: string | number | Date; }, b: { original_launch: string | number | Date; }) => {
          return <any>new Date(b.original_launch) - <any>new Date(a.original_launch);
        });

      console.log(this.pastCapsules);
      },
      (error: any) => {
        console.log(error);
      });	
  }
}
