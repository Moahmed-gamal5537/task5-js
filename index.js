const productsContainer = document.querySelector(".products-container")
console.log(productsContainer);

const projects = [
{
id: 1,
title: "Corporate Dashboard System",
description: "Pellentesque habitant morbi tristique senectus et netus.",
category: "Web design",
isFeatured: false,
date: "2024",
tags: ["HTML", "CSS", "JavaScript"],
image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-2.webp",
},
{
id: 2,
title: "Smart Finance Application",
description: "Maecenas tempus tellus eget condimentum rhoncus.",
category: "Mobile App",
isFeatured: true,
date: "2024",
tags: ["Flutter", "Dart", "Firebase"],
image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-4.webp",
},
{
id: 3,
title: "Fashion Label Identity",
description: "Donec quam felis ultricies nec pellentesque pretium.",
category: "branding",
isFeatured: false,
date: "2023",
tags: ["Photoshop", "Illustrator", "InDesign"],
image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-6.webp",
},
];

projects.map(projects => {
    productsContainer.innerHTML += `
    <div class="bg-white ">
                <div class="overflow-hidden rounded-2xl shadow-lg relative">
                    <img src="${projects.image}" alt="" class=" w-full h-full object-cover">
                    <span class = "absolute top-4 left-4 bg-white rounded-full py-2 px-4 uppercase text-[#0ea5e9] text-xs tracking-wide font-semibold ">${projects.category}</span>
                </div>
                <div class="p-6 ">
                    <h3 class="text-lg text-[#1e293b] mb-2 tracking-tight">${projects.title}</h3>
                <p class="text-gray-500 text-sm">${projects.description}</p>
                <div class="flex items-center justify-between border-t-1 border-gray-300 pt-4 mt-4">
                    <div class="flex gap-1.5 items-center">
                    ${projects.tags.map((tag) => `<span class="bg-gray-200 rounded-full text-[#0ea5e9] px-2.5 py-1 font-semibold text-xs">${tag.toUpperCase()}</span>`).join("") 
}
                    </div>
                    <div class="font-semibold text-sm text-gray-500">${projects.date}</div>
                </div>
                </div>
            </div>`
})