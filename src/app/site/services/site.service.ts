import { Injectable, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from '../../core/classes/firestore.class';
import { Telefone } from '../../admin/models/telefone.model';
import { AuthService } from '../../core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SiteService extends Firestore<Telefone> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        // /collection/document/collection/document
        this.setCollection(`/ongs/${user.uid}/telefones`);
        return;
      }
      this.setCollection(null);
    });
  }
}