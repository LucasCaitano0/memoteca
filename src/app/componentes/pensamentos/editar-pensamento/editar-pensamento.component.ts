import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;
  pensamento!: Pensamento;
  
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private FormBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento

    this.formulario = this.FormBuilder.group({
      id: [id],
      conteudo: ['', [Validators.required, Validators.minLength(3), minusculoValidator]],
      autoria: ['', [Validators.required, Validators.minLength(2), minusculoValidator]],
      modelo: ['modelo1', [Validators.required]] 
    })
    })
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
     this.router.navigate(['/listarPensamento'])
  }

}
