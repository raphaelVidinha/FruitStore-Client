export class Item {

  Id?: number
  FruitId?: number
  CartId?: number
  Quantity?: number
  constructor(
    _FruitId: number,
    _Quantity: number)
    {
      this.FruitId = _FruitId
      this.Quantity = _Quantity
    }
}
