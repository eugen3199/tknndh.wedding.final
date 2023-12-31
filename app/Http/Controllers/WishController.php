<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishes;
use Illuminate\Support\Facades\Session;

class WishController extends Controller
{
    public function index(Request $request)
    {
        $rsvp = Wishes::all()
            ->orderBy('id', 'desc')
            ->paginate(20);

        return view('admin.index')
            ->with('rsvp', $rsvp);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'descriptions' => 'required',
        ]);

        $response = Wishes::create($request->all());

        Session::put('wish', 'true');
        return redirect('/home');
        // return $response;
    }
}
