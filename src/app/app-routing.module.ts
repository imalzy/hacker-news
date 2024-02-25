import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'topic',
    pathMatch: 'full',
  },
  {
    path: 'topic',
    loadComponent: () =>
      import('./modules/topic-list/topic-list.component').then(
        (c) => c.TopicListComponent
      ),
  },
  // {
  //   path: 'topic/:id',
  //   loadComponent: () =>
  //     import('./modules/topic-detail/topic-detail.component').then(
  //       (c) => c.TopicDetailComponent
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
