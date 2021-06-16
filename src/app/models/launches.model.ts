import { LaunchSite } from "./launch-site.model";
import { Links } from "./links.model";
import { Rocket } from "./rocket.model";

export class Launches {
    constructor (
        public details: string,
        public flight_number: number,
        public launch_date_local: Date,
        public launch_date_utc: Date,        
        public launch_site: LaunchSite,
        public launch_success: boolean,
        public launch_year: number,
        public links: Links,
        public mission_name: string,
        public rocket: Rocket
    ){}
}

            