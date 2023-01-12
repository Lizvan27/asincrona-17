import { Component } from '@angular/core';
import ProductosJson from './productos.json';

interface PRODUCTOS {
  id: Number,
  descripcion: String;
  precio_compra: Number;
  precio_venta: Number;
  ganancia: Number;
  existencia: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asincrona-17';

  Productos : PRODUCTOS[] = ProductosJson;

  constructor(){
    console.log(this.Productos)
  }

  mostrar(){

  }
}
