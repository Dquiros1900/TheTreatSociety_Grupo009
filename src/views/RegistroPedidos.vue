<template>
    <div class = "contenedorPrincipal wireframe">
        <aside class = "sideBar wireframe"></aside>
        <main class = "contenido wireframe">
            <section class ="encabezado wireframe">
                <h1>Formulario de Registro de Pedido</h1>
            </section>
            <section class = "tablaControl wireframe">
                <form action="" id = "formularioRegistro" class = "wireframe">
                    <div class = "agrupadorEntrada">
                        <label for="nombreCliente">Nombre del Cliente</label>
                        <input type="text" id = "nombreCliente" name = "nombreCliente">
                    </div>
                    <div class = "agrupadorEntrada">
                        <label for="producto">Producto</label>
                        <select name="producto" id="producto">
                            <option value="predeterminado">---Seleccione un producto---</option>
                        </select>
                    </div>
                    <div class = "agrupadorEntrada">
                        <label for="cantidad">Cantidad</label>
                        <input type="number" id = "cantidad" name = "cantidad">
                    </div>
                    <div class = "agrupadorEntrada">
                        <label for="fechaEntrega">Fecha de entrega</label>
                        <input type="date" id = "fechaEntrega" name = "fechaEntrega">
                    </div>
                    <div class = "agrupadorEntrada">
                        <label for="notasPedido">Notas del pedido</label>
                        <textarea name="notasPedido" id="notasPedido" cols="30" rows="10"></textarea>
                    </div>
                    <div class = "agrupadorBoton">
                        <button class = "confirmarRegistro">Confirmar</button>
                    </div>
                </form>
            </section>
        </main>
    </div>
</template>