import { Component, OnInit } from '@angular/core';
import { faWikipediaW, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Launches } from 'src/app/models/launches.model';
import { LaunchesService } from 'src/app/services/launches/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {

  launches: Launches[] = [];
  faCalendar = faCalendar
  faYoutube = faYoutube
  faWikipedia = faWikipediaW
  faArticle = faNewspaper

  constructor(
    private launchesService: LaunchesService
  ) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches() {
    this.launchesService.getAll()
      .subscribe(
        (response: any) => {
          this.launches = response;
          console.log(this.launches);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
