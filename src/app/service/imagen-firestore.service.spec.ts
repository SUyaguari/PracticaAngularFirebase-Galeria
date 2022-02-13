import { TestBed } from '@angular/core/testing';

import { ImagenFirestoreService } from './imagen-firestore.service';

describe('ImagenFirestoreService', () => {
  let service: ImagenFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
