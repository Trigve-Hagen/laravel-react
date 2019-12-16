<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Orders extends Model
{
    use Notifiable;

    protected $fillable = [
        'userid',
        'cardid',
        'team_one_point',
        'team_two_point',
        'total',
        'is_completed',
        'paykey',
        'created_at',
        'updated_at'
    ];
}
