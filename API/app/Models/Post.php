<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * App\Models\Post
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $author
 * @property string $content
 * @property string|null $excerpt
 * @property string|null $tags
 * @property string|null $image
 * @property array|null $gallery
 * @property string $status
 * @property string $type
 * @property \Carbon\Carbon|null $published_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Post where($column, $operator = null, $value = null, $boolean = 'and')
 * @method static \Illuminate\Database\Eloquent\Builder|Post orderBy($column, $direction = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|Post find($id)
 * @method static \Illuminate\Database\Eloquent\Builder|Post create(array $attributes = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Post query()
 * @method static \Illuminate\Database\Eloquent\Builder|Post findOrFail($id)
 */
class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'author', 'content', 'excerpt',
        'tags', 'image', 'gallery', 'status', 'type', 'published_at'
    ];

    protected $casts = [
        'tags' => 'array',
        'gallery' => 'array',
        'published_at' => 'datetime',
    ];

    public static function boot(): void
    {
        parent::boot();

        static::creating(function ($post) {
            $slug = Str::slug($post->title);
            $count = static::where('slug', 'LIKE', "$slug%")->count();
            $post->slug = $count ? "{$slug}-" . ($count + 1) : $slug;
        });
    }

    public function content(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Str::markdown($value), // Converts Markdown to HTML
        );
    }
}
