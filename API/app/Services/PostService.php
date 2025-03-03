<?php

namespace App\Services;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Repositories\PostRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;
use RuntimeException;

class PostService
{
    protected PostRepository $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function getAllPosts($perPage = 10): LengthAwarePaginator
    {
        return $this->postRepository->getAllPosts($perPage);
    }

    public function getFilteredPosts(array $filters): LengthAwarePaginator
    {
        return $this->postRepository->getFilteredPosts($filters);
    }

    public function getPostStatistics(): array
    {
        return $this->postRepository->getPostStatistics();
    }

    public function getBySlug(string $slug): PostResource
    {
        $post = $this->postRepository->findBySlug($slug);

        if (!$post) {
            throw new ModelNotFoundException("Post with slug '{$slug}' not found.");
        }

        return new PostResource($post);
    }

    public function getPostById($id): Post
    {
        try {
            return $this->postRepository->findPostById($id);
        } catch (ModelNotFoundException) {
            throw new RuntimeException('Post not found.');
        }
    }

    public function createPost($data): Post
    {
        $data['slug'] = Str::slug($data['title']);
        return $this->postRepository->createPost($data);
    }

    public function updatePost($post, $data): Post
    {
        $data['slug'] = Str::slug($data['title']);
        return $this->postRepository->updatePost($post, $data);
    }

    public function deletePost($post): void
    {
        $this->postRepository->deletePost($post);
    }
}
