import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})

export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name:'',
    price: 0
  }

  constructor(private ProductService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.ProductService.readById(id).subscribe(product => {
      this.product = product
    });
  }


  deleteProduct(): void {
    /* this.ProductService.delete(this.product.id).subscribe(() => {
      this.ProductService.showMessage('Produto Deletado!') 
      this.router.navigate(['/products']);
      })*/

      const id = this.route.snapshot.paramMap.get('id') ?? '';
        
        this.ProductService.delete(id).subscribe(
          () => {
            this.ProductService.showMessage('Produto Deletado!');
            this.router.navigate(['/products']);
          },
          (error) => {
            console.error('Erro ao excluir o produto:', error);
            // Trate o erro de acordo com as necessidades do seu aplicativo.
          }
        );
      
    
  }
  

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
