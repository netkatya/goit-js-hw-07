const items = document.querySelectorAll(".item")

console.log(`Number of categories: ${items.length}`)

items.forEach(item => {
    const itemTitle = item.querySelector(".item-title").textContent;
    const elements = item.querySelectorAll(".item-list-item").length;


    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${elements}`);
})
