<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{

    public function index()
    {
        $teacher = User::where('user_type', 2)->get();
        return Inertia::render('User', ['users' => $teacher]);
        
    }
}
