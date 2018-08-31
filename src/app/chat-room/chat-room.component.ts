import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  public items:any;
  public settings;
  public data;
  constructor() {
      this.settings = {
        columns: {
          id: {
            title: 'ID',
            filter: false
          },
          name: {
            title: 'Full Name'
          },
          username: {
            title: 'User Name'
          },
          email: {
            title: 'Email'
          }
        }
      };

      this.data = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        },
        
        // ... list of items
        
        {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
        }
      ];
  }

  ngOnInit() {
  }

}
