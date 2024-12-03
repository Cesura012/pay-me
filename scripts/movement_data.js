//Ocultar la imagen de la tabla movimientos cuando haya datos

// Obtener el contenedor empty-state y la tabla de transacciones
const emptyState = document.querySelector(".empty-state");
const transactionsTable = document.querySelector(".transactions-table tbody");

// Función para verificar si la tabla está vacía
function checkEmptyState() {
    // Verifica si la tabla tiene filas
    if (transactionsTable.rows.length === 0) {
        emptyState.style.display = "flex"; // Muestra la imagen si la tabla está vacía
    } else {
        emptyState.remove(); // Elimina la imagen si hay datos en la tabla
    }
}

document.addEventListener("DOMContentLoaded", checkEmptyState);

// Función para agregar una nueva transacción
function addTransaction(date, amount, type, description) {
    // Crear una nueva fila para la transacción
    const newRow = document.createElement("tr");

    // Llenar la fila con los datos
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${amount}</td>
        <td>${type}</td>
        <td>${description}</td>
    `;

    transactionsTable.appendChild(newRow);
    checkEmptyState();
}

//Aquí pondrias los datos del backend y de la api para que se acualicen en la tabla


//