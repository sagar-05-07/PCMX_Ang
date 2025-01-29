import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-calculator',
  templateUrl: './partner-calculator.component.html',
  styleUrl: './partner-calculator.component.scss'
})
export class PartnerCalculatorComponent {


  principal: number = 0;   // The initial amount of money
  rate: number = 0;        // The interest rate (in percentage)
  time: string = 'monthly'; // Repayment frequency (monthly, weekly, etc.)
  terms: number = 0;       // Time period in years (if applicable for terms)

  calculatedInterest: number = 0;   // Interest earned or paid
  totalAmount: number = 0;         // Total amount after interest

  // Function to calculate interest
  calculateInterest(): void {
    // Formula for Simple Interest: Interest = (Principal * Rate * Time) / 100
    this.calculatedInterest = (this.principal * this.rate * this.terms) / 100;

    // Calculate Total Amount: Total = Principal + Interest
    this.totalAmount = this.principal + this.calculatedInterest;
  }

  // Reset the form values
  resetForm() {
    this.principal = 0;
    this.rate = 0;
    this.time = 'monthly';  // Reset time back to 'monthly'
    this.terms = 0;
    this.calculatedInterest = 0;
    this.totalAmount = 0;
  }
}

