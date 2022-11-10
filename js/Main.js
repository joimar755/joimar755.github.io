//formulario
class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class UI {
  addProduct(Producto) {
    const product_list = document.getElementById("product-list");
    const elemtent = document.createElement("div");
    elemtent.innerHTML = ` 
    <div class="card text-white bg-primary text-center mb-4">
    <div class="card-body">
      <strong>nombre Producto</strong>: ${Producto.nombre}
      <strong>Precio</strong>: ${Producto.precio}
      <input name="delete" class="btn btn-danger" type="button" value="Eliminar">

    </div>
    </div>
    `;
    product_list.appendChild(elemtent);
  }
  Reset_form() {
    document.getElementById("form").reset();
  }
  deleteProduct(elemento) {
    if (elemento.name === "delete") {
      alertify.confirm( 
        "This is a confirm dialog.",
        function () { 
          elemento.parentElement.parentElement.parentElement.remove();
          alertify.success("Ok");
        },
        function () {
          alertify.error("Cancel");
        }
      );
    }
  }
}

function Registrar(e) {
  document.getElementById("form").addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    if (nombre == "" || precio == "") {
      alertify.error("Error message");
      //alert("Inserte campos");
    } else {
      const Producto = new Product(nombre, precio);

      const ui = new UI();
      ui.addProduct(Producto);
      ui.Reset_form();
      alertify.success("Success message");
    }
    e.preventDefault();
  });
  document
    .getElementById("product-list")
    .addEventListener("click", function (e) {
      const ui = new UI();
      ui.deleteProduct(e.target);
    });
}
