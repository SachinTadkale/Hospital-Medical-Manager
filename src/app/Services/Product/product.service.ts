import { Injectable } from '@angular/core';
import { product } from '../../model/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private localStorageKey = 'products';
  constructor() { }

  getAllProducts():product[]{
    const data = localStorage.getItem(this.localStorageKey);
    return data? JSON.parse(data):[];
  }
  saveProducts(products:product[]):void{
    localStorage.setItem(this.localStorageKey, JSON.stringify(products));
  }
  addProduct(product:product):void{
    const products = this.getAllProducts();
    products.push(product);
    this.saveProducts(products);
  }
  updateProduct(updatedProduct:product){
    // const message = "Product Updated Successfully"
    const products = this.getAllProducts().map(
      p => p.product_id === updatedProduct.product_id ? updatedProduct : p
    );
    alert("Product Updated Successfully");
    this.saveProducts(products);
    
  }
  deleteProduct(productID:number){
    const products = this.getAllProducts().filter(
      p => p.product_id !== productID
    );
    alert(`Product Deleted Successfully`);
    this.saveProducts(products);
  }
}
