import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, Http } from '@angular/http';


import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule } from '@angular/forms';
import { ChatRoomComponent } from './chat-room/chat-room.component';

//PIPES
import { RoomFilterPipe , firstLetterPipe} from "./pipes/Rooms.pipe";
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ChatRoomComponent,
    RoomFilterPipe,
    firstLetterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2SmartTableModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
