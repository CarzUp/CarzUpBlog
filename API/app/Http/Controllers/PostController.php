<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Get all posts
    public function index()
    {
        return response()->json(Post::all(), 200);
    }

    // Create a new post
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = Post::create($request->all());

        return response()->json($post, 201);
    }

    // Get a single post by ID
    public function show(Post $post)
    {
        return response()->json($post, 200);
    }

    // Update a post
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post->update($request->all());

        return response()->json($post, 200);
    }

    // Delete a post
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(['message' => 'Post deleted successfully'], 200);
    }
}
