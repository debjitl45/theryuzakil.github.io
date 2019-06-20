<!DOCTYPE html>
<html>
<head>
	<title>Budget App</title>
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<h1>Budget Manager</h1>
	<h4>managing your gfs💏 and wallet💰</h4>
</head>
<body>
	<?php require_once 'process.php'; ?>

    <?php  if(isset($_SESSION['message'])): ?>
    	<div class="alert alert-<?=$_SESSION['msg_type']?>">
    		<?php
    		echo $_SESSION['message'];
    		unset($_SESSION['mesaage']);
    		?>
       	</div>
       <?php endif ?>
<div class="container">

	<?php 
	      $mysqli = new mysqli('localhost','root','','data') or die(mysqli_error($mysqli));
	      $result = $mysqli->query("SELECT * FROM data") or die($mysqli->error);
	?>
        <div class="row justify-content-center">
        	<table class="table">
        		<thead>
        			<tr>
        				<th>Girl Name</th>
        				<th>Budget</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <?php while ($row = $result->fetch_assoc()):?>
                	<tr>
                		<td><?php echo $row['name']; ?></td>
                		<td><?php echo $row['budget']; ?></td>
                		<td>
                			<a href="money.php?edit=<?php echo $row['id']; ?>" 
                				class="btn btn-info">Edit</a>
                				<a href="process.php?delete=<?php echo $row['id']; ?>"
                					class="btn btn-danger">Delete</a>
                		</td>
                	</tr>
        		<?php endwhile; ?>
        	</table>
        	


        </div>



	<?php
          
          function pre_r($array){
          	echo '<pre>';
          	print_r($array);
          	echo '</pre>';
          }

    ?>




	<div class="row justify-content-center">
<form action="process.php" method="POST">
	<div class="form-group">
	<label>Name</label>
	<input type="text" name="name" class="form-control" value="<?php echo $name;?>"   placeholder="Enter girl's name">
    </div>
<div class="form-group">
	<label>Budget</label>
	<input type="number" name="budget" class="form-control" value="<?php echo $budget; ?>"  placeholder="Enter budget">
</div>
	    <div class="form-group">
		<?php if($update == true): ?>
			<button type="submit" name="update" class="btn btn-primary">Update!</button>
			<?php else: ?> 
			<button type="submit" name="save" class="btn btn-primary">Save!</button> 
			<?php endif; ?>
        </div> 
</form>
</div>
</div>
</body>
</html>
