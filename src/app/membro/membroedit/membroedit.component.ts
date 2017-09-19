import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Membro } from './../../model/membro.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';




@Component({
  selector: 'app-membroedit',
  templateUrl: './membroedit.component.html',
  styleUrls: ['./membroedit.component.css']
})
export class MembroeditComponent implements OnInit {
  MembroItemSubscription: Subscription;
  private membrosref$: FirebaseObjectObservable<Membro>
  private membro: FirebaseListObservable<Membro[]>
  private membroItem = {} as Membro

  constructor(private database: AngularFireDatabase,
    private route: ActivatedRoute,

  ) {
    const membroItemId = this.route.snapshot.paramMap.get('membroitemId');

    this.membrosref$ = this.database.object(`membro/${membroItemId}`);

    this.MembroItemSubscription = this.membrosref$.subscribe(membroItem => this.membroItem = membroItem)

    
  }

  ngOnInit() {
 

  }

}
