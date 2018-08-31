import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//Imports components
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { RoomsComponent } from './rooms/rooms.component';

const appRoutes: Routes = [
    {path:'',component: RoomsComponent},
    {path:'chatRoom',component: ChatRoomComponent},
    {path:'**',component: RoomsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);