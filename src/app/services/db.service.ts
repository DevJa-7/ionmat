import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Data } from '../data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  createDb() {
    const data: Data[] = [
      { id: 1, name: 'Mumbai', key: 'mumbai' },
      { id: 2, name: 'Tokyo', key: 'tokyo' },
      { id: 3, name: 'Beijing', key: 'beijing'},
      { id: 4, name: 'Canberra', key: 'canberra'},
      { id: 5, name: 'Jakarta', key: 'jakarta' },
      { id: 6, name: 'Manila', key: 'manila' },
      { id: 7, name: 'New Delhi', key: 'newdelhi' },
      { id: 8, name: 'Shanghai', key: 'shanghai' },
      { id: 9, name: 'Yangon', key: 'yangon' },
      { id: 10, name: 'Colombo', key: 'colombo' },
      { id: 11, name: 'Chennai', key: 'chennai' },
      { id: 12, name: 'Bangkok', key: 'bangkok' },
      { id: 13, name: 'Ho Chi Minh City', key: 'hochiminhcity' },
      { id: 14, name: 'Taipei', key: 'taipei' },
      { id: 15, name: 'Port Moresby', key: 'portmoresby' }


    ];
    return {data};
  }
}
