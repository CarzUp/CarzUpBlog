<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string      ('slug'                                                     )->unique()->after('id');                     // SEO-friendly identifier
            $table->string      ('author'                                                   )->after('title');                            // Author name
            $table->longText    ('content'                                                  )->change();                                         // Ensure content can store long text
            $table->text        ('excerpt'                                                  )->nullable()->after('content');              // Short summary
            $table->json        ('tags'                                                     )->nullable()->after('excerpt');              // Tags stored as JSON
            $table->string      ('image'                                                    )->nullable()->after('tags');                 // Featured image
            $table->json        ('gallery'                                                  )->nullable()->after('image');                // Array of images
            $table->enum        ('status', ['draft', 'published', 'archived']               )->default('draft')->after('image');    // Post status
            $table->enum        ('type', ['review', 'event', 'news', 'technical', 'other']  )->default('other')->after('status');   // Post type
            $table->timestamp   ('published_at'                                             )->nullable()->after('type');                 // Published date
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn(['slug', 'author', 'excerpt', 'tags', 'image', 'status', 'type', 'published_at', 'gallery']);
        });
    }
};
