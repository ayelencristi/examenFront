import {Seller} from "./Seller";
import {SaleDetail} from "./SaleDetail";


export class Sale {
  id: number
  date: Date
  seller: Seller
  saleDetails: SaleDetail[]
  total: number
}
