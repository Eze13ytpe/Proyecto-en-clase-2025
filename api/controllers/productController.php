<?php
require_once __DIR__ . '/../core/Model.php'; // conexión a la base de datos

class Product extends Model {

    // Obtener todos los productos
    public function getAll() {
        $sql = "SELECT * FROM products";
        $stmt = $this->db->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Obtener un producto por ID
    public function getById($id) {
        $sql = "SELECT * FROM products WHERE id = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Crear un nuevo producto
    public function create($nombre, $descripcion, $precio, $imagen, $stock) {
        $sql = "INSERT INTO products (nombre, descripcion, precio, imagen, stock) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([$nombre, $descripcion, $precio, $imagen, $stock]);
    }

    // Actualizar un producto
    public function update($id, $nombre, $descripcion, $precio, $imagen, $stock) {
        $sql = "UPDATE products SET nombre=?, descripcion=?, precio=?, imagen=?, stock=? WHERE id=?";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([$nombre, $descripcion, $precio, $imagen, $stock, $id]);
    }

    // Eliminar un producto
    public function delete($id) {
        $sql = "DELETE FROM products WHERE id=?";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([$id]);
    }
}
