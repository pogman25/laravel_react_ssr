<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$data = [
    [ 'id' => 1, 'text' => 'Google.com'],
    [ 'id' => 2, 'text' => 'Yandex.ru'],
    [ 'id' => 3, 'text' => 'Bing.com'],
    [ 'id' => 4, 'text' => 'Duckduck.go'],
    [ 'id' => 5, 'text' => 'Yahoo.com'],
];

Route::get('/', function () use($data) {
    return view('welcome', ['data' => $data]);
});

Route::get('/sample', function () use($data) {
    return response()->json($data);
});

