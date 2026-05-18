# StudySync API

API REST desarrollada con Node.js y Express para gestionar grupos de estudio utilizando arquitectura MVC.

---

## Tecnologías usadas

- Node.js
- Express.js
- JavaScript
- MVC
- Render
- GitHub

---

## Endpoints

### Obtener todos los grupos
GET /api/grupos

### Obtener grupo por ID
GET /api/grupos/:id

### Crear grupo
POST /api/grupos

### Actualizar grupo
PUT /api/grupos/:id

### Eliminar grupo
DELETE /api/grupos/:id

---

## Ejemplo JSON

```json
{
  "nombre": "Grupo Física",
  "materia": "Física II",
  "integrantes": 4
}
