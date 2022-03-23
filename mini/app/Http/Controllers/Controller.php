<?php

namespace App\Http\Controllers;

use App\Models\Appoinment;
use App\Models\Doctor;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Patient;
use App\Models\Schedule;
use Illuminate\Support\Facades\Storage;

use WeakMap;

use Illuminate\Support\Facades\Validator;





class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;



    public function IsValidSloat($start, $end, $weekday, $doc_id)
    {
        $data = DB::select(DB::raw('
            select start,end from schedules where weekday="' . $weekday . '" and doc_id=' . $doc_id . '
        '));

        $res = array();

        foreach ($data as $d) {
            //start 9:01
            //end 10:01
            $existing_start = $d->start; //11:00
            $existing_end = $d->end; //11:10

            if (
                ($start >= $existing_start && $end <= $existing_end)  ||
                ($start <= $existing_start && $end >= $existing_end) ||
                ($start >= $existing_start && $start <= $existing_end) ||
                ($end >= $existing_start && $end <= $existing_end)    ||
                ($start <= $existing_start && $end <= $existing_start)
            ) {
                array_push($res, false);
            } else {
                array_push($res, true);
            }
        }



        if (in_array(false, $res)) {
            return false;
        } else {
            return true;
        }
    }

    public function CreateSloat(Request $req)
    {
        try {

            $start = $req->start;
            $end = $req->end;
            $start = date('H:i:s', strtotime($start));
            $end = date('H:i:s', strtotime($end));
            $weekday = $req->weekday;
            $doc_id = $req->id;

            if ($start && $end && $weekday && $doc_id) {
                if ($this->IsValidSloat($start, $end, $weekday, $doc_id)) {
                    $schedule = Schedule::Create([
                        'doc_id' => $doc_id,
                        'start' => $start,
                        'end' => $end,
                        'weekday' => $weekday,
                    ]);
                    // return $schedule;
                    return response(["Sucess" => $schedule]);
                } else {
                    return response(["Error" => "Invalid sloat", "Request" => $req->all()]);
                }
            } else {
                return response(["Error" => "Invalid Parameters [start,end,weekday,id] ", "Request" => $req->all()]);
            }
        } catch (\Exception $e) {
            $data = ["Error" => $e->getMessage(), "Request" => $req->all()];
            return response($data);
        }
    }


    public function getSloats(Request $req)
    {
        $doc_id = $req->id;
        $weekday = $req->weekday;

        if ($doc_id && $weekday) {

            $data = DB::select(DB::raw('
            select * from schedules where weekday="' . $weekday . '" and doc_id=' . $doc_id . '
        '));
            $res = ["Monday" => [], "Tuesday" => [], "Wednesday" => [], "Thursday" => [], "Friday" => [], "Saturday" => [], "Sunday" => []];
            foreach ($data as $d) {
                if (array_key_exists($d->weekday, $res)) {
                    //res[$d->weekday]=
                    array_push($res[$d->weekday], ["start" => $d->start, "end" => $d->end, "id" => $d->id, "status" => $d->isOpen]);
                } else {
                    $res[$d->weekday] = [["start" => $d->start, "end" => $d->end, "id" => $d->id, "status" => $d->isOpen]];
                }
            }

            $data = $res ? ["sucess" => $res] : ["Message" => "No Data Found"];
        } else if ($doc_id) {
            $data = DB::select(DB::raw('
            select * from schedules where doc_id=' . $doc_id . '
        '));

            //["Monday":[],"Tuesday":[],"Wednesday":[],"Thursday":[],"Friday":[],"Saturday":[],"Sunday":[]]
            $res = ["Monday" => [], "Tuesday" => [], "Wednesday" => [], "Thursday" => [], "Friday" => [], "Saturday" => [], "Sunday" => []];
            foreach ($data as $d) {
                if (array_key_exists($d->weekday, $res)) {
                    //res[$d->weekday]=
                    array_push($res[$d->weekday], ["start" => $d->start, "end" => $d->end, "id" => $d->id, "status" => $d->isOpen]);
                } else {
                    $res[$d->weekday] = [["start" => $d->start, "end" => $d->end, "id" => $d->id, "status" => $d->isOpen]];
                }
            }

            $data = $res ? ["sucess" => $res] : ["Message" => "No Data Found"];
        } else {
            $data = ["Error" => "Invalid inputs", "Request" => $req->all()];
        }

        return response($data);
    }



    /*
    to fetch the doctors from the database
    */
    public function getDocs(Request $req)
    {

        $data = DB::select(DB::raw('
            select * from doctors
        '));

        $data = $data ? $data : [];

        return response(["sucess" => $data]);
    }

    public function getUserAppointements(Request $req)
    {
        if ($req->id) {
            // $AppoinmentData=Appoinment::where('user_id', $req->id)->get();

            $data = DB::select(DB::raw('
                SELECT
                    appoinments.id AS appoinmentID,
                    schedules.id AS slotID,
                    schedules.weekday AS AppoinmentsDay,
                    schedules.start AS AppoinmentsStart,
                    schedules.end AS AppoinmentsEnd,
                    schedules.status AS AppoinmentsStatus,
                    schedules.isOpen AS AppoinmentsOpenStatus,
                    patients.id AS PatientsID,
                    patients.name AS PatientsName,
                    patients.email AS PatientsEmail,
                    patients.phno AS PatientsPhone,
                    patients.age AS PatientsAge,
                    patients.gender AS PatientsGender,
                    patients.message AS PatientsMessage,
                    patients.profilepic AS PatientsProfilePic,
                    doctors.id AS DoctorsID,
                    doctors.name AS DoctorsName,
                    users.id AS UserID,
                    users.name AS UserName,
                    users.email AS UserEmail,
                    users.profilepic AS UserProfilePic
                FROM
                    appoinments,
                    schedules,
                    patients,
                    doctors,
                    users
                WHERE
                appoinments.doc_id=doctors.id AND
                appoinments.user_id=users.id AND
                appoinments.patient_id=patients.id AND
                appoinments.slot_id=schedules.id AND
                users.id=' . $req->id . '
            '));

            // dd($data);
        } else {
            $data = ["Error" => "Invalid inputs", "Request" => $req->all()];
        }
        return response($data);
    }


    /*
    Create Appointement
    name=shivaji
    &email=shivaji
    &phone=555
    &age=10
    &gender=male
    &message=ds
    &doc_id=1
    &user_id=1
    &slot_id=1
    */
    public function CreateAppoinment(Request $req)
    {

        try {
            $name = $req->name;
            $email = $req->email;
            $phno = $req->contact;
            $age = $req->age;

            $message = $req->message;
            $gender = $req->gender;

            $slot_id = $req->slot_id;
            $doc_id = $req->doctor;
            $user_id = $req->user_id;


            $PatientData = Patient::Create([
                'name' => $name,
                'email' => $email,
                'phno' => $phno,
                'age' => $age,
                'gender' => $gender,
                'message' => $message,
            ]);

            $PatientId = $PatientData->getAttributes()["id"];

            $AppointmentData = Appoinment::Create([
                'doc_id' => $doc_id,
                'user_id' => $user_id,
                'patient_id' => $PatientId,
                'slot_id' => $slot_id,
            ]);

            $AppointmentId = $AppointmentData->getAttributes()["id"];

            $DoctorData = Doctor::find($doc_id);
            $UserData = User::find($user_id);
            $SlotData = Schedule::find($slot_id);

            $SlotData->isOpen = 0;

            $SlotData->save();


            $data = ["sucess" => [
                "AppointmentId" => $AppointmentId,
                "DoctorId" => $doc_id,
                "AppointmentData" => $AppointmentData->getAttributes(),
                "DoctorData" => $DoctorData->getAttributes(),
                "UserData" => $UserData,
                "PatientData" => $PatientData->getAttributes(),
                "SlotData" => $SlotData
            ]];
        } catch (\Exception $e) {

            $data = ["Error" => $e->getMessage(), "Request" => $req->all()];
        }


        return response($data);
    }





    public function UploadUserProfilePic(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'id' => 'required',
                'pic' => 'required|mimes:jpg',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }


        if ($user = User::find($request->id)) {
            $fileName = md5($request->id) . "." . $request->file('pic')->extension();
            $request->pic->move(public_path("user_images"), $fileName);
            // $user=User::find($request->id);
            $user->profilepic = $fileName;
            $user->save();

            return response()->json([
                "success" => true,
                "message" => "File successfully uploaded",
                "file" => $fileName
            ]);
        } else {
            $data = ["Error" => "Invalid User Id", "Request" => $request->all()];
            return response($data);
        }
    }




    public function UpdateUser(Request $req)
    {
        try {

            if ($user = User::find($req->id)) {
                $user->firstname = $req->firstname;
                $user->lastname = $req->lastname;
                $user->phno = $req->phno;
                $user->bloodgroup = $req->bloodgroup;
                $user->address = $req->address;
                $user->city = $req->city;
                $user->state = $req->state;
                $user->country = $req->country;
                $user->zipcode = $req->zipcode;
                $user->dob = $req->dob;
                if ($req->pic) {
                    $fileName = md5($req->id) . "." . $req->file('pic')->extension();
                    $req->pic->move(public_path("user_images"), $fileName);
                    $user->profilepic = $fileName;
                }

                $user->save();

                return response(["sucess" => $user->getAttributes()]);
            } else {

                return response(["Error" => "Invalid User Id", "Request" => $req->all()]);
            }
        } catch (\Exception $e) {

            $data = ["Error" => $e->getMessage(), "Request" => $req->all()];
        }
    }



    public function DelSlot(Request $req)
    {
        if ($schedule = Schedule::find($req->sid)) {
            // Schedule
            $schedule->delete();
            return response(["sucess" => "Sucessfully Deleted"]);
        } else {
            return response(["Error" => "Invalid Slot Id", "Request" => $req->all()]);
        }
    }

}
