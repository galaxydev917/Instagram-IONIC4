import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'social',
        children: [
          {
            path: '',
            loadChildren: '../social/social.module#SocialPageModule'
          }
        ]
      },
      {
        path: 'work',
        children: [
          {
            path: '',
            loadChildren: '../work/work.module#WorkPageModule'
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: '../shop/shop.module#ShopPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/social',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/social',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
