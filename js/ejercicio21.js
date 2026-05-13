
    const pais = document.getElementById("pais");
    const capital = document.getElementById("capital");

    pais.addEventListener("change", function () {

      // Selecciona automáticamente la capital
      capital.value = pais.value;

      // Obtener texto seleccionado
      const paisSeleccionado =
        pais.options[pais.selectedIndex].text;

      const capitalSeleccionada = capital.value;

      // Mostrar en consola
      console.log(
        "País seleccionado: " + paisSeleccionado +
        " | Capital: " + capitalSeleccionada
      );
    });
