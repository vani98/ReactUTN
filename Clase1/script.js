const productos = [];

class Productos {
  constructor(nombre, precio, tipoServicio, detalle) {
    this.id = productos;
    this.nombre = nombre.toUpperCase();
    this.precio = Number(precio);
    this.tipoServicio = tipoServicio.toUpperCase();
    this.detalle = detalle.toUpperCase();
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
  sumarIva() {
    this.precio *= 1.21;
  }
}

//A partir de este constructor generar 3 Productos en el array y útilizar los métodos vender() y sumarIva()

const producto1 = new Productos(
  "celular motorola g71",
  58000,
  "tecnologico",
  'Celular. Pantalla gOLED FH+ de 6.43". Procesador: Octa core Qualcomm Snapdragon 695. Almacenamiento: 128Gb. RAM: 6 Gb. Camara principal: 50MP (74) F1.8 + Ultra Gran Angular y profundidad: 8MP (118) F2.2 + Macro: 2MP (78) F2.4. Camara Frontal: 16 Mp. Tecnologia 5G. NFC. Radio. USB C. WIFI. Bateria: 5000 mAh. Bluetooth. Sistema Operativo: Andriod 11'
);

const producto2 = new Productos(
  "Harina Pureza 0000",
  139,
  "de consumo",
  "Harina Ultra Ref 0000 Vit D 1kg"
);

const producto3 = new Productos(
  "Notebook ThinkPad E15 2da Gen (15.6”, Intel)",
  180000,
  "tecnologico",
  "Lenovo Thinkpad E15 G2 20Tds00B00 15.6″ Notebook – Full Hd – 1920 X 1080 – Intel Core I5 I5-1135G7 Quad-Core (4 Core) 2.40 Ghz – 8 Gb Ram – 256 Gb Ssd – Glossy Black – Windows 10 Pro – Intel Iris"
);

//Metodos en Producto 1

// console.log(producto1);
producto1.vender();
producto1.sumarIva();
// console.log(producto1);

//Metodos en Producto 2

// console.log(producto2);
producto2.vender();
producto2.sumarIva();
// console.log(producto2);

//Metodos en Producto 3

// console.log(producto3);
producto3.vender();
producto3.sumarIva();
// console.log(producto3);

//Push

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
