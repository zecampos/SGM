import { Membro } from './../../model/membro.model';
import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class MembroserviceService {
private basePath: string ='/membro';
membros: FirebaseListObservable<Membro[]> = null;
membro: FirebaseObjectObservable<Membro> = null;
  constructor(private db: AngularFireDatabase) { }


getMembros(query={}):FirebaseListObservable<Membro[]>{
  this.membros = this.db.list(this.basePath,{
    query:query
  });
  return this.membros
}
getMembro(key: string): FirebaseObjectObservable<Membro>{
  const membroPath = `${this.basePath}/${key}`;
  this.membro = this.db.object(membroPath)
  return this.membro
}

editarMembro(key: string): void{
  this.membro.update(key)
  .catch(error => this.handleError(error))
}

private handleError(error) {
  console.log(error)
}

}
