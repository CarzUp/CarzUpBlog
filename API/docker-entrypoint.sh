#!/bin/sh

# Wait for PostgreSQL to be ready
echo "Waiting for database..."
until nc -z -v -w30 db 5432
do
  echo "Waiting for PostgreSQL database connection..."
  sleep 5
done
echo "Database is up!"

# Run database migrations
echo "Running migrations..."
php artisan migrate --force

# Start Laravel
echo "Starting Laravel application..."
php artisan serve --host=0.0.0.0 --port=4389