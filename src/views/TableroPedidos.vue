<template>
    <div class = "contenedorPrincipal wireframe">
        <aside class = "sideBar wireframe"></aside>
        <main class = "contenido wireframe">
            <section class ="encabezado wireframe">
                <h1>Tablero de Pedidos</h1>
            </section>
            <section class = "tablaControl tablero wireframe">
                <form action="" class = "formularioBuscador">
                    <div class= "agrupadorBuscador">
                        <input type="search" id = "buscarPedido" name = "buscar">
                    </div>
                </form>
                <div class = "contornoTablero wireframe">
                    <section class = "columnaEstado wireframe">
                        <p class = "parrafoEstado">Recibido (#)</p>
                        <div class = "zonaTarjetas">
                            <article class = "tarjetaPedido">
                                <p>ID PEDIDO: 1234</p>
                                    <button class = "editarPedido">Editar</button>
                                    <div class = "botonesFlecha">
                                        <button class = "cambioEstado">&lt;</button>
                                        <button class = "cambioEstado">&gt;</button>
                                    </div>
                            </article>
                        </div>
                    </section>
                    <section class = "columnaEstado wireframe">
                        <p class = "parrafoEstado">En Armado (#)</p>
                        <div class = "zonaTarjetas"></div>
                    </section>
                    <section class = "columnaEstado wireframe">
                        <p class = "parrafoEstado">En Empacado (#)</p>
                        <div class = "zonaTarjetas"></div>
                    </section>
                    <section class = "columnaEstado wireframe">
                        <p class = "parrafoEstado">Listo (#)</p>
                        <div class = "zonaTarjetas"></div>
                    </section>
                    <section class = "columnaEstado wireframe">
                        <p class = "parrafoEstado">Entregado (#)</p>
                        <div class = "zonaTarjetas"></div>
                    </section>
                </div>
            </section>
        </main>
    </div>
</template>