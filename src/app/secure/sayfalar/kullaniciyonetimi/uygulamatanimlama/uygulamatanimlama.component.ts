import { Component, OnInit } from '@angular/core';
// import { Kullanici } from 'src/app/demo/api/kullanici';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
// import { KullaniciService } from 'src/app/demo/service/kullanici.service';

@Component({
    templateUrl: './uygulamatanimlama.component.html',
    providers: [MessageService]
})
export class UygulamaTanimlamaComponent implements OnInit {

    // kullaniciDialog: boolean = false;

    // deleteKullaniciDialog: boolean = false;

    // deleteKullanicisDialog: boolean = false;

    // kullanicis: Kullanici[] = [];

    // kullanici: Kullanici = {};

    // selectedKullanicis: Kullanici[] = [];

    // submitted: boolean = false;

    // cols: any[] = [];

    // statuses: any[] = [];

    // rowsPerPageOptions = [5, 10, 20];

    // constructor(private kullaniciService: KullaniciService, private messageService: MessageService) { }

    ngOnInit() {
    //     this.kullaniciService.getKullanicis().then(data => this.kullanicis = data);

    //     this.cols = [
    //         { field: 'kullanici', header: 'Kullanici' },
    //         { field: 'price', header: 'Price' },
    //         { field: 'category', header: 'Category' },
    //         { field: 'rating', header: 'Reviews' },
    //         { field: 'inventoryStatus', header: 'Status' }
    //     ];

    //     this.statuses = [
    //         { label: 'INSTOCK', value: 'instock' },
    //         { label: 'LOWSTOCK', value: 'lowstock' },
    //         { label: 'OUTOFSTOCK', value: 'outofstock' }
    //     ];
    }

    // openNew() {
    //     this.kullanici = {};
    //     this.submitted = false;
    //     this.kullaniciDialog = true;
    // }

    // deleteSelectedKullanicis() {
    //     this.deleteKullanicisDialog = true;
    // }

    // editKullanici(kullanici: Kullanici) {
    //     this.kullanici = { ...kullanici };
    //     this.kullaniciDialog = true;
    // }

    // deleteKullanici(kullanici: Kullanici) {
    //     this.deleteKullaniciDialog = true;
    //     this.kullanici = { ...kullanici };
    // }

    // confirmDeleteSelected() {
    //     this.deleteKullanicisDialog = false;
    //     this.kullanicis = this.kullanicis.filter(val => !this.selectedKullanicis.includes(val));
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Kullanicis Deleted', life: 3000 });
    //     this.selectedKullanicis = [];
    // }

    // confirmDelete() {
    //     this.deleteKullaniciDialog = false;
    //     this.kullanicis = this.kullanicis.filter(val => val.id !== this.kullanici.id);
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Kullanici Deleted', life: 3000 });
    //     this.kullanici = {};
    // }

    // hideDialog() {
    //     this.kullaniciDialog = false;
    //     this.submitted = false;
    // }

    // saveKullanici() {
    //     this.submitted = true;

    //     if (this.kullanici.name?.trim()) {
    //         if (this.kullanici.id) {
    //             // @ts-ignore
    //             this.kullanici.inventoryStatus = this.kullanici.inventoryStatus.value ? this.kullanici.inventoryStatus.value : this.kullanici.inventoryStatus;
    //             this.kullanicis[this.findIndexById(this.kullanici.id)] = this.kullanici;
    //             this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Kullanici Updated', life: 3000 });
    //         } else {
    //             this.kullanici.id = this.createId();
    //             this.kullanici.code = this.createId();
    //             this.kullanici.image = 'kullanici-placeholder.svg';
    //             // @ts-ignore
    //             this.kullanici.inventoryStatus = this.kullanici.inventoryStatus ? this.kullanici.inventoryStatus.value : 'INSTOCK';
    //             this.kullanicis.push(this.kullanici);
    //             this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Kullanici Created', life: 3000 });
    //         }

    //         this.kullanicis = [...this.kullanicis];
    //         this.kullaniciDialog = false;
    //         this.kullanici = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.kullanicis.length; i++) {
    //         if (this.kullanicis[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // }

    // createId(): string {
    //     let id = '';
    //     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let i = 0; i < 5; i++) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // }

    // onGlobalFilter(table: Table, event: Event) {
    //     table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    // }
}
