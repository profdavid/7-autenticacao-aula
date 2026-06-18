import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploArmazenamento } from './exemplo-armazenamento';

describe('ExemploArmazenamento', () => {
  let component: ExemploArmazenamento;
  let fixture: ComponentFixture<ExemploArmazenamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploArmazenamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploArmazenamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
