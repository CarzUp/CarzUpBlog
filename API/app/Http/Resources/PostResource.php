<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Exception\CommonMarkException;

class PostResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     * @throws CommonMarkException
     */
    public function toArray(Request $request): array
    {
        $converter = new CommonMarkConverter();
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'author' => $this->author,
            'content' => $converter->convert($this->content),
            'excerpt' => $this->excerpt,
            'tags' => $this->tags ?? [],
            'image' => $this->image,
            'gallery' => $this->gallery ?? [],
            'status' => $this->status,
            'type' => $this->type,
            'published_at' => $this->published_at?->format('Y-m-d H:i:s'),
            'created_at' => $this->created_at?->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at?->format('Y-m-d H:i:s'),
        ];
    }
}
