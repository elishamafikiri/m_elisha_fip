			function toggle() {
				var trailer= document.querySelector(".trailer")
				var video= document.querySelector("video")
				trailer.classList.toggle("active");
				video.pause();
				video.currentTime = 0;
			}

			const hamburger = document.querySelector(".hamburger");
			const navLinks = document.querySelector(".nav-links");
			const links = document.querySelectorAll(".nav-links li");

			hamburger.addEventListener("click", () => {
			  navLinks.classList.toggle("open");
			  links.forEach(link => {
			    link.classList.toggle("fade");
			  });
			});