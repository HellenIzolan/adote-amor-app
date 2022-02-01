import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Conteudo } from '../models/conteudo.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ConteudosService extends Firestore<Conteudo> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.setCollection(`/ongs/${'txjDoxIkrQTCSnAxR8I1nMQTr7W2'}/conteudos`);
    return;
    /*this.authService.authState$.subscribe(user => {
      if (user) {
        // /collection/document/collection/document
        this.setCollection(`/ongs/${user.uid}/conteudos`, ref => ref.orderBy('data', 'desc'));
        return;
      }
      this.setCollection(null);
    });*/
  }
}
