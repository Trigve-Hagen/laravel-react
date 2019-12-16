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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
//Route::group(['middleware' => 'Authenticate'], function () {
    Route::post('/auth/login', 'AuthController@login');
    Route::post('/auth/register', 'AuthController@register');
//});

Route::group(['middleware' => 'IsAdmin'], function () {
    Route::get('/admins/dashboard', 'AdminController@index')->name('admins.dashboard');
});


