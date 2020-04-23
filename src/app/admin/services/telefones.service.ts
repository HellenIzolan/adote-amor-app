import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Telefone } from '../models/telefone.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TelefonesService extends Firestore<Telefone> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        // /collection/document/collection/document
        this.setCollection(`/ongs/${user.uid}/telefones`, ref => ref.orderBy('titulo', 'desc'));
        return;
      }
      this.setCollection(null);
    });
  }
}
