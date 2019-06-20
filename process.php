<?php
session_start();

$mysqli = new mysqli('localhost','root','','data') or die(mysqli_error($mysqli));

$name = '';
$budget = '';
$update = false;

if(isset($_POST['save'])){
	$name = $_POST['name'];
	$budget = $_POST['budget'];
	$mysqli->query("INSERT INTO data(name, budget) VALUES('$name','$budget')") or die($mysqli->error);

	$_SESSION['message']  = "Record has been saved!";
	$_SESSION['msg_type'] = "success";
	header("location: index.php");
}
if(isset($_GET['delete'])){
	$id = $_GET['delete'];
	$mysqli->query("DELETE FROM data WHERE id='$id'") or die($mysqli->error());

	$_SESSION['message']  = "Record has been deleted!";
	$_SESSION['msg_type'] = "danger";
	header("location: index.php");
}

if(isset($_GET['edit'])){
	$id = $_GET['edit'];
	$update = true;
	$result = $mysqli->query("SELECT * FROM data WHERE id='$id' ") or die($mysqli->error());
	if($result)
	{
		$row = $result->fetch_array();
		$name = $row['name'];
		$budget = $row['budget'];
	}

}
header("location: index.php");

?>
