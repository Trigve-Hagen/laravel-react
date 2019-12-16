<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Card extends Model
{
    use Notifiable;

    protected $fillable = [
        'gameid',
        'name',
        'description',
        'created_by_userid',
        'players_per_point',
        'price_per_point',
        'total_in_pot',
        'is_completed',
        'created_at',
        'updated_at'
    ];
}
