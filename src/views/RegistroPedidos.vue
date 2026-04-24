<template>

    <div class="contenedorPrincipal wireframe">
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
            
            <section class="tablaControl wireframe">
                <form action="" id="formularioRegistro" class="wireframe">
                    
                    <div class="agrupadorEntrada">
                        <label for="nombreCliente">Nombre del Cliente</label>
                        <input type="text" id="nombreCliente" name="nombreCliente" placeholder="Ej. María López" required>
                    </div>
                    
                    <div class="agrupadorEntrada">
                        <label for="producto">Producto</label>
                        <select name="producto" id="producto" required>
                            <option value="" disabled selected>--- Seleccione un producto ---</option>
                            <option value="1">Treats XL</option>
                            <option value="2">Treats Mini</option>
                        </select>
                    </div>
                    
                    <div class="agrupadorEntrada">
                        <label for="cantidad">Cantidad</label>
                        <input type="number" id="cantidad" name="cantidad" placeholder="Ej. 2" min="1" required>
                    </div>
                    
                    <div class="agrupadorEntrada">
                        <label for="fechaEntrega">Fecha de entrega</label>
                        <input type="date" id="fechaEntrega" name="fechaEntrega" required>
                    </div>
                    
                    <div class="agrupadorEntrada">
                        <label for="notasPedido">Notas del pedido</label>
                        <textarea name="notasPedido" id="notasPedido" rows="4" placeholder="Alguna indicación especial (opcional)..."></textarea>
                    </div>
                    
                    <div class="agrupadorBoton">
                        <button type="submit" class="botonPrimario">Confirmar</button>
                    </div>
                    
                </form>
            </section>
        </main>
    </div>
</template>