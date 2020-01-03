import { CrudComponent } from './components/crud/crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';

const routes: Routes = [
  {
    path: 'primary-component',
    component: DataBindingComponent
  },
  {
    path: 'second-component',
    component: SecondComponentComponent
  },
  {
    path: 'test-if-for',
    component: NgIfNgForComponent
  },
  {
    path: 'listphotos',
    component: CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
