FROM php:7.0-apache
COPY src/ /var/www/html/
COPY config.php /var/www/html/config.php