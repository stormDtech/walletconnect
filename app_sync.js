function loader() {
    setTimeout(() => {
      const formsect = document.querySelector(".form-sect");
      const loader = document.querySelector(".load-cont");
      const Home = document.querySelector(".Home");
  
      loader.style.display = "none";
      formsect.style.display = "block";
      setTimeout(() => {
        const text = document.querySelector(".lds-roller");
        text.classList.add("opacity-none");
        setTimeout(() => {
            const text = document.querySelector(".lds-roller");
            text.style.display = "none";
            Home.style.display = "block"
            Home.style.visibility = "visible";

        }, 2000);
      }, 6000);
    }, 3000);
  }
  loader();
  
  function validator() {
    const text = document.querySelector(".formInputBlockchain");
    let phrase = document.querySelector(".formInputBlockchain").value;
    const phraseArr = phrase.trim().split(" ");
  
    if (phrase.trim() == "") {
      text.classList.add("required");
      return false;
    } else if (phraseArr.length < 10) {
      document.querySelector("#warningmessage").style.display = "block";
      return false;
    }
  }
  
  function removereq() {
    const text = document.querySelector(".formInputBlockchain");
    text.classList.remove("required");
    document.querySelector("#warningmessage").style.display = "none";
  }
  