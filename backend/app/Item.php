<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function receipts()
    {
        return $this->belongsToMany(Receipt::class);
    }
}
