
let count =0;
const showdata =async()=>{
const responsive = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
const data =await responsive.json()
// console.log(data.posts)

const showall =document.getElementById('show-data');
data.posts.forEach(items => {




console.log(items.isActive);


const div = document.createElement('div');
div.innerHTML=`<div class="lg:hero  bg-base-200 lg:p-10 lg:w-11/12 rounded-3xl mb-7">
<div class="hero-content flex-col lg:flex-row items-start ">
    <div class="avatar indicator">
        <span id="active" class="indicator-item badge bg-red-500"></span>
        <div class="w-20 h-20 rounded-lg">
            <img alt="Tailwind CSS examples"
                src="${items.image}" />
        </div>
    </div>
    <div>
        <div class="flex gap-14 lg:mb-4">
            <p class="text-xl font-medium text-[#12132dcc]">#${items.category}</p>
            <p class="text-xl font-medium text-[#12132dcc]">Author : ${items.author.name}</p>
        </div>
        <div>
            <h1 class=" text-2xl lg:text-4xl font-bold">${items.title}
            </h1>
            <p class="text-xl font-medium text-[#12132dcc] lg:py-6">${items.description}
            </p>
        </div>
        <hr class="border border-dotted border-[#12132d40] my-6">
        <div class="flex justify-between items-center ">
            <div class="flex lg:justify-start items-center gap-8 lg:gap-x-20 max-sm:px-2">
                <div class="flex justify-between items-center lg:gap-x-10">
                    <span><i class="fa-regular fa-message"></i></span>
                    <span>${items.comment_count}</span>
                </div>
                <div class="flex justify-between items-center lg:gap-x-10">
                    <span><i class="fa-regular fa-eye"></i></span>
                    <span>${items.view_count}</span>
                </div>
                <div class="flex justify-between items-center lg:gap-x-10">
                    <span><i class="fa-regular fa-clock"></i></span>
                    <span>${items.posted_time}</span>
                </div>

            </div>
            <div>
                <button onclick="markasread('${items.title}','${items.view_count}')" class="btn  bg-green-400 rounded-full">
                    <i class="fa-solid fa-envelope-open" style="color: #f0eef6;"></i>
                </button>
            </div>
        </div>
    </div>

</div>
</div>`

showall.appendChild(div)

const isActive =items.isActive;
const activeelement = document.getElementById('active');
activeelement.classList.remove("bg-red-500");
// activeelement.classList.add(isActive?"bg-green-500" : "bg-red-500");
if(isActive){
    activeelement.classList.add('bg-green-500')
}else{
    activeelement.classList.add('bg-red-500')
}
 
});
}


 function markasread(id,title){
        
    console.log(id,title)


const divcontainer =document.getElementById('div-container');
const div =document.createElement('div');
div.innerHTML=` <div
class="flex justify-between items-center bg-base-100 shadow-xl w-[330px]  lg:w-[460px] lg:h-[100px] p-6 rounded-3xl my-5">
<div>
    <h2 class="text-xl  lg:text-xl font-medium text-black">${id}</h2>
</div>

<div class="flex justify-between items-center lg:gap-x-10">
    <span><i class="fa-regular fa-eye"></i></span>
    <span id="show">${title}</span>
</div>
</div>`
divcontainer.appendChild(div)
a()
};


function a(){
    count= count+1
    const allcount = document.getElementById('count');
    allcount.innerText=count;

}



const latestpost =async()=>{

    const respons =await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await respons.json();
    // console.log(data)

    const latestpost =document.getElementById('latest-post')
   data.forEach(element => {
    // console.log(element)


   const div = document.createElement('div');
   div.innerHTML=`<div class="card  bg-base-100 shadow-xl ">
   <figure class="px-10 pt-10">
       <img src="${element.cover_image}" alt="Shoes"
           class="rounded-xl" />
   </figure>
   <div class="card-body lg:p-[40px]">
       <div class="flex gap-3">
           <span><i class="fa-solid fa-calendar-week"></i></span>
           <p>${element.author.posted_date}</p>
       </div>
       <h2 class="text-xl font-bold text-black">${element.title}</h2>
       <p>${element.description}</p>
       <div class="flex gap-5 mt-4">
           <div class="w-12 ">
               <img class="rounded-full"
                   src="${element.profile_image}" />
           </div>
           <div>
               <h4>${element.author.name}</h4>
               <p>${element.author.designation}</p>
           </div>

       </div>
   </div>
    </div>`

latestpost.appendChild(div)

   });
}








latestpost()
showdata()