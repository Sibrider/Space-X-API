import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { RocketsService } from 'src/app/services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {

  pagination: Pagination = { cPage: 1, pPage: 10 };
  constructor(private rocketService: RocketsService) { }

  ngOnInit(): void {
    requestAnimationFrame(this.getAll.bind(this))
  }

  async getAll() {
    const rockets = await this.rocketService.getAll(this.pagination).toPromise();
 
    console.log(rockets);
  }

}
