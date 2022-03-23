<?php
namespace App\models;
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\Patient;

class AuthController extends Controller
{
    public function register(Request $request){

        // dd("hhh");
        // $fields = $request->validate([
        //     'name'=>'required|string',
        //     'email'=>'required|string|unique:users,email',
        //     'password'=>'required|string',
        // ]);
        // dd($request);

        $user = User::Create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token=$user->createToken($request->email)->plainTextToken;
        $response=[
            'account' =>$user,
            'token' =>$token
        ];

        return response($response,201);
    }

    public function appointment(Request $request){
        $fields = $request->validate([
            'fname' => 'required|string',
            'lname' => 'required|string',
            'email' => 'required|string|unique:patients,email',
            'phone' => 'required|integer',
            'city' => 'required|string',
            'country' => 'required|string',
            'message' => 'required|string',
        ]);

        $user = Patient::Create([
            'fname' => $fields['fname'],
            'lname' => $fields['lname'],
            'email' => $fields['email'],
            'phone' => $fields['phone'],
            'country' => $fields['country'],
            'city' => $fields['city'],
            'message' => $fields['message'],
        ]);

        return  $user;

    }
}
