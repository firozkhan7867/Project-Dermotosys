<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Patient;
use App\Models\schedule;
use WeakMap;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;



    public function IsValidSloat($start,$end,$weekday,$doc_id){
        $data=DB::select(DB::raw('
            select start,end from schedules where weekday="'.$weekday.'" and doc_id='.$doc_id.'
        '));


        $res=array();

        foreach ($data as $d)
        {
            //start 9:01
            //end 10:01
            $existing_start=$d->start; //11:00
            $existing_end=$d->end; //11:10

            if (
                 ($start >= $existing_start && $end<= $existing_end)  ||
                 ($start <= $existing_start && $end >= $existing_end) ||
                 ($start >= $existing_start && $start<= $existing_end)||
                 ($end >= $existing_start && $end<= $existing_end)
                 ) {
                array_push($res,false);
            } else {
                array_push($res,true);
            }

        }

        // dd($start,$end,$data,$res);

        if(array_search(false,$res))
        {
            return false;
        }
        else{
            return true;
        }


    }

    public function CreateSloat(Request $req) {
        $start=$req->start;
        $end=$req->end;
        $start=date('H:i:s', strtotime($start));
        $end=date('H:i:s', strtotime($end));
        $weekday=$req->weekday;
        $doc_id=$req->id;

        if($this->IsValidSloat($start,$end,$weekday,$doc_id))
        {
            $schedule = schedule::Create([
                'doc_id' => $doc_id,
                'start' => $start,
                'end' => $end,
                'weekday' => $weekday,
            ]);
            return $schedule;
        }
        else{
            return response(["Error"=> "Invalid sloat"]) ;

        }



    }


    public function getSloats(Request $req){
        $doc_id=$req->id;
        $weekday=$req->weekday;

        if($doc_id && $weekday)
        {

            $data=DB::select(DB::raw('
            select * from schedules where weekday="'.$weekday.'" and doc_id='.$doc_id.'
        '));
            $data=$data?["sucess"=>$data]:["Message"=> "No Data Found"];
        }
        else if($doc_id){
            $data=DB::select(DB::raw('
            select * from schedules where doc_id='.$doc_id.'
        '));
        $data=$data?["sucess"=>$data]:["Message"=> "No Data Found"];
        }
        else{
            $data=["Error"=> "Invalid inputs"];
        }

        return response($data);
    }


}
