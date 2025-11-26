<?php
require_once __DIR__ . '/../core/Model.php';

class Product extends Model {

    // Obtener todos los productos
    public function getAll() {
        $stmt = $this->db->query("SELECT id, nombre, descripcion, precio, stock, categoria, imagen FROM products");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Obtener producto por ID
    public function getById($id) {
        $stmt = $this->db->prepare("SELECT id, nombre, descripcion, precio, stock, categoria, imagen FROM products WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Crear nuevo producto
    public function create($nombre, $descripcion, $precio, $stock, $categoria, $imagen) {
        $stmt = $this->db->prepare("INSERT INTO products (nombre, descripcion, precio, stock, categoria, imagen) VALUES (?, ?, ?, ?, ?, ?)");
        return $stmt->execute([$nombre, $descripcion, $precio, $stock, $categoria, $imagen]);
    }

    // Actualizar producto existente
    public function update($id, $nombre, $descripcion, $precio, $stock, $categoria, $imagen) {
        $stmt = $this->db->prepare("UPDATE products SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ?, imagen = ? WHERE id = ?");
        return $stmt->execute([$nombre, $descripcion, $precio, $stock, $categoria, $imagen, $id]);
    }

    // Eliminar producto
    public function delete($id) {
        $stmt = $this->db->prepare("DELETE FROM products WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>

