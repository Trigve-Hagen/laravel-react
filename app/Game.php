<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Game extends Model
{
    use Notifiable;

    protected $fillable = [
        'created_by_userid',
        'name',
        'description',
        'date',
        'team_one',
        'team_two',
        'lowest_score',
        'highest_score',
        'is_completed',
        'created_at',
        'updated_at'
    ];
}
