<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>

  <style>
  	@keyframes run {
    from{transform:rotate(0deg)}
    to{transform:rotate(360deg)}
    }
    
    @keyframes xiao {
    from{transform:rotate(0deg)}
    to{transform:rotate(-360deg)}
    }
    
    section{
    position:relative;
    width:200px;
    height:200px;
    xbackground: grey;
    top:100px;
    left:100px;
    animation:run linear 5s infinite;
    animation-play-state:running;
    }
    
    section:hover{
    animation-play-state:paused;
    }
    
    div{
    xbackground: pink;
    width:50px;
    height:50px;
    animation:xiao linear 5s infinite
    }
    
    div:hover{
    animation-play-state:paused;
    }
  </style>
</head>


<body>
<section>
  <div>
  <span>ddd</span>
  </div>
  
</section>

</body>
</html>