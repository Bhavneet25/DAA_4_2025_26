async function radixSort(bars) {
    let maxNum = Math.max(...arr);
    for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
        await countingSortForRadix(bars, exp);
    }
}

async function countingSortForRadix(bars, exp) {
    let output = new Array(arr.length);
    let count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (!isSorting) return;
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (let i = 0; i < arr.length; i++) {
        await waitWhilePaused();
        arr[i] = output[i];
        bars[i].style.height = arr[i] + "px";
        bars[i].classList.add("active");
        await sleep();
        bars[i].classList.remove("active");
    }
}