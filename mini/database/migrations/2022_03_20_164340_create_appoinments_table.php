<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppoinmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appoinments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("doc_id");
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("patient_id");
            $table->unsignedBigInteger("slot_id");
            $table->timestamps();
            $table->foreign("doc_id")->references("id")->on("doctors")->cascadeOnDelete();
            $table->foreign("user_id")->references("id")->on("users")->cascadeOnDelete();
            $table->foreign("patient_id")->references("id")->on("patients")->cascadeOnDelete();
            $table->foreign("slot_id")->references("id")->on("schedules")->cascadeOnDelete();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appoinments');
    }
}
