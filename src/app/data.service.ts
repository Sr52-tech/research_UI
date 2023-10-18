import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
}

export interface Review {
  id: number;
  comment: string;
  rating: number;
  placeId: number;
  userId: number;
}

export interface Place {
  id: number;
  name: string;
  location: string;
  typeId: number;
  stationId: number;
}

export interface Station {
  id: number;
  name: string;
  location: string;
}

export interface Type {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  // API Calls
  getPlaces() {

  }
  getPlace(id: number) {}

  getStations() {}
  getStation(id: number) {}

  getTypes() {}

  getReviews() {}
  getReview(id: number) {}


}
