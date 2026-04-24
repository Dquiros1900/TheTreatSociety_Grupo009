<template>
    <div class="guiaEstilo">
        <section class="encabezado">
            <h1 style = "color: black;">Guía de estilo del Sistema</h1>
        </section>

        <div style="margin-bottom: 30px;">
            <h2 style="border-bottom: 1px solid black; padding-bottom: 5px;">1. Tipografía</h2>
            <h1 style = "background-color: var(--color-fondo-navegacion);">Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p class="body">Párrafo regular (.body)</p>
            <p class="caption">Descripción de apoyo (.caption)</p>
        </div>

        <div style="margin-bottom: 30px;">
            <h2 style="border-bottom: 1px solid black; padding-bottom: 5px;">2. Colores (Tokens de Estado)</h2>
            <div class="colorSwatches">
                <div class="colorChip" style="background-color: var(--color-estado-info)"><span>--color-estado-info</span></div>
                <div class="colorChip" style="background-color: var(--color-estado-alerta)"><span>--color-estado-alerta</span></div>
                <div class="colorChip" style="background-color: var(--color-estado-exito)"><span>--color-estado-exito</span></div>
                <div class="colorChip" style="background-color: var(--color-estado-error)"><span>--color-estado-error</span></div>
                <div class="colorChip" style="background-color: var(--color-interaccion-hover-primario)"><span>--color-interaccio-hover-primario</span></div>
                <div class="colorChip" style="background-color: var(--color-interaccion-hover-secundario)"><span>--color-interaccio-hover-secundario</span></div>
            </div>
        </div>

        <div style="margin-bottom: 30px;">
            <h2 style="border-bottom: 1px solid black; padding-bottom: 5px;">3. Botones</h2>
            <div class="agrupadorBoton" style="justify-content: flex-start;">
                <button type="button" class="botonPrimario" style="width: auto; padding: 0 20px;">Botón Primario</button>
                <button type="button" class="botonSecundario" style="width: auto; padding: 0 20px;">Botón Secundario</button>
            </div>
        </div>

        <div style="margin-bottom: 30px;">
            <h2 style="border-bottom: 1px solid black; padding-bottom: 5px;">4. Formularios</h2>
            
            <div style="display: flex; flex-direction: column; gap: 15px; max-width: 400px;">
                
                <div class="agrupadorEntrada">
                    <label for="demoInput">Input de texto</label>
                    <input type="text" id="demoInput" placeholder="Escribe aquí...">
                </div>

                <div class="agrupadorEntrada">
                    <label for="demoSelect">Selector (Select)</label>
                    <select id="demoSelect" required>
                        <option value="" disabled selected>--- Opción por defecto ---</option>
                        <option value="1">Opción 1</option>
                    </select>
                </div>

                <div class="agrupadorEntrada">
                    <label for="demoTextarea">Área de texto (Textarea)</label>
                    <textarea id="demoTextarea" rows="3" placeholder="Notas..."></textarea>
                </div>
            </div>
        </div>

    </div>
</template>