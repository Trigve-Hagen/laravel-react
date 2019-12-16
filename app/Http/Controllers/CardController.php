<?php

namespace App\Http\Controllers;

use App\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function store(Request $request)
      {
        $validatedData = $request->validate([
            'gameid' => 'required',
            'name' => 'required',
            'description' => 'required',
            'players_per_point' => 'required',
            'price_per_point' => 'required',
            'total_in_pot' => 'required',
        ]);

        $card = Card::create([
          'created_by_userid' => Auth::user()->id,
          'gameid' => $validatedData['gameid'],
          'name' => $validatedData['name'],
          'description' => $validatedData['description'],
          'players_per_point' => $validatedData['players_per_point'],
          'price_per_point' => $validatedData['price_per_point'],
          'total_in_pot' => $validatedData['total_in_pot']
        ]);

        return $card->toJson();
      }

      public function markAsCompleted(Card $card)
      {
        $card->is_completed = true;
        $card->update();

        return response()->json('Card updated!');
      }
}
