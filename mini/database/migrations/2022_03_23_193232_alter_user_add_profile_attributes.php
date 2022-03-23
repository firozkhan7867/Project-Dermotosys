<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterUserAddProfileAttributes extends Migration
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
            $table->string("firstname");
            $table->string("lastname");
            $table->string("phno");
            $table->string("bloodgroup");
            $table->text("address");
            $table->string("city");
            $table->string("state");
            $table->string("country");
            $table->string("zipcode");
            $table->date("dob")->nullable();
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
