<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/dashboard', 'Dashboard', ['name' => 'Sudhanshu'])->name('dashboard');
Route::inertia('/', 'Home')->name('home');