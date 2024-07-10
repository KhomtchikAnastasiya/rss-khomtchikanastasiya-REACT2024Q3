export enum MainSortField {
    Quantity = 'QUANTITY',
    CreatedAt = 'CREATED_AT',
    ExpirationDate = 'EXPIRATION_DATE',
    Size = 'SIZE',
    BidQuantity = 'BID_QUANTITY',
}

export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Array<string>;
    species: Array<string>;
    vehicles: Array<string>;
    starships: Array<string>;
    created: string;
    edited: string;
    url: string;
}

export interface ResposeData {
    count: number;
    next: string;
    previous: null | string;
    results: Array<Person>;
}
