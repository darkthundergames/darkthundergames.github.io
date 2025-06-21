var html = '<a href="index.html"><img class="logo" src="img/logo.png"></a>'

html += '<div class="navlink"><a href="index.html"><button>Home</button></a></div>';
html += '<div class="navlink"><a href="games.html"><button>Games</button></a></div>';
html += '<div class="navlink"><a href="about.html"><button>About</button></a></div>';
html += '<div class="navlink"><a href="socials.html"><button>Socials</button></a></div>';
html += '<div class="navlink"><a href="news.html"><button>News</button></a></div>';

document.getElementById("navbar").innerHTML = html;