async function quickSort(bars, low, high) {
    if (low < high) {
        let pivotIdx = await partition(bars, low, high);
        await quickSort(bars, low, pivotIdx - 1);
        await quickSort(bars, pivotIdx + 1, high);
    }
}

async function partition(bars, low, high) {
    let pivot = arr[high];
    bars[high].classList.add("active"); // Highlight Pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (!isSorting) return;
        await waitWhilePaused();

        bars[j].classList.add("swap");
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            bars[i].style.height = arr[i] + "px";
            bars[j].style.height = arr[j] + "px";
        }
        await sleep();
        bars[j].classList.remove("swap");
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    bars[i + 1].style.height = arr[i + 1] + "px";
    bars[high].style.height = arr[high] + "px";
    bars[high].classList.remove("active");
    
    return i + 1;
}