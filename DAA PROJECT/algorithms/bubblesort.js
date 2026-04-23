async function bubbleSort(bars, dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        for (let j = 0; j < dataArray.length - i - 1; j++) {
            if (!isSorting) return;
            await waitWhilePaused();

            // Visual feedback: Yellow for comparison
            bars[j].classList.add("active");
            bars[j + 1].classList.add("active");

            if (dataArray[j] > dataArray[j + 1]) {
                // Swap logic
                [dataArray[j], dataArray[j + 1]] = [dataArray[j + 1], dataArray[j]];
                
                // Direct UI Update (Replaces old 'update()' call)
                bars[j].style.height = dataArray[j] + "px";
                bars[j + 1].style.height = dataArray[j + 1] + "px";
                
                // Visual feedback: Red for swap
                bars[j].classList.add("swap");
                bars[j + 1].classList.add("swap");
            }

            await sleep();

            // Cleanup colors
            bars[j].classList.remove("active", "swap");
            bars[j + 1].classList.remove("active", "swap");
        }
        // Mark as sorted
        bars[dataArray.length - 1 - i].classList.add("sorted");
    }
}