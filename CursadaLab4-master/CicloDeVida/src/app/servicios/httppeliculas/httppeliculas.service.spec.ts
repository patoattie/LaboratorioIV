import { TestBed } from '@angular/core/testing';

import { HttppeliculasService } from './httppeliculas.service';

describe('HttppeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttppeliculasService = TestBed.get(HttppeliculasService);
    expect(service).toBeTruthy();
  });
});
