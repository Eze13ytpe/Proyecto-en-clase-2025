<!--
Este archivo funciona como router principal de la API.

Se encarga de:

✅ Configurar CORS para Angular.
✅ Leer la URL y el método HTTP.
✅ Llamar a los controladores correspondientes (Book, Product, User).
✅ Manejar rutas dinámicas con IDs usando expresiones regulares.
✅ Devolver un error 404 si la ruta no coincide con ninguna regla.
-->
<?php
// Permitir acceso desde Angular
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ====================
// IMPORTACIÓN DE CLASES
// ====================
require_once __DIR__ . '/../controllers/BookController.php';
require_once __DIR__ . '/../controllers/ProductController.php';
require_once __DIR__ . '/../controllers/UserController.php';
require_once __DIR__ . '/../utils/Response.php';

// ====================
// OBTENER RUTA Y MÉTODO
// ====================
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$basePath = '/api_libreria/public';

if (strpos($uri, $basePath) === 0) {
    $uri = substr($uri, strlen($basePath));
}

$uri = rtrim($uri, '/') ?: '/';
$method = $_SERVER['REQUEST_METHOD'];

// ====================
// INSTANCIAS DE CONTROLADORES
// ====================
/**
 * Attempt to instantiate a controller by trying multiple possible class names
 * (plain and common namespaced variants). If the class is still not found,
 * try requiring the controller file by filename and re-checking.
 */
$instantiateController = function(array $candidates) {
    foreach ($candidates as $name) {
        if (class_exists($name)) {
            return new $name();
        }
    }

    // Try requiring by filename (last segment of fully-qualified name)
    foreach ($candidates as $name) {
        $parts = explode('\\', $name);
        $file = __DIR__ . '/../controllers/' . end($parts) . '.php';
        if (file_exists($file)) {
            require_once $file;
            if (class_exists($name)) {
                return new $name();
            }
            // also try the short class name after requiring the file
            $short = end($parts);
            if (class_exists($short)) {
                return new $short();
            }
        }
    }

    // If no controller class found, return a 500 response with helpful info
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Controller class not found', 'candidates' => $candidates]);
    exit;
};

$bookController = $instantiateController(['BookController', 'Controllers\\BookController', 'App\\Controllers\\BookController']);
$productController = $instantiateController(['ProductController', 'Controllers\\ProductController', 'App\\Controllers\\ProductController']);
$userController = $instantiateController(['UserController', 'Controllers\\UserController', 'App\\Controllers\\UserController']);

// ====================
// ENRUTAMIENTO
// ====================
switch (true) {

    // ==================== PRODUCTS ====================
    case $uri === '/products' && $method === 'GET':
        $productController->getAll();
        break;

    case preg_match('/\/products\/(\d+)/', $uri, $m) && $method === 'GET':
        $productController->get($m[1]);
        break;

    case $uri === '/products' && $method === 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $productController->create($data);
        break;

    case preg_match('/\/products\/(\d+)/', $uri, $m) && $method === 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $productController->update($m[1], $data);
        break;

    case preg_match('/\/products\/(\d+)/', $uri, $m) && $method === 'DELETE':
        $productController->delete($m[1]);
        break;

    // ==================== USERS ====================
    case $uri === '/users' && $method === 'GET':
        $userController->getAll();
        break;

    case preg_match('/\/users\/(\d+)/', $uri, $m) && $method === 'GET':
        $userController->get($m[1]);
        break;

    case $uri === '/users' && $method === 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $userController->create($data);
        break;

    case preg_match('/\/users\/(\d+)/', $uri, $m) && $method === 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $userController->update($m[1], $data);
        break;

    case preg_match('/\/users\/(\d+)/', $uri, $m) && $method === 'DELETE':
        $userController->delete($m[1]);
        break;

    // ==================== DEFAULT ====================
    default:
        Response::json(['mensaje' => 'Ruta no encontrada', 'uri' => $uri], 404);
}
?>

