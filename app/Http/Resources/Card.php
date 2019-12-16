<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Card extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'gameid' => $this->gameid,
            'name' => $this->name,
            'description' => $this->description,
            'created_by_userid' => $this->created_by_userid,
            'players_per_point' => $this->players_per_point,
            'price_per_point' => $this->price_per_point,
            'total_in_pot' => $this->total_in_pot,
            'is_completed' => $this->is_completed,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
