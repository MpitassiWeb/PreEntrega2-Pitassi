//Función Login, nos va a permitir loguearnos con usuario y contraseña
function login(usuarios) {
  let intentos = 0;
  let usuarioIngresado;
  let contraseñaIngresada;
  usuarioIngresado = prompt("Ingrese su nombre de usuario: ");
  let indice = usuarios.findIndex(
    (user) => user.nombreUsuario === usuarioIngresado
  );
  resultado = {
    login: false,
    usuario: " ",
  };
  if (indice === -1) {
    return resultado;
  }
  do {
    contraseñaIngresada = prompt("Ingrese su contraseña: ");
    if (usuarios[indice].contraseña === contraseñaIngresada) {
      resultado.login = true;
      resultado.usuario = usuarios[indice].nombreUsuario;
    }
    intentos++;
  } while (!resultado.login && intentos < 3);
  if (3 <= intentos && !resultado.login) {
    return resultado;
  }
  return resultado;
}
//Función que corrobora si la persona tiene usuario registrado y si se logueo correctamente
function tieneUsuarioYLogin(usuarios) {
  let tiene = Number(prompt("¿Tiene un usuario creado?\n\n1- Sí\n2- No"));
  if (tiene === 1) {
    alert("Vamos a iniciar su sesión!");
    let resultado = login(usuarios);
    if (resultado.login) {
      alert("Hola de nuevo " + resultado.usuario + " ¿Qué desea hacer?");
      return true;
    }
    alert("Su usuario o contraseña es incorrecta!");
    return false;
  } else {
    alert("¡Vamos registrarte!");
    registrarse(usuarios);
    alert("Iniciemos sesión!");
    let resultado = login(usuarios);
    if (resultado.login) {
      alert("Hola de nuevo " + resultado.usuario + " ¿Qué desea hacer?");
      return true;
    }
    alert("Su usuario o contraseña es incorrecta!");
    return false;
  }
}
//Función que permite al usuario registrarse
function registrarse(usuarios) {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let email = prompt("Ingrese su email: ");
  let ciudad = prompt("Ingrese su ciudad: ");
  let telefono = prompt("Ingrese su telefono: ");
  let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
  let contraseña = prompt("Ingrese su contraseña: ");
  let nuevoUsuario = {
    nombre,
    apellido,
    email,
    ciudad,
    telefono,
    nombreUsuario,
    contraseña,
  };
  usuarios.push(nuevoUsuario);
  return usuarios;
}
//Función que permite filtrar servicios por Categoría
function filtrarServicios(servicios, categoria) {
  let serviciosFiltrados = servicios.filter(
    (service) => service.categoria === categoria
  );
  return serviciosFiltrados;
}
//Función que permite listar servicios propiedades
function listarServicios(servicios, propiedad1, propiedad2, propiedad3) {
  const resultado = servicios
    .map(
      (service) =>
        service[propiedad1] +
        " __ " +
        propiedad2.toLocaleUpperCase() +
        ": " +
        service[propiedad2] +
        " __ " +
        propiedad3.toLocaleUpperCase() +
        ": $" +
        service[propiedad3]
    )
    .join("\n");
  return resultado;
}
//Función que permite agregar productos al carrito de compras
function agregarAlCarrito(carrito, servicios) {
  let opcion;
  do {
    opcion = Number(
      prompt(
        listarServicios(servicios, "id", "servicio", "precio") +
          "\n0 __ Para Salir"
      )
    );
    if (opcion !== 0) {
      let productoBuscado = servicios.find((service) => service.id === opcion);
      let productoCarrito = carrito.findIndex(
        (service) => service.id === opcion
      );
      if (productoCarrito !== -1) {
        carrito[productoCarrito].unidades++;
        carrito[productoCarrito].subtotal =
          carrito[productoCarrito].precio * carrito[productoCarrito].unidades;
      } else {
        carrito.push({
          id: productoBuscado.id,
          servicio: productoBuscado.servicio,
          precio: productoBuscado.precio,
          subtotal: productoBuscado.precio,
          unidades: 1,
        });
      }
      alert("Servicio agregado correctamente");
    }
  } while (opcion !== 0);
  return carrito;
}
//Función que devuelve el total del carrito de compras
function totalCarrito(carrito) {
  let total = 0;
  carrito.forEach((carro) => {
    total = total + carro["subtotal"];
  });
  return total;
}
//Creamos la función Principal
function main() {
  let usuarios = [
    {
      nombre: "Prueba1",
      apellido: "Prueba1",
      email: "prueba1@prueba.com",
      ciudad: "",
      telefono: "",
      nombreUsuario: "Prueba12",
      contraseña: "1234",
    },
    {
      nombre: "Prueba2",
      apellido: "Prueba2",
      email: "prueba2@prueba.com",
      ciudad: "",
      telefono: "",
      nombreUsuario: "Prueba123",
      contraseña: "1234",
    },
    {
      nombre: "Prueba3",
      apellido: "Prueba3",
      email: "prueba3@prueba.com",
      ciudad: "",
      telefono: "",
      nombreUsuario: "Prueba1234",
      contraseña: "1234",
    },
  ];
  let servicios = [
    {
      id: 1,
      categoria: "REPARACION",
      servicio: "Reparación PC",
      precio: 20000,
    },
    {
      id: 2,
      categoria: "REPARACION",
      servicio: "Reparación Notebook",
      precio: 30000,
    },
    {
      id: 3,
      categoria: "REPARACION",
      servicio: "Reemplazo componente",
      precio: 5000,
    },
    {
      id: 4,
      categoria: "MANTENIMIENTO",
      servicio: "Mantenimiento PC",
      precio: 15000,
    },
    {
      id: 5,
      categoria: "MANTENIMIENTO",
      servicio: "Mantenimiento Notebook",
      precio: 20000,
    },
    {
      id: 6,
      categoria: "MANTENIMIENTO",
      servicio: "Limpieza PC",
      precio: 10000,
    },
    {
      id: 7,
      categoria: "MANTENIMIENTO",
      servicio: "Limpieza Notebook",
      precio: 15000,
    },
    {
      id: 8,
      categoria: "OPTIMIZACION",
      servicio: "Optimización PC y Notebook",
      precio: 15000,
    },
    {
      id: 9,
      categoria: "OPTIMIZACION",
      servicio: "Actualización PC y Notebook",
      precio: 10000,
    },
  ];
  let carrito = [];
  alert(
    "¡Bienvenido a OptiTech!\nPara poder ver nuestros servicios Usted debe iniciar sesión"
  );
  if (tieneUsuarioYLogin(usuarios)) {
    let opcion;
    do {
      opcion = Number(
        prompt(
          "Elija una opción:\n\n0- Cerrar Sesión\n1- Listar todos los Servicios\n2- Elegir categoria de Servicios\n3- Agregar Servicios al Carrito\n4- Ver Carrito"
        )
      );
      if (opcion === 1) {
        alert(
          listarServicios(servicios, "id", "servicio", "precio") +
            "\n\n¡Sigamos!"
        );
      } else if (opcion === 2) {
        let categoria = prompt(
          "Las categorías son: Reparación, Mantenimiento y Optimización.\n\n¿Cúal es la adecuada para tus necesidades? (escríbelos sin tilde)"
        ).toLocaleUpperCase();
        let serviciosFiltrados = filtrarServicios(servicios, categoria);
        if (serviciosFiltrados.length !== 0) {
          alert("¿Qué Servicio desea agregar al carrito?");
          carrito = agregarAlCarrito(carrito, serviciosFiltrados);
        } else {
          alert(
            "Escribió la categoría de forma incorrecta. Vuelve a intentarlo."
          );
        }
      } else if (opcion === 3) {
        alert("¿Qué Servicio desea agregar al carrito?");
        carrito = agregarAlCarrito(carrito, servicios);
      } else if (opcion === 4) {
        if (carrito.length !== 0) {
          alert(
            listarServicios(carrito, "servicio", "unidades", "subtotal") +
              "\nTOTAL _____________  $ " +
              totalCarrito(carrito) +
              "\n\n¡Sigamos!"
          );
        } else {
          alert("¡Usted no cargó articulos en su carrito!");
        }
      } else if (opcion === 0) {
        alert("¡Muchas gracias por elegirnos! Hasta luego");
      } else {
        alert("La opción ingresada es inválida. ¡Elige una opción válida!");
      }
    } while (opcion != 0);
  } else {
    alert("No fue posible Iniciar su sesión. Intente de nuevo más tarde!");
  }
}
//Llamamos a la función Principal
main();
