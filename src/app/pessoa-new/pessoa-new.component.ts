import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Pessoa } from 'src/model/pessoa';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-pessoa-new',
  templateUrl: './pessoa-new.component.html',
  styleUrls: ['./pessoa-new.component.css']
})
export class PessoaNewComponent implements OnInit {

  constructor(public router: Router, public api: ApiService, public formBuilder: FormBuilder) { }

  pessoaForm: FormGroup;
  ngOnInit() {

  	this.pessoaForm = this.formBuilder.group({
    'nome' : [null, Validators.required],
    'cpf' : [null, Validators.required],
    'peso' : [null, Validators.required],
    'altura' : [null, Validators.required],
  });

  }

  addPessoa(form: NgForm) {
    this.api.addPessoa(form)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        });
  }

}
