import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Dados } from '../models/dados.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosService{
  private dadosCollection: AngularFirestoreCollection<Dados>;
  private dados : Observable<Dados[]>;
  constructor(public db: AngularFirestore) {}
  
  getDados(slug){
    this.dadosCollection = this.db.collection<Dados>('ongs', ref => ref.where('url_site', '==', slug));
    this.dados = this.dadosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.dados;
  }

  //getDadosgList(slug): Observable<Dados[]> {
  getDadosList(slug: string){

    return this.db.collection('/ongs', ref => ref.where('url_site', '==', slug)).valueChanges();

    //return this.db.collection(`/ongs/${dados$.id}/telefones`).valueChanges();  

    //return this.db.collection<Dados>(`dados`).valueChanges();
    //return this.db.collection("dados", (ref) => ref.where("id", "==", slug)).valueChanges();
    //return this.db.collection('dados').doc<Dados>('R4EzybgV1U7DMF4In7RT').valueChanges();
    
    //return this.db.collection('/ongs', ref => ref.where('url_site', '==', slug)).valueChanges();

  }
  
  getAdocoesList(ongId: string){
    return this.db.collection(`/ongs/${ongId}/adocoes`).valueChanges();  
  }
  
  getContasList(ongId: string){
    return this.db.collection(`/ongs/${ongId}/contas`).valueChanges();  
  }
  
  getConteudosList(ongId: string){
    return this.db.collection(`/ongs/${ongId}/conteudos`).valueChanges();  
  }
  
  getMarketingList(ongId: string){
    return this.db.collection(`/ongs/${ongId}/marketing`).valueChanges();  
  }
  
  getTelefonesList(ongId: string){
    return this.db.collection(`/ongs/${ongId}/telefones`).valueChanges();  
  }   
}
