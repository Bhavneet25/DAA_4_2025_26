bars[j].classList.add("active");
bars[j+1].classList.add("active");

await sleep(50);

bars[j].classList.remove("active");
bars[j+1].classList.remove("active");
