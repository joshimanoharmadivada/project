import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Payment } from '../models/payment.model';
import { PaymentService } from './payment.service';

@Component({
  templateUrl: './add-payment.component.html'
})
export class AddPaymentComponent {

  payment: Payment = new Payment();

  constructor(private router: Router, private paymentService: PaymentService) {

  }

  createPayment(): void {
    this.paymentService.createUser(this.payment)
        .subscribe( data => {
          alert("Payment record created successfully.");
        });

  };

}
