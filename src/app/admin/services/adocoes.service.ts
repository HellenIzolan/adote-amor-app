import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Adocao } from '../models/adocao.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdocoesService extends Firestore<Adocao> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        // /collection/document/collection/document
        this.setCollection(`/ongs/${user.uid}/adocoes`, ref => ref.orderBy('ativo', 'desc').orderBy('nome', 'asc'));
        return;
      }
      this.setCollection(null);
    });
  }
}
