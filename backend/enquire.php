<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","prettau");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{

        if (isset($_POST["name"]))
            {
                $name = $_POST["name"];
            } 
            if(isset($_POST['email']))
            {
                $email =$_POST['email'];
            }
                 
            $sql = "INSERT INTO enquiry(name,email) VALUES('$name','$email');";
            $res = mysqli_query($conn, $sql);
            $conn->close();
    }
?>