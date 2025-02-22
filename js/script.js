// white section 

// select elements by document 

// INPUTS

const in_mort_amount=document.getElementById("mort");

const in_term_amount=document.getElementById("term");

const in_int_rate=document.getElementById("intrest");

// END INputs

// RADIO

const rad_first=document.getElementById("one");

const rad_second=document.getElementById("two");

// END RADIO 

// CALCULATE BUTTON
const calc_button = document.getElementById("calc_rep")
// END CALCULATE BUTTON

// error of outline  
const container = document.getElementById("cont");



// CALC
const big_calc = document.getElementById("big_calc");

const small_calc = document.getElementById("small_calc");


// Error
const p_er_mort = document.getElementById("p-er-mort");
const p_er_number_mort = document.getElementById("p-er-number-mort");

const p_er_term = document.getElementById("p-er-term");
const p_er_number_term = document.getElementById("p-er-number-term");

const p_er_intrest = document.getElementById("p-er-intrest");
const p_er_number_intrest = document.getElementById("p-er-number-intrest");


// radio

const p_er_rad = document.getElementById("p-er-rad");


// Black sections 
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");

//end select elements by document


// verification of values in inputs 
let tab=[];
let count =0 ;
calc_button.addEventListener("click",function(event){
    event.preventDefault();
    let res;
    let res_month;
    res_month=in_mort_amount.value*in_int_rate.value/100
    res=in_mort_amount.value*in_term_amount.value*in_int_rate.value/100*12;


    // mort errors
    if(isNaN(res) || res===0  ||( rad_first.checked===false && rad_second.checked===false)){

    
    
    if( in_mort_amount.value==="" ||in_mort_amount.value==0 ){
        p_er_mort.style.display="block";
        container.classList["add"]("error");
        

    }else{
        p_er_mort.style.display="none";
    }
    if(isNaN(in_mort_amount.value)){
        p_er_number_mort.style.display="block";
    }else{
        p_er_number_mort.style.display="none";
    }

     // trem errors


     if( in_term_amount.value==="" || in_term_amount.value==0){
        p_er_term.style.display="block";
        container.classList["add"]("error");
        
        
    }else{
        p_er_term.style.display="none";
    }
    if(isNaN(in_term_amount.value) ){
        p_er_number_term.style.display="block";
    }else{
        p_er_number_term.style.display="none";
    }

    // percent


    if( in_int_rate.value==="" || in_int_rate.value==0){
        p_er_intrest.style.display="block";
        container.classList["add"]("error");
    }else{
        p_er_intrest.style.display="none";
    }
    if(isNaN(in_int_rate.value)){
        p_er_number_intrest.style.display="block";
    }else{
        p_er_number_intrest.style.display="none";
    }


    if(rad_first.checked===false && rad_second.checked===false){
        p_er_rad.style.display="block";
    }else{
        p_er_rad.style.display="none";
        
}


    }else{
        B2.style.display="block"
        B1.style.display="none"
        big_calc.innerHTML="$"+res_month;
        small_calc.innerHTML="$"+res;
        container.classList["remove"]("error")
        p_er_rad.style.display="none";
        p_er_number_intrest.style.display="none";
        p_er_intrest.style.display="none";
        p_er_mort.style.display="none";
        p_er_term.style.display="none";
        p_er_number_term.style.display="none";


        p_er_number_mort.style.display="none";





        window.scrollTo({
            top: 1000,
            behavior: 'smooth' // Optional: Adds smooth scrolling
          });
    
    
    }



})
   
    
    





    


       

        



       
    


        // p_er_mort.style.display="none";
        // p_er_term.style.display="none";
        // p_er_intrest.style.display="none";
        // p_er_rad.style.display="none";


        // go down when click the button 


        


    
    

   
   
    

    





