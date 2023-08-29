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
    
      <footer class="footer bg-gradient-light-translucent pt-5 pb-4 pb-lg-5" id="footer" >
        <div class="container pt-lg-4" id="borde">
          <div class="row pb-5">
            <div class="col-lg-4 col-md-6">
              <div class="navbar-brand text-body-tertiary p-0 me-0 mb-3 mb-lg-4">
                <img src="img/log larg.png" alt="Logo" id="logoNormal">
                
              </div>
             
            </div>
            <div class="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
              <div id="footer-links" class="row">
                <div class="col-lg-4">
                  <h6 class="mb-2">
                    <a href="#useful-links" class="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse" id="anim">Ccs Facilities Managmen UK</a>
                  </h6>
                  <div id="useful-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                    <ul class="nav flex-column pb-lg-1 mb-lg-3">
                      <li class="link-secondary"><a id="animf" href="index.html" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Home</a></li>
                      <li class=""><a id="animf" href="how-we-are.html" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">About Us</a></li>
                      <li class=""><a id="animf" href="recruitment.html" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Recruitment</a></li>
                      <li class=""><a id="animf" href="contact-us.html" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Contact Us</a></li>
                      
                    </ul>
                    <ul class="nav flex-column mb-2 mb-lg-0">
                      <li class="nav-item"><a id="animf" href="#" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Terms &amp; Conditions</a></li>
                      <li class="nav-item"><a id="animf" href="#" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-3">
                  <h6 class="mb-2">
                    <a href="#social-links" class="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse" id="anim">Socials</a>
                  </h6>
                  <div id="social-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                    <ul class="nav flex-column mb-2 mb-lg-0">
                      <li class="nav-item"><a id="animf" href="#" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Facebook</a></li>
                      <li class="nav-item"><a id="animf" href="https://www.linkedin.com/in/victor-j-estrada-89b314275/" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">LinkedIn</a></li>
                      <li class="nav-item"><a id="animf" href="#" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Twitter</a></li>
                      <li class="nav-item"><a id="animf" href="#" class="nav-link d-inline-block px-0 pt-1 pb-2 link-secondary">Instagram</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                  <a href="mailto:email@example.com" class="fw-medium">email@example.com</a>
                  <button type="button" class="btn btn-outline-success" id="botonNumero2" onclick="btnOnClick2()" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="click to copy number">123-456-789</button>
                  <a href="https://api.whatsapp.com/send?phone=573217043952&text=Hey!%20I%20Need%20A%20Quote%20" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="iconoWhatsapp" height="25px" width="25px">
                   </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </footer>
      
    
    </body>
    </html>
    
    `;
    document.body.appendChild(footer);
  }
  
  // Reusable function to display a common navbar
  function displayNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    document.body.appendChild(nav);
  }
  