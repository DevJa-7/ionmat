import { Injectable } from '@angular/core';

import Unsplash from 'unsplash-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {

  // Change this to your access key for Unsplash
  private readonly accessKey = 'VbbiNBqWnzSAGEkeCzMimiVvYqYK3HL2_hy6Tjxmj4w';

  // Change this to your app name
  public readonly appName = 'image_uploader';

  private unsplash;

  private readonly imagesSubject = new BehaviorSubject<any[]>([]);

  public images$ = this.imagesSubject.asObservable();

  constructor() {
    this.unsplash = new Unsplash({ accessKey: this.accessKey });
  }

  fetchImages(keywords?: string) {

    this.imagesSubject.next([]);

    if (keywords) {
      this.unsplash.search.photos(keywords, 1, 40)
      .then(res => res.json())
      .then((images) => {
        this.imagesSubject.next(images.results);
      });
    } else {
      this.unsplash.photos.listPhotos(1, 40, 'latest')
      .then(res => res.json())
      .then((images) => {
        this.imagesSubject.next(images);
      });
    }
  }

  getAttributionLinkSuffix() {
    return '?utm_source=' + this.appName + '&utm_medium=referral';
  }

}
