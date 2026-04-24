<template>
    <div class="contenedorPrincipal">
        <aside class="sideBar">
            <div class="sidebar-top">
                <div class="sidebar-logo">
                    <img src="@/assets/img/logo.svg" alt="The Treat Society">
                </div>
                <div class = "contenedorUsuario">
                    <img src="@/assets/img/empleada.png" alt="">
                    <p>Daniel Quirós</p>
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
                        <input type="search" id="buscarPedido" name="buscar" placeholder="Buscar por ID o cliente...">
                    </div>
                </form>
                
                <div class="contornoTablero wireframe">
                    <section class="columnaEstado wireframe">
                        <h3 class="parrafoEstado">Recibido (#)</h3>
                        
                        <div class="zonaTarjetas">
                            <article class="tarjetaPedido">
                                <p class="body"><strong>ID PEDIDO:</strong> 1234</p>
                                
                                <button class="botonSecundario editarPedido">Editar</button>
                                
                                <div class="botonesFlecha">
                                    <button class="botonPrimario cambioEstado">&lt;</button>
                                    <button class="botonPrimario cambioEstado">&gt;</button>
                                </div>
                            </article>
                        </div>
                    </section>
                    
                    <section class="columnaEstado wireframe">
                        <h3 class="parrafoEstado">En Armado (#)</h3>
                        <div class="zonaTarjetas"></div>
                    </section>
                    
                    <section class="columnaEstado wireframe">
                        <h3 class="parrafoEstado">En Empacado (#)</h3>
                        <div class="zonaTarjetas"></div>
                    </section>
                    
                    <section class="columnaEstado wireframe">
                        <h3 class="parrafoEstado">Listo (#)</h3>
                        <div class="zonaTarjetas"></div>
                    </section>
                    
                    <section class="columnaEstado wireframe">
                        <h3 class="parrafoEstado">Entregado (#)</h3>
                        <div class="zonaTarjetas"></div>
                    </section>
                </div>
            </section>
        </main>
    </div>
</template>