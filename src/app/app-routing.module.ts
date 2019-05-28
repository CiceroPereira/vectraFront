import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';
import { PessoaNewComponent } from './pessoa-new/pessoa-new.component';

const routes: Routes = [

	{
		path: 'pessoas',
		component: PessoasComponent
	},

	{
		path: 'pessoa-view/:cpf',
		component: PessoaViewComponent
	},

	{
		path: 'pessoa-new',
		component: PessoaNewComponent
	},

	{ path: '',
   		 redirectTo: '/pessoas',
    	pathMatch: 'full'
  	}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
