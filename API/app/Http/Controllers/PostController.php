<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\Services\PostService;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController extends Controller
{
    protected PostService $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        $filters = $request->only(['status', 'type', 'author_id', 'sort']);
        $posts = $this->postService->getFilteredPosts($filters);

        return PostResource::collection($posts);
    }

    public function getPostStatistics(): JsonResponse
    {
        return response()->json($this->postService->getPostStatistics());
    }

    public function getBySlug($slug): JsonResponse
    {
        return response()->json($this->postService->getBySlug($slug));
    }

    public function show(Post $post): JsonResponse
    {
        return response()->json(new PostResource($post));
    }

    public function checkTitle(Request $request): JsonResponse
    {
        // Validate request
        $request->validate([
            'title' => 'required|string|max:255'
        ]);

        // Check if the title exists
        $exists = Post::where('title', $request->query('title'))->exists();

        return response()->json([
            'exists' => $exists
        ], 200);
    }

    public function store(PostRequest $request): JsonResponse
    {
        $post = $this->postService->createPost($request->validated());
        return response()->json([
            'message' => 'Post created successfully.',
            'post' => new PostResource($post),
        ], 201);
    }

    public function update(PostRequest $request, Post $post): JsonResponse
    {
        $updatedPost = $this->postService->updatePost($post, $request->validated());
        return response()->json([
            'message' => 'Post updated successfully.',
            'post' => new PostResource($updatedPost),
        ]);
    }

    public function destroy(Post $post): JsonResponse
    {
        $this->postService->deletePost($post);
        return response()->json(['message' => 'Post deleted successfully.'], 200);
    }
}
