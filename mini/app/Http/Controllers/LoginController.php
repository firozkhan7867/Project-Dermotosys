<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    //
    function index(){
        return view('signup');
    }

    
    function login(Request $request){
        $userinfo=user::where('email','=',$request->email)->first();
        
        if(!$userinfo){
            return response(['message'=> ['Error']],404);
        }
        else{
            if(Hash::check($request->password,$userinfo->password)){
                $token=$userinfo->createToken($request->email)->plainTextToken;
                $response=[
                    'account' =>$userinfo,
                    'token' =>$token
                ];
                return response($response,201);


            }
        }
    }


    // function register(Request $request){

    // }
}
