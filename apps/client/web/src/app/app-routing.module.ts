import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'create', loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule) },
    { path: 'join', loadChildren: () => import('./pages/join/join.module').then(m => m.JoinModule) },
    { path: 'room', loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule) },
    { path: 'vote', loadChildren: () => import('./pages/vote/vote.module').then(m => m.VoteModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
