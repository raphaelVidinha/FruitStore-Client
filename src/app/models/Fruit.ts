export class Fruit {
  Id?: number
  Name?: string
  Description?: string
  Image?: string
  StockQuantity?: number
  Price?: number
  constructor(
    _Id:number,
    _Name: string,
    _Description: string,
    _Image: string,
    _StockQuantity: number,
    _Price: number
  ) {
    this.Id = _Id;
    this.Name = _Name;
    this.Description = _Description;
    this.Image = _Image;
    this.StockQuantity = _StockQuantity;
    this.Price = _Price;
  }
}
