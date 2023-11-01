console.log("***** SELECTORS *****")
document.title = "FS15 DOM😎"



//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const header = document.getElementById("header")
console.log(header)

header.style = "background-color:red; color:white; font-size:20px; font-family:Tahoma" //bu şekilde de olur..
// header.style.backgroundColor = "olive"
// header.style.color = "black"


const h2 = document.getElementById("add-new-item")
console.log(h2);

console.log(h2.textContent);
console.log(h2.innerText);
console.log(h2.innerHTML);

h2.textContent = "ADD"
h2.innerText = "ADD ITEM"
h2.innerHTML = "<p>Deneme<p>"//inner html güvenlik açığı oluşturur..


document.getElementById("btn").value = "submit"// input elemanlarının değeri value ile değişir

const input = document.getElementById("input")
input.value = "javaScript"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const lists = document.getElementsByTagName("li")
console.log(lists);//HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

console.log("Size:", lists.length);

for(let li of lists) {
    console.log(li.textContent);
}

const listArray = [...lists] //spread ile arraye çevrildi
listArray.forEach((li)=> (li.style.color = "green"))



Array.from(lists).forEach((li) => (li.style.backgroundColor ="yellow"))

//? ORNEK
const sections = document.getElementsByTagName("section")
console.log(sections) //? HTMLCollection(2) [section.add-item, section.item-list]

sections[0].style.backgroundColor = "blue"
sections[0].style.color = "yellow"

sections[1].style.color = "blue"

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myLists = document.getElementsByClassName("list")
console.log(myLists) //?HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

console.log(myLists[3].innerText)

const section = document.getElementsByClassName("item-list") //? tek elemanli bir dizi
console.log(section[0])
//* ========================================
//*              QUERYSELECTOR()
//* ========================================
// ! Query Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer.

//? id almak için (#)
console.log(document.querySelector("#header"))

//? class almak için (.)
console.log(document.querySelector(".item-list"))

//? tag almak için ()
console.log(document.querySelector("h3"))

console.log(document.querySelector("section.add-item #btn"));

console.log(document.querySelector("ul li:nth-child(4)").innerText)

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const itemLists = document.querySelectorAll("section.item-list li")
console.log(itemLists) //? NodeList(5) [li.list, li.list, li.list, li.list, li.list]

//* querySelectorAll bir nodelist dondurur. Nodelist dahali olarak forEach metmodunu barindirir. Ama istenirse spread veya Array.from() ile yine Array'e donusum yapilabilir.

itemLists.forEach((li) => console.log(li))

//? alternatif iterasyon
for (let li of itemLists) {
  console.log(li)
}