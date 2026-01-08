import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExluirPensamentoComponent } from './excluir-pensamento.component';

describe('ExluirPensamentoComponent', () => {
  let component: ExluirPensamentoComponent;
  let fixture: ComponentFixture<ExluirPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExluirPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExluirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
