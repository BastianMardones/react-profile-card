# Cómo funciona la solución

## Estructura

`index.js` registra `App` como pantalla principal de Expo. `App.js` contiene toda la interfaz: un `View` que ocupa la pantalla, la tarjeta, el banner y un contenedor con el perfil, la biografía, las estadísticas, las habilidades y las acciones.

`View` agrupa elementos y define su distribución, `Text` muestra texto e `Image` carga las imágenes locales mediante `require`. Los botones son composiciones de `View` y `Text`, sin acciones, tal como pide el ejercicio.

## Datos y componentes

`BIO`, `STATS` y `SKILLS` conservan los datos entregados. `.map()` transforma cada estadística en un `StatItem` y cada habilidad en un `Tag`; la propiedad `key` identifica cada elemento dentro de su lista.

`StatItem` recibe `label`, `value` y `divider` como props. `Tag` recibe `label`. Así reutilizamos la misma estructura con distintos datos, sin copiar el JSX para cada elemento.

## Flexbox

El contenedor de pantalla utiliza `flex: 1` para ocupar el espacio disponible y `justifyContent: 'center'` para centrar la tarjeta verticalmente. El encabezado, las estadísticas y los botones usan `flexDirection: 'row'` para distribuir sus hijos horizontalmente.

El bloque de nombre usa `flex: 1` para aprovechar el espacio que deja el avatar. Las estadísticas y los botones también usan `flex: 1`, compartiendo el espacio por igual. Las etiquetas usan `flexWrap: 'wrap'` y `gap` para pasar a otra línea con separación uniforme.

## Imágenes y posiciones

El banner mide 120 puntos de alto y ocupa todo el ancho. `resizeMode="cover"` llena ese rectángulo manteniendo las proporciones de la imagen.

El avatar mide 96 × 96 y tiene `borderRadius: 48`, lo que lo hace circular. El margen superior negativo de su contenedor lo desplaza sobre el banner; el indicador verde usa `position: 'absolute'`, `bottom` y `right` para quedar anclado al avatar.

## Estilos y adaptación

Todos los estilos están en `StyleSheet.create` y todos los colores se centralizan en `COLORS`. Los arrays de estilos agregan reglas condicionales: por ejemplo, el divisor vertical solo aparece a partir de la segunda estadística.

`Platform.select` elige sombras de iOS, elevación de Android o sombra web. `useWindowDimensions` actualiza el ancho disponible; por encima de 600 puntos, `wideCard` limita la tarjeta a 420 puntos.

La biografía utiliza `numberOfLines={3}` para mostrar un máximo de tres líneas. El encabezado Skills, los componentes reutilizables y el ancho adaptable completan el bonus.

## Ejecutar

Abre una terminal en esta carpeta y ejecuta `npm ci` si necesitas instalar las dependencias. Después usa `npm start` para Expo Go o `npm run web` para la vista previa en navegador.
