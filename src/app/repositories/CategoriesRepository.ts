import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../modules/category.module';

export class CategoriesRepository {
  constructor(private firestore: AngularFirestore) {}
  private collection = this.firestore.collection('categories');
  async getCategories() {
    return new Promise((resolve, reject) => {
      this.collection.snapshotChanges().subscribe((response) => {
        const data = response.map((element) => ({
          ...(element.payload.doc.data() as Category),
          id: element.payload.doc.id,
        }));
        resolve(data);
      });
    });
  }
  async addCategory(category: Category) {
    return await this.collection
      .add(category)
      .then((doc) => ({ ...category, id: doc.id }))
      .catch((error) => {
        console.log(error);
      });
  }
  async removeCategory(id: string) {
    return await this.collection
      .doc(id)
      .delete()
      .then((doc) => id)
      .catch((error) => {
        console.log(error);
      });
  }
}
