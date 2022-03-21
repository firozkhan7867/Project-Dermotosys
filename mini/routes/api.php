<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Controller;
use App\Models\schedule;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login',[LoginController::class,'login']);

Route::get('test',function (Request $request) {
    $data=schedule::all();
        return ["sucess"=>$data];
    });

Route::post('Addslot',[Controller::class,'CreateSloat']);

Route::get('getSloats',[Controller::class,'getSloats']);
Route::get('getDocs',[Controller::class,'getDocs']);
//getUserAppointements
Route::post('CreateAppoinment',[Controller::class,'CreateAppoinment']);
Route::get('getUserAppointements',[Controller::class,'getUserAppointements']);

Route::post('register',[AuthController::class,'register']);

Route::post('/appoint',[AuthController::class,'appointment']);

// Route::middleware('auth:sanctum')->get('/user', function () {

// });
