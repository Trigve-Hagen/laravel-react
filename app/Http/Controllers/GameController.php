<?php

namespace App\Http\Controllers;

use Auth;
use App\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function index()
      {
        $games = Game::where('is_completed', false)
                            ->orderBy('created_at', 'desc')
                            ->withCount(['cards' => function ($query) {
                              $query->where('is_completed', false);
                            }])
                            ->get();

        return $games->toJson();
      }

      public function store(Request $request)
      {
        $validatedData = $request->validate([
          'name' => 'required',
          'description' => 'required',
          'date' => 'required',
          'team_one' => 'required',
          'team_two' => 'required',
          'lowest_score' => 'required',
          'highest_score' => 'required',
        ]);

        $game = Game::create([
          'created_by_userid' => Auth::user()->id,
          'name' => $validatedData['name'],
          'description' => $validatedData['description'],
          'date' => $validatedData['date'],
          'team_one' => $validatedData['team_one'],
          'team_two' => $validatedData['team_two'],
          'lowest_score' => $validatedData['lowest_score'],
          'highest_score' => $validatedData['highest_score'],
        ]);

        return response()->json('Game created!');
      }

      public function show($id)
      {
        $game = Game::with(['cards' => function ($query) {
          $query->where('is_completed', false);
        }])->find($id);

        return $game->toJson();
      }

      public function markAsCompleted(Game $game)
      {
        $game->is_completed = true;
        $game->update();

        return response()->json('Game updated!');
      }
}
