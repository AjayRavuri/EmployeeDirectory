var emp=[{
    fname : "Ajay",
    lname : "Ravuri",
    pname : "Ajay Ravuri",
    email : "ajay.ravuri@technovert.com",
    job : "Intern",
    office : "Hyderabad",
    dept : "Product Engineering",
    phn : "6304377338",
    skype : "live:.cid.b172c8a8f1ef2858",
    image : 'images/logo.png'
  },{
    fname : "Anthony",
    lname : "Morris",
    pname : "Anthony Morris",
    email : "anthony.m@technovert.com",
    job : "SharePoint Practice Head",
    office : "Hyderabad",
    dept : "IT Department",
    phn : "9876543210",
    skype : "live:.cid.a134c8a8f3gf2756",
    image : 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
  },{
    fname : "Jonathon",
    lname : "Smith",
    pname : "Jonathon Smith",
    email : "jonathon.s@technovert.com",
    job : "Product Manager",
    office : "Seattle",
    dept : "IT Department",
    phn : "9898989898",
    skype : "live:.cid.b172c8a8f1ef2858",
    image : 'images/emp5.jpg'
  },{
    fname : "Tami",
    lname : "Hopkins",
    pname : "Tami Hopkins",
    email : "tami.h@technovert.com",
    job : "Lead Engineer - Dot Net",
    office : "Seattle",
    dept : "IT Department",
    phn : "9876543210",
    skype : "live:.cid.a134c8a8f3gf2756",
    image : 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo='
  },{
    fname : "Franklin",
    lname : "Humark",
    pname : "Franklin Humark",
    email : "franklin.h@technovert.com",
    job : "Network Engineer",
    office : "Hyderabad",
    dept : "IT Department",
    phn : "6304377338",
    skype : "live:.cid.b172c8a8f1ef2858",
    image : 'https://media.istockphoto.com/photos/headshot-portrait-of-young-caucasian-male-employee-in-office-picture-id1318686177?k=20&m=1318686177&s=612x612&w=0&h=xWafJsvu9lSTkBXQM4C6glS3ZKzb1DCn31lb-KEn2iI='
  },{
    fname : "Angela",
    lname : "Bailey",
    pname : "Angela Bailey",
    email : "angela.b@technovert.com",
    job : "Talent Magnet Jr.",
    office : "Seattle",
    dept : "HR Department",
    phn : "9876543210",
    skype : "live:.cid.a134c8a8f3gf2756",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU'
  },{
    fname : "Robert",
    lname : "Mitchell",
    pname : "Robert Mitchell",
    email : "robert.m@technovert.com",
    job : "Software Engineer",
    office : "Hyderabad",
    dept : "IT Department",
    phn : "6304377338",
    skype : "live:.cid.b172c8a8f1ef2858",
    image : 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis='
  },{
    fname : "Olivia",
    lname : "Watson",
    pname : "Olivia Watson",
    email : "olivia.w@technovert.com",
    job : "UI Designer",
    office : "Hyderabad",
    dept : "UX Department",
    phn : "9876543210",
    skype : "live:.cid.a134c8a8f3gf2756",
    image : 'https://media.istockphoto.com/photos/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors-picture-id1338134319?k=20&m=1338134319&s=612x612&w=0&h=rXtELtb1HrG8g0poYwaR5SEnHmYy1WjIzyFfusCzII8='
  }];


window.addEventListener('DOMContentLoaded', (event) => {
    buildSidebar();
    buildView(emp);
    addingEvent(emp);
})

function addingEvent(emp){
  const employee = document.querySelectorAll('.employee')
  employee.forEach((e,i) =>{
    e.addEventListener('click',()=>{
      openProfilePopup(emp[i],i);
    })
  }) 
}

const employee = document.querySelectorAll('.employee')

function buildView(emp){
  var k = "<div class='employee_listing'>"
  for (i=0;i<emp.length;i++){
    k+= "<div class='employee'>";
    k+= "<img src=" + emp[i].image + " alt=''>";
    k+= "<ul>";
    k+= "<li><b class='employee_name'>" + emp[i].pname +"</b></li>";
    k+= "<li class='position'>" + emp[i].job + "</li>";
    k+= "<li class='job_type'>" + emp[i].dept + "</li>";
    k+= "<li class='fa'><a href=''>&#xf095;</a> <a href=''>&#xf0e0;</a> <a href=''>&#xf075;</a> <a href=''>&#xf005;</a> <a href=''>&#xf004;</a></li>"
    k+= "</ul>";
    k+= "</div>";
  }
  k += "</div>";
  document.querySelector('.employee_listing').innerHTML = k;
}

function buildSidebar(){
  var f=""
  f+= "<div class='types'>"
  f+= "<ul>"
  f+= "<li class='space'><b>Departments</b></li>"
  f+= `<li><button onclick='filterEmployees("IT","dept")'>IT (${length('IT','dept')})</button></li>`
  f+= `<li><button onclick='filterEmployees("HR","dept")'>Human Resources (${length('HR','dept')})</button></li>`
  f+= `<li><button onclick='filterEmployees("MD","dept")'>MD (${length('MD','dept')})</button></li>`
  f+= `<li><button onclick='filterEmployees("SALES","dept")'>Sales (${length('Sales','dept')})</button></li>`
  f+= "</ul>"
  f+= "</div>"
  f+="<div class='types'>"
  f+="<ul>"
  f+="<li class='space'><b>Offices</b></li>"
  f+=`<li><button onclick='filterEmployees("SEATTLE","location")'>Seattle (${length('Seattle','office')})</button></li>`
  f+=`<li><button onclick='filterEmployees("HYDERABAD","location")'>India (${length('Hyderabad','office')})</button></li>`
  f+="</ul>"
  f+= "</div>"
  f+="<div class='types'>"
  f+="<ul>"
  f+= "<li class='space'><b>Job Titles</b></li>"
  f+= `<li><button onclick='filterEmployees("SHAREPOINT PRACTICE HEAD","job")'>SharePoint Practice Head (${length('SharePoint Practice Head','job')})</button></li>`
  f+= `<li><button onclick='filterEmployees("DOT NET","job")'>.Net Development Lead (${length('Dot Net','job')})</button></li>`
  f+= `<li><button onclick='filterEmployees("RECRUITING EXPERT","job")'>Recruiting Expert (${length('Recruiting Expert','job')})</button></li>`
  f+= `<li><button onclick='filterEmployees("BI DEVELOPER","job")'>BI Developer (${length('BI Developer','job')})</button></li>`
  f+= `<li><button onclick='filterEmployees("BUSINESS ANALYST","job")'>Business Analyst (${length('Business Analyst','job')})</button></li>`
  f+= "<p><a href=''>view more</a></p>"
  f+="</ul>"
  f+="</div>"
  document.querySelector('#leftside').innerHTML = f;
}

function length(types,filter){
  var c=0;
  for(var i=0;i<emp.length;i++){
    if (emp[i][filter].toUpperCase().includes(types.toUpperCase())){
      c=c+1;
    }
  }
  return c;
}


function clearSearch(){
    document.getElementById('bar').value = '';
    buildView(emp);
    addingEvent(emp);
}

var form = document.getElementById("frm1");
form.addEventListener('submit', addEmp);

function addEmp(event){
  const form = document.getElementById('frm1');
  var d={}
  d['fname']=form.elements['fname'].value;
  d['lname']=form.elements['lname'].value;
  d['pname']=d['fname']+" "+d['lname'];
  d['email']=form.elements['email'].value;
  d['job']=form.elements['job'].value;
  d['office']=form.elements['office'].value;
  d['dept']=form.elements['dept'].value;
  d['phn']=form.elements['phn'].value;
  d['skype']=form.elements['skype'].value;
  d['image'] ="images/"+form.elements['image'].value.split(['\\']).pop();
  emp.push(d);
  buildSidebar();
  displayEmployees('');
  closePopup();
  form.reset();
  event.preventDefault(); 
}


const contactEmployees = (values) =>{
  var searchEmp = [];
  emp.forEach(element =>{
    fname=element.fname.toUpperCase();
    lname=element.lname.toUpperCase();
    if (fname[0]==values || (lname[0]==values)){
      searchEmp.push(element);
    }
  })
  buildView(searchEmp);
  addingEvent(searchEmp);
}

const filterEmployees = (values,filter) =>{
  var searchEmp = [];
  emp.forEach(element =>{
    if (filter=='dept'){
      comp=element.dept.toUpperCase();
    }
    else if (filter=='location'){
      comp=element.office.toUpperCase();
    }
    else{
      comp=element.job.toUpperCase();
    }
    if (comp.includes(values)){
      searchEmp.push(element);
    }
  })
  buildView(searchEmp);
  addingEvent(searchEmp);
}

const displayEmployees = (values) =>{
    var searchEmp = [];
    var v = document.querySelector('.select'); 
    emp.forEach(element =>{
      if (v.value=='Preferred Name'){
        comp=element.pname.toUpperCase();
      }
      else if (v.value=='Department'){
        comp=element.dept.toUpperCase();
      }
      else{
        comp=element.job.toUpperCase();
      }
      if (comp.includes(values)){
        searchEmp.push(element);
      }
    })
    buildView(searchEmp);
    addingEvent(searchEmp);
}

bar.addEventListener('input', (e) =>{
    displayEmployees(e.target.value.toUpperCase());
})

function openPopup(){
  const popup = document.querySelector(".popup");
  popup.style.display = "block";
}

function closePopup(){
  const popup = document.querySelector(".popup");
  popup.style.display = "none";
}

function index(e){
  for (i=0;i<emp.length;i++){
    if (emp[i]==e){
      return i;
    }
  }
}

function openProfilePopup(e,i){
  document.getElementById('f').value=e.fname;
  document.getElementById('l').value=e.lname;
  document.getElementById('e').value=e.email;
  document.getElementById('j').value=e.job;
  document.getElementById('o').value=e.office;
  document.getElementById('d').value=e.dept;
  document.getElementById('p').value=e.phn;
  document.getElementById('s').value=e.skype;
  document.getElementById('i').filename=e.image;
  const popup = document.querySelector(".profilepopup");
  popup.style.display = "block";
  const b = document.querySelector('#btn2');
  b.onclick= function(){
    var v= index(e);
    emp[v].fname=document.getElementById('f').value;
    emp[v].lname=document.getElementById('l').value;
    emp[v].email=document.getElementById('e').value;
    emp[v].job=document.getElementById('j').value;
    emp[v].office=document.getElementById('o').value;
    emp[v].dept=document.getElementById('d').value;
    emp[v].phn=document.getElementById('p').value;
    emp[v].skype=document.getElementById('s').value;
    if (document.getElementById('i').value==''){
      emp[v].image=e.image;
    }
    else{
      emp[v].image="images/"+document.getElementById('i').value.split(['\\']).pop();
    }
    buildSidebar();
    buildView(emp);
    closeProfilePopup();
    addingEvent(emp);
    document.getElementById('i').value= '';
  }
}

function closeProfilePopup(){
  const popup = document.querySelector(".profilepopup");
  popup.style.display = "none";
}