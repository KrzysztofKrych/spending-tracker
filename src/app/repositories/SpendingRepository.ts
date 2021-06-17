import { AngularFirestore } from '@angular/fire/firestore';
import { Spending } from '../modules/spending.module';

export class SpendingRepository {
  constructor(private firestore: AngularFirestore) {}
  async getSpending() {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('spending')
        .snapshotChanges()
        .subscribe((response) => {
          const data = response.map((element) => ({
            ...(element.payload.doc.data() as Spending),
            id: element.payload.doc.id,
          }));
          resolve(data);
        });
    });
  }
}
