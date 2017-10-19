import {Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../notifications/service/notifications-service'

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html'
})
export class NgbdModalBasic implements OnInit {

    closeResult: string;
    @Input() notificationId: any[];

    constructor(
        private modalService: NgbModal,
        private _router: Router,
        private _notificationService: NotificationService
    ) {}

    ngOnInit(){

    }

    open(content) {

        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this._notificationService.deleteNotification(this.notificationId)
            .subscribe(response => {
                this._notificationService.notificationAction.emit(this.notificationId)
            });
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
