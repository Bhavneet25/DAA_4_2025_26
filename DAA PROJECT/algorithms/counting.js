async function countingSort(bars) {
    let n = arr.length;
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    let output = new Array(n);

    // 1. SCANNING PHASE (Counting frequencies)
    for (let i = 0; i < n; i++) {
        if (!isSorting) return;
        await waitWhilePaused();
        
        count[arr[i]]++;
        
        // Visual feedback: Turn yellow to show we are "reading" this value
        bars[i].classList.add("active");
        await sleep();
        bars[i].classList.remove("active");
    }

    // 2. POSITION CALCULATING PHASE
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // 3. PLACEMENT PHASE (Building the sorted array)
    for (let i = n - 1; i >= 0; i--) {
        let val = arr[i];
        let position = count[val] - 1;
        output[position] = val;
        count[val]--;
    }

    // 4. VISUALIZATION PHASE (Updating the UI with the results)
    for (let i = 0; i < n; i++) {
        if (!isSorting) return;
        await waitWhilePaused();
        
        arr[i] = output[i];
        bars[i].style.height = arr[i] + "px";
        
        // Turn green to show it's now in its final sorted position
        bars[i].classList.add("sorted");
        
        // Use a slightly longer delay here so the user can see the "growth"
        await new Promise(r => setTimeout(r, 105 - speed));
    }
}