import { Component, OnInit } from '@angular/core';
import { Capsule } from 'src/app/models/capsules.model';
import { CapsulesService } from 'src/app/services/capsules/capsules.service';

@Component({
  selector: 'app-capsule-upcoming',
  templateUrl: './capsule-upcoming.component.html',
  styleUrls: ['./capsule-upcoming.component.scss']
})
export class CapsuleUpcomingComponent implements OnInit {

  umpcomingCapsules: Capsule[] = [];

  constructor(private capsuleService: CapsulesService) { }

  ngOnInit(): void {
    this.getUpcomingCapsules();
  }


  getUpcomingCapsules(): void {
    this.capsuleService.getUpcomingCapsules().subscribe(
      (response: any) => {
        this.umpcomingCapsules = response.sort((a: { original_launch: string | number | Date; }, b: { original_launch: string | number | Date; }) => {
          return <any>new Date(b.original_launch) - <any>new Date(a.original_launch);
        });

      console.log(this.umpcomingCapsules);
      },
      (error: any) => {
        console.log(error);
      });	
  }
}
