import { AngularFirestore } from '@angular/fire/firestore';

export class SpendingRepository {
    constructor(private firestore: AngularFirestore) {}
    async getSpending(){
        return new Promise((resolve, reject) => {
            this.firestore.collection("spending").valueChanges().subscribe(response =>{
                console.log(response)
                resolve(response)
            })
        }) 
        
    }
}