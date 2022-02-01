import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Conta } from '../models/conta.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ContasService extends Firestore<Conta> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.setCollection(`/ongs/${'txjDoxIkrQTCSnAxR8I1nMQTr7W2'}/contas`);
    return;
    /*this.authService.authState$.subscribe(user => {
      if (user) {
        // /collection/document/collection/document
        this.setCollection(`/ongs/${user.uid}/contas`, ref => ref.orderBy('titulo', 'desc'));
        return;
      }
      this.setCollection(null);
    });*/
  }
}
