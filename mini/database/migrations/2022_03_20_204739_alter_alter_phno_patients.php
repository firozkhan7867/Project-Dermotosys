<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAlterPhnoPatients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //$table->text('text')->change();
        // Schema::create('patients', function (Blueprint $table) {
        //     $table->id();
        //     $table->string("name");
        //     $table->string("email");
        //     $table->integer("phno");
        //     $table->integer("age");
        //     $table->string("gender");
        //     $table->text('message');
        //     $table->timestamps();
        // });

        Schema::table('patients', function ($table) {
            $table->string('phno')->change();
            $table->string('age')->change();
            
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
