export interface Payload {
    option_1: string;
    option_2: string;
    composite_fairing: {height: {meters: number, feet: number}, diameter: {meters: number, feet: number}};
}

export interface Engines {
    number: number,
    type: string,
    version: string;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: { kN: number, lbg: number };
    thrust_vacuum: { kN: number, lbf: number};
}

export interface Rocket {
    id: number;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    country: string;
    company: string;
    first_flight: string;
    height: {meters: number, feet:number};
    diameter: {meters: number, feet: number};
    mass: {kg: number, lb: number};
    wikipedia: string;
    description: string;
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    payload_weights: Array<{id: string, name: string, kg: number, lb: number}>;
    first_stage: {reusable: boolean, engines: number, fuel_amount_tons: number, burn_time_sec: number, thrust_sea_level: {kN: number, lbf: number}, thrust_vacuum: {kN: number, lbf: number}};
    second_stage: {engines: number, fuel_amount_tons: number, burn_time_sec: number, thrust: {kN: number, lbf: number}, payloads: Payload};
    engines: Engines;
    landing_legs: {number: number, material: string};
}
