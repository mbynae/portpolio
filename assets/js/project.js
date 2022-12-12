function projectTitle(){
    const projectName = document.querySelectorAll(".prName");
    

    projectName.forEach((e, i) => {
        projectName[i].innerHTML = `<span class='prSplit${i+1}'>${document.querySelector(`.prText0${i+1}`).innerText.split("").join(`</span><span class=prSplit${i+1}>`)}</span>`;
    })

    gsap.set(".prSplit1", {x: 100, color: "#fff"})
    gsap.set(".prSplit2", {x: -100, color: "#fff"})
    gsap.set(".project_titleLine", {y: 80, opacity: 0})
    const projectTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#project",
            start: "top, 65%",
            end: "top, 65%",
            // markers: true
        }
    })
    projectTl.to(".prSplit1",{x: 0, color: "#14CF93", duration: 0.8, ease: Circ.easeOut, stagger: 0.02}, "prN1")
    .to(".prSplit1",{color: "#151515", duration: 0.8, ease: Circ.easeOut, delay: 0.15, stagger: 0.04}, "prN1")
    .to(".prSplit2", {x: 0, color: "#151515", duration: 0.8, ease: Circ.easeOut, delay: -1, stagger: 0.04}, "prN2")
    .to(".prSplit2", {color: "#14CF93", duration: 0.8, ease: Circ.easeOut, delay: -0.85, stagger: 0.04}, "prN2")
    .to(".project_titleLine", {y: 0, opacity: 1, duration: 0.8, ease: Circ.easeOut, delay: -0.9}, "prN3")
    .to(".project_titleLine", {"--pr-border": 1, duration: 0.8, ease: Circ.easeOut, delay: -0.8}, "prN3")
    .to(".project_table", {"--pr-border2": 1, duration: 0.8, delay: -0.4}, "prN3")
}
projectTitle();

function projectCont(){

    // 스티키 효과
    const prSticky1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".project_table",
            start: "top, 12%",
            end: () => `+=${document.querySelector(".project_contentsInner").offsetHeight * 1.5}`,
            // markers: true,
            pin: true,
            scrub: 1
        }
    })
    prSticky1.to(".sticky1", {yPercent: -100, duration: 0.2, stagger: 0.15})

    const prSticky2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".project_table",
            start: `${document.querySelector(".project_contentsInner").offsetHeight * 2}, 12%`,
            end: () => `+=${document.querySelector(".project_contentsInner").offsetHeight * 1.5}`,
            markers: true,
            pin: true,
            scrub: 1
        }
    })
    prSticky2.to(".sticky2", {yPercent: -100, duration: 0.2, stagger: 0.15})




    // 등장 효과
    gsap.timeline({
        scrollTrigger: {
            trigger: ".project_table",
            // markers: true,
            start: "top, 60%",
            end: "top, 60%"
        }
    })
    .to(".button1", {y: 0, opacity: 1, duration: 0.8, ease: "power2.out"}, "table1")
    .to(".leftpd1", {y: 0, opacity: 1, delay: 0.2, duration: 0.8, ease: "power2.out"}, "table1")
    .to(".rightpd1", {y: 0, opacity: 1, delay: 0.4, duration: 0.8, ease: "power2.out"}, "table1");

    gsap.timeline({
        scrollTrigger: {
            trigger: ".project_table",
            // markers: true,
            start: `${document.querySelector(".project_textBox").offsetHeight}, 80%`,
            end: "top, 60%"
        }
    })
    .to(".prCB1", {scaleX: 1, duration: 0.3}, "table2")
    .to(".button2", {y: `${document.querySelector(".project_textBox").offsetHeight * 0.9}px`, opacity: 1, duration: 1, ease: "power2.out"}, "table2")
    .to(".leftpd2", {y: `-${document.querySelector(".project_textBox").offsetHeight}`, opacity: 1, delay: 0.2, duration: 1, ease: "power2.out"}, "table2")
    .to(".rightpd2", {y: `-${document.querySelector(".project_textBox").offsetHeight}`, opacity: 1, delay: 0.4, duration: 1, ease: "power2.out"}, "table2");

    gsap.timeline({
        scrollTrigger: {
            trigger: ".project_table",
            // markers: true,
            start: `${document.querySelector(".project_textBox").offsetHeight*2}, 80%`,
            end: "top, 60%"
        }
    })
    .to(".prCB2", {scaleX: 1, duration: 0.3}, "table3")
    .to(".button3", {y: `${document.querySelector(".project_textBox").offsetHeight * 1.8}px`, opacity: 1, duration: 1, ease: "power2.out"}, "table3")
    .to(".leftpd3", {y: `-${document.querySelector(".project_textBox").offsetHeight}`, opacity: 1, delay: 0.2, duration: 1, ease: "power2.out"}, "table3")
    .to(".rightpd3", {y: `-${document.querySelector(".project_textBox").offsetHeight}`, opacity: 1, delay: 0.4, duration: 1, ease: "power2.out"}, "table3");
}
projectCont();


document.querySelectorAll(".button").forEach((e, i)=>{
    if(i == 0){
        document.querySelector(`.button${i+1}`).style.transform = `translateY(200%)`;
    } else {
        document.querySelector(`.button${i+1}`).style.transform = `translateY(${document.querySelector(".project_textBox").offsetHeight * i + 500}px)`;
    }
    document.querySelectorAll(".prContBorder")[i].style.transform = `translateY(${document.querySelector(".project_textBox").offsetHeight * (i+1)}px) scaleX(0)`;
})
// document.querySelector(`.prContBorder`).style.transform = `translateY(${document.querySelector(".project_textBox").offsetHeight}px)`;

