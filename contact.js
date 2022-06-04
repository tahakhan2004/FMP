  //  Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARYBYa35gY0mKSZ_i53k_aipOaXMFCRng",
    authDomain: "towelmart-c972a.firebaseapp.com",
    projectId: "towelmart-c972a",
    storageBucket: "towelmart-c972a.appspot.com",
    messagingSenderId: "67818236732",
    appId: "1:67818236732:web:db8bf1e6fe76b19f040c39"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var db = firebase.database().ref('mesg/');

  function add(){

    var naam = document.getElementById('naam').value;
    var mail = document.getElementById('emils').value;
    var numb = document.getElementById('mynum').value;
    var txt = document.getElementById('tex').value;
    var key = db.push().key
    console.log(key);
    
        db.child(key).set({
            value:naam,
            email:mail,
            num:numb,
            text:txt,
            key:key  
          });
    }


    function num_restriction(){
        var numb = document.getElementById("mynum").value;
        if(numb.length > 11){
           alert("number should comprise of 11 digits only");
           
        }
     
        else if(numb.length < 11){
         alert("number should comprise of 11 digits");
         
      }
     }
     
     function validateEmail(){
         var emails = document.getElementById("emils").value;
         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(!(emails.match(mailformat))){
             alert("InValid Email address")
             // emails.focus();
             return false;
         }
         // else{
         //   alert("you have entered on valid")
         // //   emails.focus();
         //   return true;
         // }
     
     }