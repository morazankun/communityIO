import { Injectable } from '@angular/core';

@Injectable()
export class RoomService{
    public roomName = "rueba";
    loadRoom(){
        return this.roomName;
    }
}