@extends('layouts.app')
@section('title', 'Subject add')
@section('content')

<main class="page-content">
	<h6 class="text-uppercase">Update Subject</h6>
	<hr>
	<div id="stepper1" class="bs-stepper">
		<div class="card">


			<div class="card-body">
				<div class="bs-stepper-content">

					<form action="" method="POST">
                    {{@csrf_field()}}


						<div class="row g-3">
							<div class="col-12 col-lg-6">
								<label for="Subject Name" class="form-label">Subject Name</label>
								<input type="text" class="form-control" placeholder="Class Name" name="name" value="{{$getRecord->name}}">
							</div>
                        </div>

                        <div class="row g-3">
							<div class="col-12 col-lg-6"><br>
								<label for="subject" class="form-label">Subject Type</label>
								<select class="form-select mb-6" aria-label="Default select example" name="type">
									<option selected value="">Select Type</option>
									<option {{($getRecord->type == 'Theory') ? 'selected' : ''}} value="Theory">Theory</option>
									<option {{($getRecord->type == 'Practical') ? 'selected' : ''}} value="Practical">Practical</option>
								</select>
							</div>
                        </div>
                        <div class="row g-3">
							<div class="col-12 col-lg-6"><br>
								<label for="status" class="form-label">Status</label>
								<select class="form-select mb-6" aria-label="Default select example" name="status">
									<option {{($getRecord->status == 0) ? 'selected' : ''}}  value="0">Active</option>
									<option {{($getRecord->status == 1) ? 'selected' : ''}} value="1">Inactive</option>
								</select>
							</div>
                        </div>


                        
                        
						<div class="col-12 col-lg-6">
							<button class="btn btn-primary px-4" type="submit">Update<i class='bx bx-right-arrow-alt ms-2'></i></button>
						</div>
				</div>
			</div>
		</div>
	</div>
</main>


@endsection