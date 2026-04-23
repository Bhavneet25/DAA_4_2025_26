async function heapSort(bars, dataArray) {
    let n = dataArray.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        if (!isSorting) return;
        await heapify(bars, n, i, dataArray);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        if (!isSorting) return;
        await waitWhilePaused();

        // Move current root to end
        [dataArray[0], dataArray[i]] = [dataArray[i], dataArray[0]];
        
        // Update UI
        bars[0].style.height = dataArray[0] + "px";
        bars[i].style.height = dataArray[i] + "px";
        
        bars[i].classList.add("sorted");
        await sleep();

        // call max heapify on the reduced heap
        await heapify(bars, i, 0, dataArray);
    }
    bars[0].classList.add("sorted");
}

async function heapify(bars, n, i, dataArray) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && dataArray[l] > dataArray[largest]) largest = l;
    if (r < n && dataArray[r] > dataArray[largest]) largest = r;

    if (largest !== i) {
        bars[i].classList.add("swap");
        bars[largest].classList.add("swap");

        [dataArray[i], dataArray[largest]] = [dataArray[largest], dataArray[i]];
        
        // UI Update
        bars[i].style.height = dataArray[i] + "px";
        bars[largest].style.height = dataArray[largest] + "px";

        await sleep();
        
        bars[i].classList.remove("swap");
        bars[largest].classList.remove("swap");

        await heapify(bars, n, largest, dataArray);
    }
}