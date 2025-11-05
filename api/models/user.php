<?php
require_once __DIR__ . '/../core/Model.php';

class User extends Model {
    // Obtener todos los usuarios
    public function getAll() {
        $stmt = $this->db->query("SELECT id, nombre, email FROM users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Obtener usuario por ID
    public function getById($id) {
        $stmt = $this->db->prepare("SELECT id, nombre, email, password FROM users WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Crear nuevo usuario
    public function create($nombre, $email, $password) {
        $stmt = $this->db->prepare("INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)");
        return $stmt->execute([$nombre, $email, $password]);
    }

    // Actualizar usuario existente
    public function update($id, $nombre, $email, $password) {
        $stmt = $this->db->prepare("UPDATE users SET nombre = ?, email = ?, password = ? WHERE id = ?");
        return $stmt->execute([$nombre, $email, $password, $id]);
    }

    // Eliminar usuario
    public function delete($id) {
        $stmt = $this->db->prepare("DELETE FROM users WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>
