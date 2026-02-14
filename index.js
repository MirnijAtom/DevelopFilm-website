// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

gsap.fromTo(".slide-in", {
    y: "100%"
}, {
    y: "0%",
    duration: 1,
})

const countries = [   
  "Kodak Tri X 400",
  "Ilford HP5 Plus 400",
  "Fomapan 100 Classic",
  "Ilford Delta 100",
  "Kentmere 400",
  "Kodak T Max 400",
  "Ilford FP4 Plus 125",
  "Rollei Retro 400S",
  "Fujifilm Neopan Acros 100 II",
  "Fomapan 400 Action",
  "Ilford Delta 400",
  "Kentmere 100",
  "Kodak T Max 100",
  "Bergger Pancro 400",
  "Fomapan 200 Creative",
  "Adox CHS 100 II"
]

const places = [
  "Rodinal",
  "Kodak D 76",
  "Ilford ID 11",
  "Kodak HC 110",
  "Ilford DD X",
  "Adox Adonal",
  "Kodak XTOL",
  "Fomadon R09",
  "CineStill DF96",
  "Ilford Microphen",
  "Diafine",
  "Ilfotec HC",
  "Tetenal Ultrafin",
  "Fomadon Excel",
  "Pyrocat HD"
]


const countriesContainer = document.querySelector(".countries-container")
const placeContainer = document.querySelector(".places-container")

function addSlidingPlace(place, container){
    
    const imageContainer = `
            <div class="tw-min-w-fit tw-p-2 tw-px-3 tw-w-max tw-h-[50px]
                        tw-border-solid tw-border-[1px] tw-flex 
                        tw-rounded-md tw-border-black
                        tw-place-items-center tw-place-content-center
                        tw-overflow-clip sliding-image">
                ${place}
            </div>
    `

    container.innerHTML += imageContainer

}


countries.forEach( img => addSlidingPlace(img, countriesContainer))
countries.forEach( img => addSlidingPlace(img, countriesContainer))

places.forEach( img => addSlidingPlace(img, placeContainer))
places.forEach( img => addSlidingPlace(img, placeContainer))
places.forEach( img => addSlidingPlace(img, placeContainer))



const faqAccordion = document.querySelectorAll('.faq-accordion')

faqAccordion.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')

        // Toggle 'rotate' class to rotate the arrow
        let content = this.nextElementSibling
        
        // content.classList.toggle('!tw-hidden')
        if (content.style.maxHeight === '200px') {
            content.style.maxHeight = '0px'
            content.style.padding = '0px 18px'

        } else {
            content.style.maxHeight = '200px'
            content.style.padding = '20px 18px'
        }
    })
})



// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "10% 80%", // top of trigger hits the top of viewport
                                                            end: "20% 90%",
                                                            // markers: true,
                                                            // scrub: 1,
                                                        }})

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})
