# 🐾 The Treat Society - Admin Dashboard

**The Treat Society** es un panel de administración integral diseñado para optimizar la gestión de pedidos e inventario de una marca premium de snacks para mascotas. Este proyecto combina una estética orgánica y acogedora con la eficiencia de una herramienta de gestión profesional.

## 🚀 Vista Previa del Proyecto

### 1. Formulario de Registro de Pedidos
Interfaz diseñada para la captura de datos sin errores. El uso de fondos en blanco cálido (`#FFF6E8`) sobre el verde menta suave reduce la fatiga visual del administrador.

### 2. Gestión de Inventario y Tablero de Control
Implementación de un sistema de columnas tipo Kanban para el seguimiento de estados ("En Armado", "Listo", etc.).

### 3. Sidebar Dinámico y Centrado
Nuestra barra lateral es el corazón de la navegación, con un perfil de usuario perfectamente centrado y estados activos de alta legibilidad.

---

## 🎨 Decisiones de Diseño (UI/UX)

Como experto en interfaces, este proyecto se rige por tres pilares fundamentales:

* **Tipografía Estratégica:** * **Fraunces:** Utilizada exclusivamente para branding y títulos de alto nivel para mantener la personalidad artesanal de la marca.
    * **Nunito:** Implementada en toda la interfaz de usuario, tablas y formularios para garantizar una lectura rápida y clara de los datos.
* **Psicología del Color:** * **Verde Bosque:** Transmite confianza y naturaleza.
    * **Blanco Vainilla (#FFF6E8):** Elegido para los contenedores principales para evocar ingredientes naturales y orgánicos, evitando el blanco "clínico" que cansa la vista.
    * **Acento Activo (#FFD48F):** Un tono mostaza suave que resalta los elementos interactivos sin ser agresivo.
* **Accesibilidad en Navegación:** El estado activo del menú utiliza una combinación de **fuente en negrita**, cambio de color a **#FFD48F** y un **borde lateral de 4px**, asegurando que el usuario siempre sepa dónde está ubicado.

---

## 🛠️ Especificaciones Técnicas

* **HTML5 Semántico:** Uso de etiquetas correctas para accesibilidad y SEO.
* **CSS3 Moderno:**
    * **CSS Variables:** Gestión centralizada de colores y espaciado (`:root`).
    * **Flexbox:** Layout dinámico y adaptativo.
    * **Box-Sizing:** Control total del modelo de caja para evitar desbordamientos.
    * **Layout Adaptable:** Alturas calculadas con `calc(100vh - spacing)` para un ajuste perfecto a la pantalla.

## 📂 Estructura del Proyecto

- `index.html` - Estructura principal del dashboard.
- `estilos.css` - Estilos globales, variables y componentes (Sidebar, Botones, Inputs).
- `layout.css` - Definición de la estructura de la cuadrícula y posicionamiento.
- `tokens.css` - Estandarización del diseño de estilos por medio de :root.
- `/assets` - Logo (SVG), imágenes de perfil e íconos

---

## 💻 Instrucciones para Desarrolladores

Si deseas replicar o mejorar este proyecto:

1. Clona el repositorio.
2. Asegúrate de tener las fuentes **Fraunces** y **Nunito** vinculadas desde Google Fonts.
3. El sistema de espaciado es modular a través de variables para facilitar cambios globales de diseño.
4. Instale npm y corra el archivo con npm run dev

---
*Desarrollado con ❤️ para The Treat Society.*
