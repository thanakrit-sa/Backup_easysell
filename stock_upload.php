<?php
if(!empty($_FILES))
{
	foreach ($_FILES['file']['name'] as $value) {
		echo $value."<br>";
	}
}
else
{
	echo "2222";
}
?>