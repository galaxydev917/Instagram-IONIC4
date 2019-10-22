import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'add-friends', loadChildren: './add-friends/add-friends.module#AddFriendsPageModule' },
  { path: 'add-friends', loadChildren: './social-pages/add-friends/add-friends.module#AddFriendsPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'forgot', loadChildren: './auth/forgot/forgot.module#ForgotPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'detailpost', loadChildren: './detailpost/detailpost.module#DetailpostPageModule' },
  { path: 'currentuser', loadChildren: './currentuser/currentuser.module#CurrentuserPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
