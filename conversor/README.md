# Conversor de Unidades

Aplicación web para convertir valores entre distintas unidades de medida (longitud, masa, temperatura, ángulo, tiempo, etc.). Está construida con React y Vite y usa la librería [convert-units](https://github.com/convert-units/convert-units) para realizar las conversiones.

## Características

- Selección de la **magnitud** (angle, length, mass, temperature, volume, etc.).
- Selección de la unidad de **origen** y de **destino**, filtradas según la magnitud elegida.
- Botón con ícono (⇄) para **intercambiar** las unidades de origen y destino.
- Resultado calculado en tiempo real al cambiar el valor o las unidades.
- Mensaje de "Conversión no válida" si el valor está vacío o las unidades no corresponden.
- Interfaz de tema oscuro y adaptable a pantallas pequeñas.

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| [React](https://react.dev) 19 | Interfaz de usuario |
| [Vite](https://vite.dev) | Servidor de desarrollo y build |
| [convert-units](https://www.npmjs.com/package/convert-units) | Conversión entre unidades |
| [Oxlint](https://oxc.rs) | Análisis estático del código |

## Requisitos

- [Node.js](https://nodejs.org) (versión LTS recomendada)
- npm

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Generar la versión de producción (carpeta dist/)
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

Con `npm run dev`, la aplicación queda disponible en la dirección que muestre la consola (por defecto `http://localhost:5173`).

## Cómo se usa

1. Elige una **magnitud** en el selector superior.
2. Elige la unidad de **origen** y la de **destino** (puedes invertirlas con el botón ⇄).
3. Escribe el valor a convertir.
4. El resultado aparece debajo, en el recuadro **Resultado**.

## Estructura del proyecto

```
conversor/
├── index.html          # Documento HTML base
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
├── .oxlintrc.json      # Configuración del linter
├── src/
│   ├── main.jsx        # Punto de entrada de React
│   ├── App.jsx         # Componente principal con la lógica del conversor
│   ├── App.css         # Estilos del conversor
│   └── index.css       # Estilos globales (fondo, fuente, layout)
└── public/             # Archivos estáticos
```

## Funcionamiento interno

El componente principal [`App.jsx`](./src/App.jsx) mantiene el siguiente estado con `useState`:

| Estado | Descripción | Valor inicial |
|--------|-------------|---------------|
| `value` | Valor numérico a convertir | `0` |
| `magnitud` | Magnitud seleccionada | `"angle"` |
| `from` | Unidad de origen | `"deg"` |
| `to` | Unidad de destino | `"rad"` |

Funciones principales:

- `cambiarMagnitud`: al cambiar la magnitud, actualiza las unidades disponibles y reasigna `from` y `to` a las dos primeras unidades de esa magnitud.
- `intercambiarMagnitudes`: intercambia los valores de `from` y `to`.
- El resultado se calcula con `convert(value).from(from).to(to)`, solo si el valor no está vacío y ambas unidades pertenecen a la magnitud actual.

## Estilos

Los estilos están en CSS plano (sin frameworks):

- [`index.css`](./src/index.css): tema oscuro, fondo con degradados y centrado de la aplicación.
- [`App.css`](./src/App.css): tarjeta del conversor, selectores, campo numérico, botón de intercambio (con ícono mediante `::before`) y recuadro de resultado.
