<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Game extends JsonResource
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
            'created_by_userid' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'date' => $this->date,
            'team_one' => $this->team_one,
            'team_two' => $this->team_two,
            'lowest_score' => $this->lowest_score,
            'highest_score' => $this->highest_score,
            'is_completed' => $this->is_completed,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
