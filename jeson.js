
let count =0;
const showdata =async()=>{
const responsive = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
const data =await responsive.json()
// console.log(data.posts)

const showall =document.getElementById('show-data');
data.posts.forEach(items => {


// console.log(items)

const div = document.createElement('div');
div.innerHTML=`<div class="lg:hero  bg-base-200 lg:p-10 lg:w-11/12 rounded-3xl mb-7">
<div class="hero-content flex-col lg:flex-row items-start ">
    <div class="avatar indicator">
        <span class="indicator-item badge badge-secondary"></span>
        <div class="w-20 h-20 rounded-lg">
            <img alt="Tailwind CSS examples"
                src="${items.image}" />
        </div>
    </div>
    <div>
        <div class="flex gap-14">
            <p>#${items.category}</p>
            <p>Author:${items.author.name}</p>
        </div>
        <div>
            <h1 class=" text-2xl lg:text-5xl font-bold">${items.title}
            </h1>
            <p class="lg:py-6">${items.description}
            </p>
        </div>
        <hr class="border border-dotted border-red-400 my-6">
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
                <button onclick="markasread('${items.author.name}')" class="btn  bg-green-400 rounded-full">
                    <i class="fa-solid fa-envelope-open" style="color: #f0eef6;"></i>
                </button>
            </div>
        </div>
    </div>

</div>
</div>`

// console.log(items.id)
showall.appendChild(div)

 
});
}


 function markasread(id){
        
    console.log(id)


const divcontainer =document.getElementById('div-container');
const div =document.createElement('div');
div.innerHTML=` <div
class="flex justify-between items-center bg-base-100 shadow-xl w-[330px]  lg:w-[460px] h-[100px] p-6 rounded-3xl my-5">
<div>
    <h2 class="text-2xl font-medium text-black">${id}</h2>
</div>

<div class="flex justify-between items-center lg:gap-x-10">
    <span><i class="fa-regular fa-eye"></i></span>
    <span id="show">105</span>
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


showdata()