// ======FORM======

// For contact information

function toggleContact(){
    var content=document.getElementById('contactDetails');
    if(content.style.display==='block'){
        content.style.display='none';
    }else{
        content.style.display='block';
    }
}

// ===== GENERATE CV========
document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('cvForm');
    const cvTemplate=document.getElementById('cvTemplate');
    const formContainer=document.querySelector('.formContainer');
    form.addEventListener('submit',function(e){
        e.preventDefault();
    
        document.getElementById('cvName').innerText=document.getElementById('name').value;
        document.getElementById('cvAbout').innerText=document.getElementById('about').value;
        document.getElementById('cvEducation').innerText=document.getElementById('education').value;
        document.getElementById('cvExperience').innerText=document.getElementById('experience').value;
        document.getElementById('cvPhone').innerText=document.getElementById('number').value;
        document.getElementById('cvEmail').innerText=document.getElementById('email').value;
        document.getElementById('cvAddress').innerText=document.getElementById('address').value;
        document.getElementById('cvLanguages').innerText=document.getElementById('languages').value;
    
    // ====Skills===
    var skills=document.getElementById('skills').value.split(',');
    var skillList=document.getElementById('cvSkills');
    skillList.innerHTML='';
    skills.forEach(function(skill){
        var li=document.createElement('li');
        li.innerText=skill.trim();
        skillList.appendChild(li);
    });
    

    // =====Image UPLOAD=====
    var file=document.getElementById('picture').files[0];
    if(file){
        var reader=new FileReader();
        reader.onload=function(){
            document.getElementById('cvImage').src=reader.result;
    }
        reader.readAsDataURL(file);
    }else{
        document.getElementById('cvImage').src='';
    }
    // Show CV
    cvTemplate.style.display='flex';

   formContainer.style.display='none';
  });  
});