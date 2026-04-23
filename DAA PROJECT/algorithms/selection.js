async function selectionSort(bars, dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        let minIdx = i;
        bars[i].classList.add("active");

        for (let j = i + 1; j < dataArray.length; j++) {
            if (!isSorting) return;
            await waitWhilePaused();

            bars[j].classList.add("active");
            await sleep();

            if (dataArray[j] < dataArray[minIdx]) {
                if (minIdx !== i) bars[minIdx].classList.remove("swap");
                minIdx = j;
                bars[minIdx].classList.add("swap");
            } else {
                bars[j].classList.remove("active");
            }
        }

        if (minIdx !== i) {
            [dataArray[i], dataArray[minIdx]] = [dataArray[minIdx], dataArray[i]];
            // Direct UI Update (Replaces old 'update()' call)
            bars[i].style.height = dataArray[i] + "px";
            bars[minIdx].style.height = dataArray[minIdx] + "px";
        }

        bars[minIdx].classList.remove("active", "swap");
        bars[i].classList.remove("active");
        bars[i].classList.add("sorted");
    }
}