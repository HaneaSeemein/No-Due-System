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
        alert("Not Graduated Yet");
        return true;
    }
    if(0){
        alert("DUES NOT ZERO");
        return true;
    }
    window.location.href = "./student_2.html";
    return false;
}

function pow(x, y, p){
    let res = 1;
    while (y){
        if (y & 1) res = (res*x)%p;
        y = y>>1;
        x = (x*x)%p;
    }
    return res;
}

function cert_onload(){ 
    // TODO  
    let srn = "20CS999"; // TODO: retrieve SRN
    document.getElementById("stSRN").innerHTML = srn;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById("curDate").innerHTML=today;
    document.getElementById("curDate1").innerHTML=today;
    let n = 3127, d = 2011;
    let digSig = "";
    for(let i=0; i<srn.length; i++){
        var x = pow(srn.charCodeAt(i), d, n);
        if((x/1000)<1) digSig +="0";
        if((x/100)<1) digSig += "0";
        if((x/10)<1) digSig += "0";
        digSig += x.toString();
    }
    document.getElementById("digSig").innerHTML = digSig;
}

function download_as_pdf(){
    // TODO
    const certificate = document.getElementById("certificate");
    var opt = {
        margin: 1,
        filename: 'SampleNoDuesCertificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(certificate).set(opt).save();
}