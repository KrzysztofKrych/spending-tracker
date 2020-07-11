import { AngularFirestore } from '@angular/fire/firestore';
import { Category} from '../modules/category.module';

export class CategoriesRepository {
    constructor(private firestore: AngularFirestore) {}
    async getCategories(){
        return new Promise((resolve, reject) => {
            this.firestore.collection("categories").snapshotChanges().subscribe(response =>{
                const data = response.map(element => 
                    ({...element.payload.doc.data() as Category, id: element.payload.doc.id }));
                resolve(data);
            })
        }) 
        
    }
}