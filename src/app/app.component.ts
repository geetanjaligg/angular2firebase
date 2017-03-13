import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgs: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.msgs = af.database.list('/chats');
  }
  sendMsg(name: HTMLInputElement, msg: HTMLInputElement) {
  	console.log("pring msg",msg,new Date().getTime())
    this.msgs.push({user:name.value,message:msg.value, date: new Date().getTime()});
    name.value = null;
    msg.value = null;
  }
  title = 'app msgs';
}
