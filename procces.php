<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];

// Call Python script
$command = escapeshellcmd("python3 process.py " . escapeshellarg($name));
$output = shell_exec($command);

echo json_encode(['message' => $output]);
?>