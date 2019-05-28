import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pessoa } from 'src/model/pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  constructor(public api: ApiService, public router: Router) { }

  dataSource: Pessoa[];

  ngOnInit() {
  	this.api.getPessoas()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      
    }, err => {
      console.log(err);
    });
  }

  deletePessoa(id) {
    this.api.deletePessoa(id)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  getPessoa(cpf) {
    this.api.getPessoa(cpf)
      .subscribe(data => {
        this.pessoa = data;
        console.log(this.pessoa);
        this.router.navigate(['/pessoa-view']);
      });
  }

}
