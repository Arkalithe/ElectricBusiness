import { PaymentModele } from './payment.modele';

export class InvoiceModele {
  constructor(
    public id: number,
    public issueDate: Date,
    public invoiceDate: Date,
    public totalAmount: number,
    public status: string,
    public payment: PaymentModele,
    public createdAt: Date,
  ) {}
}
