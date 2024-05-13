module.exports = `
<!doctype html>
<html class="auth0-lock-html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta name="author" content="hinge health">
    <meta name="description" content="Easily link two accounts into one">
    <title>Account Linking Extension</title>
    <link rel="shortcut icon" href="https://auth0.com/auth0-styleguide/img/favicon.png" />
    <style>
    .auth0-lock-container {
    font-family: Brown;
src: url(https://assets.ctfassets.net/hjcv6wdwxsdz/79qKfazNU8OVDk4Ie6opk7/da728934c04ec1a1882d64dee6c5b9dd/BrownLLWeb-Regular.woff2);
    }
    .auth0-lock-alternative {
    display:none;
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 16px;
    }
    .auth0-lock-form p {
      font-size: 18px !important;
    }
    </style>
      {{ ExtensionCSS }}
      {{ CustomCSS }}
  </head>
  <body>
    
    {{ Auth0Widget }}
    {{ ExtensionScripts }}
    <script>
    var userLang = navigator.language || navigator.userLanguage; 
    if (userLang.includes('en')) {
        document.getElementById("message").innerHTML = "It looks like you have another account with Hinge Health with the same email address. We recommend you link these accounts.";
        document.getElementById("header-title").innderText = "Link your accounts";
        document.getElementById("label-value").innderText = "Continue";
    } else if (userLang.includes('fr')) {
        document.getElementById("message").innerHTML = "Il semble que vous ayez un autre compte avec la même adresse e-mail. Nous vous recommandons de lier ces comptes.";
        document.getElementById("header-title").innderText = "Liez vos comptes";   
        document.getElementById("label-value").innerText = "Continuer";
    } else if (userLang.includes('es')) {
        document.getElementById("message").innerHTML = "Parece que ya tienes otra cuenta con la misma dirección de correo electrónico. Recomendamos que vincules las cuentas.";
        document.getElementById("header-title").innerText = "Vincula tus cuentas"; 
        document.getElementById("label-value").innerText = "Continuar";
    }      
    window.onload = function(e) {
      document.getElementById("skip").onclick = function() {
        this.href = "https://www.google.com ";
      };
    }();// invoke the function     
      document.getElementById("skip").innerHTML = "Skip";
    </script> 
  </body>
</html>
`;
