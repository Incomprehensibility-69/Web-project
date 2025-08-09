<?php
<?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$cartData = isset($_POST['cartData']) ? json_decode($_POST['cartData'], true) : [];

if ($name && $email && !empty($cartData)) {
    $order = "$name <$email>\n" . print_r($cartData, true) . "\n\n";
    if (file_put_contents('orders.txt', $order, FILE_APPEND) !== false) {
        echo "Thank you, $name! Your order has been received.";
    } else {
        echo "Sorry, there was a problem saving your order.";
    }
} else {
    echo "Please fill in all required fields and add items to your cart.";
}
?>