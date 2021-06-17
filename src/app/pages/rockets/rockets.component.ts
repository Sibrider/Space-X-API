import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { Rocket } from 'src/app/models/rocket_complete.model';
import { RocketsService } from 'src/app/services/rockets/rockets.service';
import { faWikipediaW, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {

  pagination: Pagination = { cPage: 1, pPage: 10 };
  rockets: Array<Rocket> = [];
  faCalendar = faCalendar
  faYoutube = faYoutube
  faWikipedia = faWikipediaW
  faArticle = faNewspaper


  constructor(private rocketService: RocketsService) { }

  async ngOnInit() {
    await this.getAll();
    setInterval(async () => {
      await this.getAll();
    }, 5000);
  }

  async getAll() {
    const rockets = await this.rocketService.getAll(this.pagination).toPromise();

    this.rockets = rockets;
  }

}
