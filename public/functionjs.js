function login_as_admin(){
    let email = document.forms["login_form"]["email"].value;
    let pwd = document.forms["login_form"]["pwd"].value;
    // TODO
    if(0){
        alert("Invalid email");
        return true;
    }
    if(0){
        alert("Wrong Password");
        return true;
    }
    window.location.href = "./admin_1.html";
    return false;
}

function func_admin(){
    // let e = document.getElementById("admin_");
    // e.innerHTML += "| "+admin+" ";
}

function login_as_dept_ath(){
    let dept_id = document.forms["login_form"]["dept_id"].value;
    let pwd = document.forms["login_form"]["pwd"].value;
    // TODO
    if(0){
        alert("Invalid Department ID");
        return true;
    }
    if(0){
        alert("Wrong Password");
        return true;
    }
    window.location.href = "./dept_ath_1.html";
    return false;
}

function func_dept_ath(){
    // let e = document.getElementById("dept_ath_");
    // e.innerHTML += "| "+dept+" ";
}

function login_as_student(){
    let srn = document.forms["login_form"]["srn"].value;
    let pwd = document.forms["login_form"]["pwd"].value;
    // TODO
    if(0){
        alert("Invalid SRN");
        return true;
    }
    if(0){
        alert("Wrong Password");
        return true;
    }
    var student=srn;
    window.location.href = "./student_1.html";
    return false;
}

function func_student(){
    let e = document.getElementById("student_");
    e.innerHTML += "| "+student+" ";
}

function register_student(){
    let srn = document.forms["reg_std_form"]["srn"].value;
    let pwd = document.forms["reg_std_form"]["pwd"].value;
    let yog = document.forms["reg_std_form"]["yog"].value;
    // TODO
    if(0){
        alert("invalid SRN");
        return true;
    }
    if(0){
        alert("invalid Year of Graduation");
        return true;
    }
    alert("student with SRN: "+srn+" registered");
    return false;
}

function delete_student(){
    let srn = document.forms["del_std_form"]["srn"].value;
    // TODO
    if(0){
        alert("SRN does not exist");
        return true;
    }
    alert("student with SRN: "+srn+" deleted");
    return false;
}

function impose_due(){
    let srn = document.forms["impose_due_form"]["srn"].value;
    let amt = document.forms["impose_due_form"]["amt"].value;
    //TODO
    alert("student with SRN: "+srn+" imposed INR: "+String(amt));
    return false;
}

function update_payment(){
    let srn = document.forms["update_payment_form"]["srn"].value;
    let amt = document.forms["update_payment_form"]["amt"].value;
    //TODO
    alert("Payment of INR "+String(amt)+" updated for SRN: "+srn);
    return false;
}

function show_dues(){
    // TODO
}

function get_certificate(){
    // TODO
    if(0){
        alert("DUES NOT ZERO");
        return true;
    }
    window.location.href = "./student_2.html";
    return false;
}

function download_as_pdf(){
    // TODO
}