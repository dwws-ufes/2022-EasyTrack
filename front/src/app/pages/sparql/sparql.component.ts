import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private fb: FormBuilder
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
    let str_sparql: any = {}

    str_sparql.subject = this.formSparql.controls['subject'].value
    str_sparql.predicate = this.formSparql.controls['predicate'].value
    str_sparql.object = this.formSparql.controls['object'].value
    str_sparql.literal = this.formSparql.controls['literal'].value
    str_sparql.named_graph_iri = this.formSparql.controls['named_graph_iri'].value

    this.formSparql.reset()
  }
}
