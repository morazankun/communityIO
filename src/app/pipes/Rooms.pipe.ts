import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'roomFilter'})
export class RoomFilterPipe implements PipeTransform{
    transform(rooms,search){
        let roomFilter = [];
        if (search == "" || search == null) {
            roomFilter = rooms;
        }else{
            rooms.filter(function(el,index){
                if(el.title.toLowerCase().indexOf(search.toLowerCase()) != -1){
                  roomFilter.push(el);
                }
            });
        }
        
        return roomFilter;
    }
}

@Pipe({name:'firstLetter'})
export class firstLetterPipe implements PipeTransform{
    transform(letter){
        return letter.substring(0,1);
    }
}