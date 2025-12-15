import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    /*
    {
    conteudo: 'Passo informações para o componente filho',
    autoria: 'componente pai',
    modelo: 'modelo3'
  },
    {
    conteudo: 'Minha propriedade é decorada com @Input()',
    autoria: 'Componente filho',
    modelo: 'modelo1'
  }
    */
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
