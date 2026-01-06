# 🛠️ Desafío Práctico: Gestor de Inventario Personal

**Tecnología:** JavaScript
## 🎯 Objetivo

Crear y gestionar una colección de datos dinámica utilizando **Arreglos (Arrays)**. Deberás aplicar operaciones de creación, lectura, inserción, eliminación y unión de datos para mantener tu inventario actualizado según ocurren diversos "eventos".

## 📝 Instrucciones Generales

1. **Personaliza tu tema:** Antes de escribir código, decide qué vas a gestionar. Puede ser un inventario de un RPG, una lista de compras para una fiesta, una playlist de Spotify, una colección de Sneakers, etc.
2. **Comentarios:** Cada paso que programes debe llevar un comentario explicando qué hace esa línea.
3. **Verificación:** Después de cada paso, utiliza `console.log()` para verificar cómo ha cambiado tu inventario.

---

## 🚀 Fase 1: Inicialización

1. **Define tu colección:**
Crea una variable llamada `inventario`. Inicialízala con al menos **4 elementos** relacionados con tu tema elegido (Strings).
*Ejemplo: Si elegiste "Mochila de Viaje", tus elementos pueden ser `["Pasaporte", "Cámara", "Agua", "Mapa"]`.*
2. **Consulta rápida:**
Imprime en la consola el **tercer** elemento de tu inventario para asegurarte de que no se te olvida.
3. **Reporte inicial:**
Muestra en consola cuántos artículos tienes en total usando la propiedad adecuada del arreglo.

---

## ⚡ Fase 2: Gestión de Movimientos

Simula que el tiempo pasa y ocurren eventos que modifican tu inventario.

4. **Nueva adquisición (Final):**
Has conseguido un objeto nuevo muy importante. Agrégalo al **final** de tu lista utilizando un método de arreglo.
5. **Pérdida inesperada (Final):**
Lamentablemente, has perdido o gastado el último objeto que tenías en la lista. Elimínalo usando el método correspondiente.
6. **Uso prioritario (Inicio):**
El primer objeto de tu lista ya ha sido utilizado o consumido. Elimínalo del **principio** de tu inventario.

---

## 🔧 Fase 3: Operaciones de Precisión
A veces necesitamos hacer cambios en lugares específicos, no solo al principio o al final.

7. **Reemplazo estratégico:**
Te has dado cuenta de que el **segundo elemento** de tu lista está roto, caducado o ya no te sirve. Reemplázalo por uno nuevo sin alterar el resto de la lista (puedes usar asignación directa por índice o un método específico).
8. **Inserción táctica:**
Necesitas agregar un objeto "Comodín" exactamente en la **mitad** de tu inventario actual. Investiga o calcula la posición e inserta el elemento sin borrar nada (Pista: `splice` es tu amigo aquí).

---

## 📦 Fase 4: Fusión de Colecciones

9. **El hallazgo:**
Imagina que encuentras una "Caja Misteriosa" o recibes una donación. Crea un **segundo arreglo** llamado `extra` con 3 nuevos elementos.
10. **La unificación:**
Crea una nueva variable llamada `inventarioTotal` que sea la unión de tu `inventario` principal y el `extra` (concatenación).

---

## 📊 Fase 5: Reporte Final

11. **Presentación de resultados:**
Escribe un código que muestre en la consola un resumen final atractivo. Debe incluir:
* La lista final completa (`inventarioTotal`).
* Un mensaje que diga: *"El inventario final cuenta con [X] elementos"*.
* Muestra cuál es el objeto que quedó en la última posición.



---

### 💡 Pistas para el alumno

* Recuerda que las posiciones en los arreglos comienzan en **0**.
* Si usas `splice` para insertar, recuerda que el segundo parámetro (elementos a borrar) debe ser `0`.
* Para la concatenación, el orden importa: `A.concat(B)` pone a A primero.

---
