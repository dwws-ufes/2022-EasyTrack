import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { EtiquetasService } from 'src/app/service/etiquetas.service';

@Component({
  selector: 'app-adicionar-etiqueta',
  templateUrl: './adicionar-etiqueta.component.html',
  styleUrls: ['./adicionar-etiqueta.component.css']
})
export class AdicionarEtiquetaComponent implements OnInit {

  etiquetas$?: Observable<Etiqueta[]>
  etiquetaSelecionada?: Etiqueta
  formAdionarEtiqueta: FormGroup

  constructor(
    private fb: FormBuilder,
    private etiquetasService: EtiquetasService
  ) { 
    this.formAdionarEtiqueta =  fb.group({etiqueta: []})
  }

  ngOnInit(): void {
    //this.etiquetas = new EtiquetasService().getAllTags()
    this.etiquetas$ = this.etiquetasService.getTodos()
  }
}
