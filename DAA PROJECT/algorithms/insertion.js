async function insertionSort(bars, dataArray) {
    isSorting = true;
    let start = performance.now();

    // The first bar is technically "sorted" in its own sub-array
    bars[0].classList.add("sorted");

    for (let i = 1; i < dataArray.length; i++) {
        if (!isSorting) return;
        
        let key = dataArray[i];
        let j = i - 1;

        // Highlight the current element being "picked up"
        bars[i].classList.add("active");
        await sleep();

        while (j >= 0 && dataArray[j] > key) {
            await waitWhilePaused();
            if (!isSorting) return;

            // Shift data
            dataArray[j + 1] = dataArray[j];
            
            // Visual Update: Shift the height of the bar to the right
            bars[j + 1].style.height = dataArray[j + 1] + "px";
            bars[j + 1].classList.add("swap");

            await sleep();
            
            bars[j + 1].classList.remove("swap");
            j--;
        }
        
        // Place the key in its correct position
        dataArray[j + 1] = key;
        bars[j + 1].style.height = dataArray[j + 1] + "px";
        
        // Cleanup and mark the processed portion as sorted
        bars[i].classList.remove("active");
        for(let k = 0; k <= i; k++) {
            bars[k].classList.add("sorted");
        }
    }

    // Update the timing if the element exists
    const timeDisplay = document.getElementById("time");
    if (timeDisplay) {
        timeDisplay.innerText = "Time: " + Math.floor(performance.now() - start) + "ms";
    }

    isSorting = false;
}