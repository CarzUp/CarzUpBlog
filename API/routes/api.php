<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get      ('/posts',          [PostController::class, 'index']    ); // Get all posts
Route::post     ('/posts',          [PostController::class, 'store']    ); // Create a post
Route::get      ('/posts/{post}',   [PostController::class, 'show']     ); // Get single post
Route::put      ('/posts/{post}',   [PostController::class, 'update']   ); // Update post
Route::delete   ('/posts/{post}',   [PostController::class, 'destroy']  ); // Delete post
