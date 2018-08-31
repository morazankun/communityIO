import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { $$ } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from "../services/room.service";

declare var $;
declare var anime;
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers:[RoomService]
})
export class RoomsComponent implements OnInit {
  public rooms:any;
  public _txtSearchRoom:string;
  public roomModal:any;
  public options;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _roomService:RoomService
  ) {
    this.rooms = [
      { title: 'Ciencias', background: 'linear-gradient(to bottom right,#fe8c00, #f83600)', image: 'img2.jpg', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aperiam facere, vel expedita voluptatibus aspernatur sequi amet natus officia consequuntur nobis, quod odit consequatur sit!',users:[{userName:"Orlando",background:"orange"},{userName:"Morazan",background:"pink"}]},
      { title: 'Arte', background: 'linear-gradient(to bottom right,#d3cce3, #e9e4f0)', image: 'img11.png', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore rerum fugit nisi.  hello world', users:[{userName:"Orlando Morazankun",background:"red"},{userName:"Morazan",background:"skyblue"},{userName:"Fernando",background:"gray"},{userName:"Josue",background:"green"},{userName:"Mario",background:"purple"},{userName:"Arriola",background:"#f2c3b3"}]},
      { title: 'Cultura', background: 'linear-gradient(to bottom right,#485563, #0072ff)', image: 'img10.png', description: 'Lorem ipsum dolor sit.', users:[]},
      { title: 'Economia', background: 'linear-gradient(to bottom right,#00c6ff, #485563)', image: 'img4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error molestias laudantium recusandae!', users:[] },
      { title: 'Hobbies', background: 'linear-gradient(to bottom right,#00c6ff, #0072ff)', image: 'img10.png', description: 'Lorem ipsum dolor sit amet consectetur.', users:[] },
      { title: 'Electronica', background: 'linear-gradient(to bottom right,#485563, #29323c)', image: 'img6.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat assumenda voluptas nesciunt quas. zqq', users:[] }
    ];
   }

  ngOnInit() {   
    window.scrollTo(0, 0);
  
    function explode() {
      $('.header').addClass('header-stay');
      setTimeout(function () {
        $('#container-rooms').css('opacity', '1');
        $('body').css('overflow-y', 'auto');
      }, 800);
    }
    setTimeout(explode, 1500);
  }

  ngAfterViewInit() {
    $('.room').click(function(){
      let roomClick = $(this);
      roomClick.addClass('animated bounce');
      setTimeout(function () {
        roomClick.toggleClass('animated bounce');
      }, 1000);
    });

    $("#loginRoom").on("show", function () {
      $("body").addClass("modal-open");
    }).on("hidden", function () {
      $("body").removeClass("modal-open");
    });

    this.roomModal = null;
    console.log(this._roomService.loadRoom());
 }

  openRoom(room){
    this.roomModal = room;
    $("#loginRoom").modal('show');
    var cssProperties = anime({
      targets: '#cssProperties .modal-body',
      opacity: .5,
      borderRadius: ['0em', '2em'],
      easing: 'easeInOutQuad'
    });
  }

  login(){
    $("#loginRoom").modal('hide');
    this._router.navigate(['/chatRoom']);
  }

  buscar(){
    let rooms = $('.room');
    // console.log();
    // if (this._txtSearchRoom != "") {
    //   rooms.addClass('animated fadeIn');
    //     setTimeout(function () {
    //       rooms.toggleClass('animated fadeIn');
    //     }, 1000);
    // }
  }
  

}
