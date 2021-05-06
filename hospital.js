function save()
{ 
var url="https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
var xhr= new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange=()=>
{
    var count=0;
    if(xhr.readyState==4 && xhr.status==200)
    {
        var m=JSON.parse(xhr.responseText);
        m=m.data.medicalColleges;
        var x123=document.getElementById("fname").value;
        x123=x123.toUpperCase();
        var x=document.getElementById("data");
        for(var i=0;i<m.length;i++)
        {
            var p=m[i].state.toUpperCase();
            
            if(p===x123)
            {
                count++;
            var temp=document.createElement("div");
               temp.style.width="35%";
            temp.setAttribute('id','add');
            var z=document.createElement("p");
              z.innerHTML=`State ⇨ ${m[i].state}`; 
              z.style.padding="6px";
            var b=document.createElement("p");
            b.innerHTML=`Name ⇨ ${m[i].name}`; 
            b.style.padding="6px";
            var b1=document.createElement("p");
            b1.innerHTML=`City ⇨ ${m[i].city}`; 
             b1.style.padding="6px";
            var b2=document.createElement("p");
            b2.innerHTML=`Ownership ⇨ ${m[i].ownership}`;  
           b2.style.padding="6px";
           var b21=document.createElement("p");
            b21.innerHTML=`AdmissionCapacity ⇨ ${m[i].admissionCapacity}`;  
           b21.style.padding="6px";
           var b211=document.createElement("p");
           b211.innerHTML=`HospitalBeds ⇨ ${m[i].hospitalBeds}`;  
          b211.style.padding="6px";
           temp.appendChild(z);
            temp.appendChild(b);
            temp.appendChild(b1);
            temp.appendChild(b2); 
            temp.appendChild(b21);
            temp.appendChild(b211);
            x.appendChild(temp);
            }

        }
        if(count==0)
        {
            location.reload();
            alert("Not Valid");
        }
    }
}
xhr.send();

}
function d()
{ 
var url="https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
var xhr= new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange=()=>
{
    var count=0;
    if(xhr.readyState==4 && xhr.status==200)
    {
        var m=JSON.parse(xhr.responseText);
        m=m.data.medicalColleges;
        var x123=document.getElementById("fname").value;
        x123=x123.toUpperCase();
        var x=document.getElementById("data");
        for(var i=0;i<m.length;i++)
        {
            var p=m[i].state.toUpperCase();
            var temp=document.createElement("div");
               temp.style.width="35%";
            temp.setAttribute('id','add');
            var z=document.createElement("p");
              z.innerHTML=`State ⇨ ${m[i].state}`; 
              z.style.padding="6px";
            var b=document.createElement("p");
            b.innerHTML=`Name ⇨ ${m[i].name}`; 
            b.style.padding="6px";
            var b1=document.createElement("p");
            b1.innerHTML=`City ⇨ ${m[i].city}`; 
             b1.style.padding="6px";
            var b2=document.createElement("p");
            b2.innerHTML=`Ownership ⇨ ${m[i].ownership}`;  
           b2.style.padding="6px";
           var b21=document.createElement("p");
            b21.innerHTML=`AdmissionCapacity ⇨ ${m[i].admissionCapacity}`;  
           b21.style.padding="6px";
           var b211=document.createElement("p");
           b211.innerHTML=`HospitalBeds ⇨ ${m[i].hospitalBeds}`;  
          b211.style.padding="6px";
           temp.appendChild(z);
            temp.appendChild(b);
            temp.appendChild(b1);
            temp.appendChild(b2); 
            temp.appendChild(b21);
            temp.appendChild(b211);
            x.appendChild(temp);
            }

        
    }
}
xhr.send();

}

