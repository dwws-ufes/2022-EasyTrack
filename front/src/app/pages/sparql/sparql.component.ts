import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SparqlData } from 'src/app/interfaces/sparql';
import { SparqlService } from 'src/app/service/sparql.service';

@Component({
  selector: 'app-sparql',
  templateUrl: './sparql.component.html',
  styleUrls: ['./sparql.component.css']
})
export class SparqlComponent implements OnInit {

  listaSparql$: any
  displayed: String[] = ["subject", "predicate", "object"]

  formSparql: FormGroup

  constructor(
    private fb: FormBuilder,
    private sparqlService: SparqlService
  ) { 
    this.formSparql = this.createForm(this.fb)
  }

  ngOnInit(): void {
  }

  createForm(fb: FormBuilder){
    return fb.group({
      subject: [''],
      predicate: [''],
      object: [''],
      literal: false,
      named_graph_iri: ['']
    })
  }

  changeLiteral(){
    this.formSparql.controls['literal'].setValue(!this.formSparql.controls['literal'].value)
  }

  busca_sparql(){
    let str_sparql: SparqlData = {
      subject: this.formSparql.controls['subject'].value,
      predicate: this.formSparql.controls['predicate'].value,
      object: this.formSparql.controls['object'].value,
      literal: this.formSparql.controls['literal'].value,
      iri: this.formSparql.controls['named_graph_iri'].value
    }

    this.formSparql.reset()
    this.sparqlService.sendQuery(str_sparql).subscribe(result => {
      this.listaSparql$ = result
    })
  }
}
