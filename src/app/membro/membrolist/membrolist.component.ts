import { RouterModule, Router } from '@angular/router';
import { Membro } from './../../model/membro.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-membrolist',
  templateUrl: './membrolist.component.html',
  styleUrls: ['./membrolist.component.css']
})
export class MembrolistComponent implements OnInit {


private membrosref$: FirebaseListObservable<Membro[]>
private membro: FirebaseObjectObservable<Membro> = null;
private dbPath: string = '/membros';

  constructor(private database: AngularFireDatabase, private route: Router) { 
    this.membrosref$ = this.database.list('membro')
  }

  
 
  ngOnInit() {
  }

}
