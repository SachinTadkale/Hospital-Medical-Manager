import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { product } from '../../../../../model/product-data';
import { ProductService } from '../../../../../Services/Product/product.service';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css',
})
export class ManageProductsComponent implements OnInit {
  productForm!: FormGroup;
  products: product[] = [];
  editingProductID: number | null = null;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      product_price: ['', Validators.required],
      stock_quantity: ['', Validators.required],
    });
    this.loadProducts();
  }
  loadProducts() {
    this.products = this.productService.getAllProducts();
  }
  getNextProductId(): number {
    const products = this.productService.getAllProducts();
    if (products.length === 0) return 1;
    const maxId = Math.max(...products.map((p) => +p.product_id));
    return maxId + 1;
  }
  onSubmit() {
    if (this.productForm.invalid) return;

    const newProduct: product = {
      ...this.productForm.value,
      product_id: this.getNextProductId().toString(),
    };
    alert('Product Added Successfully');
    this.productService.addProduct(newProduct);
    this.productForm.reset();
    this.loadProducts();
  }
  editingProduct(product: product): void {
    this.editingProductID = product.product_id;
    this.productForm.patchValue({ ...product });
  }
  updateProduct() {
    if (!this.editingProductID) return;

    const updatedProduct: product = {
      ...this.productForm.value,
      product_id: this.editingProductID,
    };
    this.productService.updateProduct(updatedProduct);
    this.editingProductID = null;
    this.productForm.reset();
    this.loadProducts();
  }
  deleteProduct(productID: number): void {
    this.productService.deleteProduct(productID);
    this.loadProducts();
  }
}
