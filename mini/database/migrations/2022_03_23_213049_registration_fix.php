<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RegistrationFix extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('users', function ($table) {
            $table->string("firstname")->nullable()->change();
            $table->string("lastname")->nullable()->change();
            $table->string("phno")->nullable()->change();
            $table->string("bloodgroup")->nullable()->change();
            $table->text("address")->nullable()->change();
            $table->string("city")->nullable()->change();
            $table->string("state")->nullable()->change();
            $table->string("country")->nullable()->change();
            $table->string("zipcode")->nullable()->change();
            $table->date("dob")->nullable()->nullable()->change();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
