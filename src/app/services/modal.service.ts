import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(element => element.id !== id);
    }

    open(id: string) {
        const modal = this.modals.find(element => element.id === id);
        modal.open();
    }

    close(id: string) {
        const modal = this.modals.find(element => element.id === id);
        modal.close();
    }
}