<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;

Route::inertia('/dashboard', 'Dashboard', ['name' => 'Sudhanshu'])->name('dashboard');
Route::inertia('/', 'Home')->name('home');

Route::resource('customers', CustomerController::class);