// Reusable function to display a common footer
function displayFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/x-icon" href="img/icon-lo.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CCS Facilities Managmen uk</title>
        <link href="css/styles.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Sans+Pro:ital,wght@0,300;0,400;1,200;1,300&display=swap" rel="stylesheet">
      </head>
    </head>
    <body>
    
      <div class="border-top">
        <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p class="col-md-4 mb-0 text-muted">© 2023 facilities management</p>
      
          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img id="navImg" src="img/icon-lo.png" alt="logo" height="80px" width="70px" >
          </a>
      
          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About Us</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Recruitment</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
          </ul>
        </footer>
      </div>
    
    </body>
    </html>
    
    `;
    document.body.appendChild(footer);
  }
  
  // Reusable function to display a common navbar
  function displayNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    
        <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-center" id="elnav">
            <div class="container-fluid justify-content-center container">

                
                <a class="navbar-brand text-center" href="index.html">
                    <img id="navImg" src="img/icon-lo.png" alt="logo" height="80px" width="70px" >
                </a> 
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                
                <ul class="navbar-nav">
                
                  <li class="nav-item">
                    <a id="txtNav" class="nav-link active" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a id="txtNav" class="nav-link" href="how-we-are.html">About us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a id="txtNav" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cleaning Services
                    </a>
                    <ul class="dropdown-menu text-center" >
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Maintenance services</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Consumables and janitorial supplies</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Office cleaning</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Carpet c</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Windo c reach and wash</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Jetting wash services</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Graffiti removal</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Afther building</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">One off</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Afther party cleaning</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Residential and domestic.</a></li>                        
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a id="txtNav" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Maintenance Services
                    </a>
                    <ul class="dropdown-menu text-center" >
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Maintenance</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Plumbing services</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Electricity services</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Painting and decorating</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Tailing.</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Guttering clean and repair service.</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Dismantle and Unsamble services.</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Jet washed services</a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Wasted removal </a></li>
                        <li><a id="txtNavHijo" class="dropdown-item" href="">Rubbish collection.</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a id="txtNav" class="nav-link" href="recruitment.html">Recruitment</a>
                  </li>
                  <li class="nav-item">
                    <a id="txtNav" class="nav-link" href="contact-us.html">Contact Us</a>
                  </li>


                </ul>

                
                <a href="https://api.whatsapp.com/send?phone=573217043952&text=Hey!%20I%20Need%20A%20Quote%20" target="_blank" rel="noopener noreferrer">
                    <img id="margeniconow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="iconoWhatsapp" height="50px" width="50px">
                </a>

              </div>
            </div>
          </nav>
    

   

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
    document.body.appendChild(nav);
  }
  