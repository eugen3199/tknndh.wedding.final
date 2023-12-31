<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>TK & NDH Wedding - Dashboard</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h3 class="text-center">RSVP List</h3>
		{{ $rsvp->links('pagination::bootstrap-5') }}
		<div class="table-responsive">
			<table class="table table-sm table-light table-striped">
				<thead>
					<tr>
						<td colspan="4">Total incoming</td>
						<td>{{ $total }}</td>
					</tr>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Status</th>
						<th>total</th>
					</tr>
				</thead>
				@foreach($rsvp as $r)
				<tr>
					<td>{{ ($loop->index + 1) + (($page-1) * 10) }}</td>
					<td>{{ $r->name }}</td>
					<td>{{ $r->phone }}</td>
					<td>
						@if($r->status == 1)
							<div class="bg-success text-light text-center">Accepted</div>
						@else
							<div class="bg-warning text-light text-center">Declined</div>
						@endif
					</td>
					<td>
						@if($r->extra == 1)
							1
						@elseif($r->extra > 0)
							+{{ $r->extra-1 }}
						@else
							0
						@endif
					</td>
				</tr>
				@endforeach
			</table>
		</div>
		<p>Page - {{ $page }}</p>
		{{ $rsvp->links('pagination::bootstrap-5') }}
	</div>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>