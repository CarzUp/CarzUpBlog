<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;

/**
 * @OA\Info(
 *     title="CarzUp Blog API",
 *     version="1.0",
 *     description="API documentation for the CarzUp Blog",
 *     @OA\Contact(
 *         email="support@carzupblog.com"
 *     )
 * )
 *
 * @OA\Server(
 *     url="http://localhost/api",
 *     description="Local API Server"
 * )
 */
abstract class Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
