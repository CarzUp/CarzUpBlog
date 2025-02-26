<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Allow all requests for now (change when adding authentication)
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:100',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:50', // Each tag should be a string
            'image' => 'nullable|url|max:2048', // Main image must be a valid URL
            'gallery' => 'nullable|array',
            'gallery.*' => 'url|max:2048', // Each image in gallery must be a valid URL
            'status' => 'required|in:draft,published,archived',
            'type' => 'required|in:review,event,news,technical,other',
            'published_at' => 'nullable|date',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'The post title is required.',
            'title.max' => 'The post title cannot exceed 255 characters.',
            'author.required' => 'The author name is required.',
            'author.max' => 'The author name cannot exceed 100 characters.',
            'content.required' => 'The post content cannot be empty.',
            'excerpt.max' => 'The excerpt cannot exceed 500 characters.',
            'tags.array' => 'Tags should be an array of strings.',
            'tags.*.max' => 'Each tag cannot exceed 50 characters.',
            'image.url' => 'The image must be a valid URL.',
            'gallery.array' => 'Gallery must be an array of image URLs.',
            'gallery.*.url' => 'Each gallery image must be a valid URL.',
            'status.in' => 'The status must be either draft, published, or archived.',
            'type.in' => 'The type must be one of: review, event, news, technical, or other.',
            'published_at.date' => 'The published_at field must be a valid date.',
        ];
    }
}
