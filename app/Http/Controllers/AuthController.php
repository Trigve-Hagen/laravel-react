<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'loginEmail' => 'required|string',
            'loginPassword' => 'required|string'
        ]);

        $user = User::where('email', '=', $validatedData['loginEmail'])->first();

        if(Hash::check($validatedData['loginPassword'], $user->password)) {
            return response()->json([
                'user' => $user,
                'message' => 'Success'
              ], 200);
        } else {
            return response()->json([
                'user' => $user,
                'message' => 'Failed'
              ], 200);
        }
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'registerName' => 'required|string',
            'registerEmail' => 'required|string',
            'registerPassword' => 'required|string'
        ]);

        $hashedPassword = Hash::make($validatedData['registerPassword']);

        $user = new User;
        $user->name = $validatedData['registerName'];
        $user->email = $validatedData['registerEmail'];
        $user->password = $hashedPassword;
        $user->save();

        return response()->json([
            'user' => $user,
            'message' => 'Success'
        ], 200);
    }

    public function logout(Request $request)
    {
        return response()->json('Ahhhh Damn You!');
    }
}
