import { Item } from './Item';
export class Cart {
  Id?: number
  Items?: Item[]
  Amount?:number
  constructor(
    _Items: Item[],
    _Amount: number)
    {
      this.Items = _Items
      this.Amount = _Amount
    }
}
