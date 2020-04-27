import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Marketing } from '../models/marketing.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MarketingService extends Firestore<Marketing> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        // /collection/document/collection/document
        this.setCollection(`/ongs/${user.uid}/marketing`, ref => ref.orderBy('titulo', 'asc'));
        return;
      }
      this.setCollection(null);
    });
  }
}
