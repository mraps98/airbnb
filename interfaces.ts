export interface ICity {
    img: string;
    location: string;
    distance: string;
}

export interface ILivingFeature {
    img: string;
    title: string;
}

export interface ILocationSearchResult {
    description: string;
    img: string;
    lat: number;
    long: number;
    location: string;
    price: string;
    star: number;
    title: string;
    total: string;
}

export interface IMapboxViewport {
    width: number | string;
    height: number | string;
    latitude: number;
    longitude: number;
    zoom: number;
}

export type TMapboxCenter = Pick<IMapboxViewport, 'latitude' | 'longitude'>;
