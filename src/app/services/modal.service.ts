import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];
  private obsArray: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
  private array$: Observable<string[]> = this.obsArray.asObservable();
  get() {
    return this.obsArray;
  }

  add(modal: any) {
    this.modals.push(modal);
    this.array$.pipe(take(1)).subscribe((val) => {
      const newArr = [...val, modal.id];
      this.obsArray.next(newArr);
    });
  }

  remove(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
    this.array$.pipe(take(1)).subscribe((val) => {
      const arr = this.obsArray
        .getValue()
        .filter((loopedId) => loopedId !== id);
      this.obsArray.next(arr);
    });
  }

  open(id: string) {
    const modal = this.modals.find((element) => element.id === id);
    modal.open();
  }

  close(id: string) {
    const modal = this.modals.find((element) => element.id === id);
    modal.close();
  }
}
