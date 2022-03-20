<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appoinment extends Model
{
    use HasFactory;
    protected $fillable = [
        'doc_id',
        'user_id',
        'patient_id',
        'slot_id'
    ];
}
