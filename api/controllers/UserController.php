<?php
/**
 * Controlador de usuarios
 * 
 * Este controlador maneja todas las operaciones relacionadas con los usuarios:
 * - Obtener todos los usuarios
 * - Obtener un usuario por ID
 * - Crear, actualizar y eliminar usuarios
 */

// Incluye el modelo User (lógica de base de datos)
require_once __DIR__ . '/../models/user.php';
// Incluye la clase Response (para enviar respuestas JSON)
require_once __DIR__ . '/../utils/Response.php';

class UserController {
    private $model; // Instancia del modelo User

    // Constructor: inicializa el modelo
    public function __construct() {
        $this->model = new User();
    }

    // =============================
    // GET /users → Obtiene todos los usuarios
    // =============================
    public function getAll() {
        $users = $this->model->getAll();
        Response::json($users);
    }

    // =============================
    // GET /users/{id} → Obtiene un usuario por ID
    // =============================
    public function get($id) {
        $user = $this->model->getById($id);
        if (!$user) {
            Response::json(['mensaje' => 'Usuario no encontrado'], 404);
            return;
        }
        Response::json($user);
    }

    // =============================
    // POST /users → Crea un nuevo usuario
    // =============================
    public function create($data) {
        // Validar campos obligatorios (ajustá según tus columnas)
        if (empty($data['nombre']) || empty($data['email']) || empty($data['password'])) {
            Response::json(['mensaje' => 'Faltan datos obligatorios'], 400);
            return;
        }

        // Encriptar la contraseña antes de guardar
        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);

        $ok = $this->model->create(
            $data['nombre'],
            $data['email'],
            $hashedPassword
        );

        Response::json(['success' => $ok], $ok ? 201 : 500);
    }

    // =============================
    // PUT /users/{id} → Actualiza un usuario existente
    // =============================
    public function update($id, $data) {
        // Validar existencia
        $user = $this->model->getById($id);
        if (!$user) {
            Response::json(['mensaje' => 'Usuario no encontrado'], 404);
            return;
        }

        // Encriptar contraseña si se envía una nueva
        $password = !empty($data['password']) ? password_hash($data['password'], PASSWORD_BCRYPT) : $user['password'];

        $ok = $this->model->update(
            $id,
            $data['nombre'] ?? $user['nombre'],
            $data['email'] ?? $user['email'],
            $password
        );

        Response::json(['success' => $ok], $ok ? 200 : 500);
    }

    // =============================
    // DELETE /users/{id} → Elimina un usuario
    // =============================
    public function delete($id) {
        $ok = $this->model->delete($id);
        Response::json(['success' => $ok], $ok ? 200 : 500);
    }
}
?>
