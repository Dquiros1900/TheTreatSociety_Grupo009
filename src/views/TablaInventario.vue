<template>
    <div class="contenedorPrincipal">
        <aside class="sideBar">
            <div class="sidebar-top">
                <div class="sidebar-logo">
                    <img src="@/assets/img/logo.svg" alt="The Treat Society">
                </div>
                 <div class = "contenedorUsuario">
                    <img src="@/assets/img/empleada.png" alt="">
                    <p>Fabiana Mendoza</p>
                </div>
                <form action="" class = "buscadorSideBar">
                    <input type="search" id = "buscarSideBar" placeholder="Buscar">
                </form>
                <nav class="sidebar-nav">
                    <router-link to="/registroPedidos" class="nav-item">Registro de pedidos</router-link>
                    <router-link to="/tableroPedidos" class="nav-item active">Seguimiento de pedidos</router-link>
                    <router-link to="/tablaInventario" class="nav-item">Gestión de productos</router-link>
                </nav>
            </div>
            <div class="sidebar-bottom">
                <button class="botonPrimario btn-logout">Cerrar sesión</button>
            </div>
        </aside>
        
        <main class="contenido wireframe">
             <section class="header wireframe">
                <img src="@/assets/img/iconoPerro.svg" alt="">
                <h1>Formulario de Registro de Pedido</h1>
                <img src="@/assets/img/iconoGato.svg" alt="">
            </section>
            
            <section class="tablaControl tablero wireframe">
                <form action="" class="formularioBuscador">
                    <div class="agrupadorBuscador">
                        <input type="search" id="buscarProducto" name="buscar" placeholder="Buscar producto por nombre o ID...">
                    </div>
                </form>
                
                <section class="accionesInventario wireframe">
                    <button class="botonSecundario botonAcciones">Seleccionar</button>
                    <button class="botonSecundario botonAcciones">Editar</button>
                    <button class="botonSecundario botonAcciones">Desactivar</button>
                    <button class="botonPrimario botonAcciones">Agregar</button>
                </section>
                
                <table class="tablaInventario">
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
            
            <section class="paginacion wireframe">
                <button class="botonPrimario cambioEstado">&lt;</button>
                <span class="body">Pag 1 de 1</span>
                <button class="botonPrimario cambioEstado">&gt;</button>
            </section>
        </main>
    </div>
</template>