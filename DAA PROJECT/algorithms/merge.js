async function mergeSort(bars, l, r) {
    if (l >= r) return;
    const m = l + Math.floor((r - l) / 2);

    await mergeSort(bars, l, m);
    await mergeSort(bars, m + 1, r);
    await merge(bars, l, m, r);
}

async function merge(bars, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = arr.slice(l, m + 1);
    let R = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (!isSorting) return;
        await waitWhilePaused();
        
        bars[k].classList.add("active");
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        bars[k].style.height = arr[k] + "px";
        await sleep();
        bars[k].classList.remove("active");
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        bars[k].style.height = arr[k] + "px";
        i++; k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        bars[k].style.height = arr[k] + "px";
        j++; k++;
    }
}