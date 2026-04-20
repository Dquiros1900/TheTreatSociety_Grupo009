<template>
    <div class = "contenedorPrincipal wireframe">
        <aside class = "sideBar wireframe"></aside>
        <main class = "contenido wireframe">
            <section class ="encabezado wireframe">
                <h1>Inventario de Productos</h1>
            </section>
            <section class = "tablaControl tablero wireframe">
                <form action="" class = "formularioBuscador">
                    <div class= "agrupadorBuscador">
                        <input type="search" id = "buscarProducto" name = "buscar">
                    </div>
                </form>
                <section class = "accionesInventario wireframe">
                    <button class = "botonAcciones">Seleccionar</button>
                    <button class = "botonAcciones">Editar</button>
                    <button class = "botonAcciones">Desactivar</button>
                    <button class = "botonAcciones">Agregar</button>
                </section>
                <table class = "tablaInventario">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1234</td>
                            <td>Treats xl</td>
                            <td>$15</td>
                            <td>Premios</td>
                            <td>Activo</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class = "paginacion wireframe">
                <button>&lt;</button>
                <span>Pag 1 de 1</span>
                <button>&gt;</button>
            </section>
        </main>
    </div>
</template>