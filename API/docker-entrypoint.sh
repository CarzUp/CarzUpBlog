#!/bin/sh

# Run database migrations
echo "Running migrations..."
php artisan migrate --force

# Start Laravel
echo "Starting Laravel application..."
php artisan serve --host=0.0.0.0 --port=4389