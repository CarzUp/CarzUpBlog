<?php

namespace App\Repositories;

use App\Models\Post;
use Exception;
use Illuminate\Pagination\LengthAwarePaginator;

class PostRepository
{
    public function getAllPosts($perPage = 10): LengthAwarePaginator
    {
        return Post::query()->orderBy('created_at', 'desc')->paginate($perPage);
    }

    public function getFilteredPosts(array $filters): LengthAwarePaginator
    {
        $query = Post::query();

        // Filtering logic
        if (!empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }
        if (!empty($filters['type'])) {
            $query->where('type', $filters['type']);
        }
        if (!empty($filters['author_id'])) {
            $query->where('author_id', $filters['author_id']);
        }

        // Sorting logic
        if (!empty($filters['sort'])) {
            $sortOptions = explode('_', $filters['sort']);
            if (count($sortOptions) === 2) {
                [$column, $direction] = $sortOptions;
                if (in_array($column, ['title', 'created_at', 'updated_at']) && in_array($direction, ['asc', 'desc'])) {
                    $query->orderBy($column, $direction);
                }
            }
        } else {
            $query->orderBy('created_at', 'desc'); // Default sorting
        }

        return $query->paginate($filters['per_page'] ?? 10);
    }

    public function findBySlug(string $slug): ?Post
    {
        return Post::where('slug', $slug)->first();
    }

    public function findPostById($id): Post
    {
        return Post::findOrFail($id);
    }

    public function createPost(array $data): Post
    {
        return Post::create($data);
    }

    public function updatePost(Post $post, array $data): Post
    {
        try {
            $post->update($data);
            return $post;
        } catch (Exception $e) {
            throw new \RuntimeException('Failed to update post.');
        }
    }

    public function deletePost(Post $post): void
    {
        try {
            $post->delete();
        } catch (Exception) {
            throw new \RuntimeException('Failed to delete post.');
        }
    }
}
