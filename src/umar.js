// include alphine.js 
var chance = document.getElementById('chance');

// var y = 123456;
// document.getElementById("type").innerHTML = Math.ceil(Math.random()*1000000) + "ab";
      
    function showLinkWhenScrolled() {

        // Get references to your section elements
        let home = document.querySelector('#home');
        let about = document.querySelector('#about');
        let why_choose = document.querySelector('#why_choose');
        let contact_us = document.querySelector('#contact_us');

        // Get references to your navigation links
        let homeLink = document.querySelector('a[href="#home"]');
        let aboutLink = document.querySelector('a[href="#about"]');
        let whyChooseLink = document.querySelector('a[href="#why_choose"]');
        let contactUsLink = document.querySelector('a[href="#contact_us"]');

        // Define the classes you want to add for the active link
        // This makes it easier to manage and avoid typos
        const activeClasses = ['text-white', 'bg-green-700', 'py-1', 'px-4', 'rounded-full' ,
                               'transition' , 'duration-700' , 'ease-out'];

        window.addEventListener('scroll', () => {

            // Function to remove active classes from ALL links
            // We'll call this at the beginning of each check to ensure only one is active
            function removeAllActiveClasses() {
                homeLink.classList.remove(...activeClasses);
                aboutLink.classList.remove(...activeClasses); 
                whyChooseLink.classList.remove(...activeClasses);
                contactUsLink.classList.remove(...activeClasses);
            }

            // Check if the 'home' section is in view
            // It's at the top (or above) and 'about' is still below
            if (home.getBoundingClientRect().top <= 0 && about.getBoundingClientRect().top > 0) {
                removeAllActiveClasses(); // Remove from all first
                homeLink.classList.add(...activeClasses); // Then add to the current one
            }
            // Check if 'about' section is in view
            else if (about.getBoundingClientRect().top <= 0 && why_choose.getBoundingClientRect().top > 0) {
                removeAllActiveClasses();
                aboutLink.classList.add(...activeClasses);
            }
            // Check if 'why_choose' section is in view
            else if (why_choose.getBoundingClientRect().top <= 0 && contact_us.getBoundingClientRect().top > 0) {
                removeAllActiveClasses();
                whyChooseLink.classList.add(...activeClasses);
            }
            // Check if 'contact_us' section is in view (simplified for the last section)
            // It just needs to be at or above the top of the viewport
            else if (contact_us.getBoundingClientRect().top <= 0) {
                removeAllActiveClasses();
                contactUsLink.classList.add(...activeClasses);
            }
            // If none of the above conditions are met (e.g., scrolled to the very top,
            // or in a gap between sections if your layout has them)
            else {
                removeAllActiveClasses(); // Ensure no links are active
            }
        });
    }

    // Call the function when the page loads
    // This is generally better practice than just running it immediately,
    // to ensure all elements are available in the DOM.
    document.addEventListener('DOMContentLoaded', showLinkWhenScrolled);    

 
  function fixedHeroSectWhenScrolled(){

    //define reference to ur section
    let up_nav = document.querySelector('#up_nav')
    let hero = document.querySelector('#heroNavBar');


    //defie classFunction when condition is met
    const activeClasses = ['fixed' , 'z-30' , 'top-0'];

    window.addEventListener('scroll', () => {
      
      if(hero.getBoundingClientRect().top <= 0 && up_nav.getBoundingClientRect().top < 0)
        { // CORRECTED LINE
        hero.classList.add(...activeClasses);
      }
      else if (up_nav.getBoundingClientRect().top >= 0) 
        {          
        hero.classList.remove(...activeClasses);
      }
    });

  }

  // You must CALL the function for it to execute.
  // It's good practice to wait for the DOM to be fully loaded.
  document.addEventListener('DOMContentLoaded', fixedHeroSectWhenScrolled);


// // script for when toggleMenu is click it bring the dropMenu -->

let offScreenMenu = document.querySelector(".off-screen-menu");
let hamburger = document.querySelector(".hamburger");
let fa_xmark = document.querySelector(".fa-xmark");
 
function toggleMenu() {
    offScreenMenu.classList.toggle('active');
}

function gone() {
    offScreenMenu.classList.remove('active');
}

hamburger.addEventListener("click", toggleMenu);
fa_xmark.addEventListener("click", gone);

//menu ends here


    
    var hide = document.getElementById("hide");
    var body = document.body;
    var cancle = document.getElementById("click") ;// Get a reference to the body element
    // let x = '17';
    // let 

    let nameInput = document.getElementById("full-Name").value;  
    let emailInput = document.getElementById("email").value;
    let messageInput = document.getElementById("message").value;
    let submitInput = document.getElementById("submit");
    let succeffulMessege = document.getElementById("succeffulMessege");


function fullName(){
    nameInput = "Mr/Ms " + userName;    

}

if(nameInput){
        nameInput.addEventListener("click" , fullName)
    }

function changeDark() {
    
    chance.style.display = "block";
    hide.style.display ="block";
    
    // Disable scrolling and interaction on the body
    body.style.overflow = "hidden"; // Prevents scrolling
}

//concelling the apply now pop up
let cancle_btn = document.querySelector(".cancle_btn");

function concle() {
    // Hide the pop-up
    chance.style.display = "none";
    succeffulMessege.style.display = "none";
    hide.style.display ="none";
    
    // Re-enable scrolling and interaction on the body
    body.style.overflow = "auto"; // Or "initial" or "" to revert to default
    body.style.pointerEvents = "auto"; // enables clicks
}
cancle_btn.addEventListener("click", concle);


function changeBackGround(){ 
     chance.classList.toggle('active');        
}
     changebg.addEventListener("click" , changeBackGround);

    
let submitName = document.getElementById('submitName');
let names = document.getElementById('names');
let nameagain = document.getElementById("nameagain")
let welcomeNameInput = document.getElementById('welcomeName');
let copyy = document.getElementById("copyy"); 
let disapear = document.getElementById("disapear")

function clientName(userName){
    if(!userName){
        return window.alert("please enter your name");
    }
    else {
        names.innerHTML = "Hi" + " " + userName;
        disapear.style.display = "none";
    }
    
}

submitName.addEventListener("click", function(){
    let updatName = welcomeNameInput.value;
        welcomeNameInput.value = null;
        copyy.innerHTML = updatName + ",";
         nameagain.innerHTML = "Hi"+ " " + copyy.innerHTML;
    clientName(updatName);
});


//create my arrays username, password, phonenumber

let username = ["ojo", "basheer" , "fatah"];
let password = ["123" , "234" , "345"];
let phone_number = [ "08123434328" , "07093737833" , "09123847659"];

//function to check if uername already exist

function checkUserName(newusername , newpassword , newphonennumber){

    if(username.includes(newusername)){
        console.log("sorry" + " "+ newusername +" " +  "this username has been taken")
        console.log(username)

    }
    else{
        console.log("congratulatios" + "" + newusername + "" + "your registration is succeful");
        username.push(newusername);
        password.push(newpassword);
        phone_number.push(newphonennumber);
        console.log(username);
        console.log(username.indexOf(newusername));
        console.log(password);
        console.log(phone_number);

    }};

    let collectedusername = "jo";
    let collectedpassword = "445";
    let collectedphonenumber = "08134374758";
    checkUserName(collectedusername , collectedpassword, collectedphonenumber);


    function authenticateUser (inputUsername , inputPassword){
        let nameIndex = username.indexOf(inputUsername);
        if(nameIndex == -1){
            console.log("incorrect username");

        }
        if(password[nameIndex]==inputPassword){
            console.log("congratulation u hv succefully login");
            console.log(password[nameIndex])
        }
        else{
            console.log("sorry u hv input incorrext credentioal")
        }};

    inputUsername = "ojo"
    inputPassword = "123"
    authenticateUser(inputUsername , inputPassword);

        console.log(username);
        console.log(phone_number);
        console.log(password);
        console.log(username.splice(2,0, "aaa"));
        // console.log(username.splice(1, 0,"aishah"));
        console.log(username.length);
        console.log(username.toString())
        
//about sub menu showing up
let aboutt = document.getElementById("aboutt");
let submenu = document.getElementById("submenu");
// let rotateIcon = document.querySelector(".rotate-icon");

function subMenuShowUp(){
     if (submenu.style.display =='none') {
        submenu.style.display ='block';
        
    } else {
        submenu.style.display ='none';
    }
}
aboutt.addEventListener("click", subMenuShowUp);
//    

// aboutt.addEventListener("click", submenuShowUp);
