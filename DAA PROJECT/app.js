let arr = [];
let speed = 50;
let isSorting = false;
let isPaused = false;
let currentAlgo = "bubble";

const algoInfo = {
    bubble: { name: "Bubble Sort", time: "O(n²)", space: "O(1)" },
    selection: { name: "Selection Sort", time: "O(n²)", space: "O(1)" },
    insertion: { name: "Insertion Sort", time: "O(n²)", space: "O(1)" },
    merge: { name: "Merge Sort", time: "O(n log n)", space: "O(n)" },
    quick: { name: "Quick Sort", time: "O(n log n)", space: "O(log n)" },
    heap: { name: "Heap Sort", time: "O(n log n)", space: "O(1)" },
    counting: { name: "Counting Sort", time: "O(n+k)", space: "O(k)" },
    radix: { name: "Radix Sort", time: "O(nk)", space: "O(n+k)" }
};

document.getElementById("speed").oninput = e => speed = e.target.value;

function generateArray(n = 50) {
    arr = [];
    const container = document.getElementById("bars");
    container.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let val = Math.floor(Math.random() * 350) + 10;
        arr.push(val);
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${val}px`;
        container.appendChild(bar);
    }
}

function setAlgo(algo, btn) {
    currentAlgo = algo;
    document.querySelectorAll('.algo-btn').forEach(b => b.classList.remove('active-algo'));
    btn.classList.add('active-algo');
    
    document.getElementById("algoName").innerText = algoInfo[algo].name;
    document.getElementById("timeComplexity").innerText = "Time: " + algoInfo[algo].time;
    document.getElementById("spaceComplexity").innerText = "Space: " + algoInfo[algo].space;
}

async function startSort() {
    if (isSorting) return;
    const bars = document.getElementById("bars").children;
    if (bars[0].classList.contains('sorted')) generateArray();
    
    isSorting = true;
    try {
        await runAlgorithm(currentAlgo, bars, arr);
        for(let bar of bars) bar.classList.add("sorted");
    } finally {
        isSorting = false;
    }
}

async function runAlgorithm(name, bars, dataArray) {
    if (name === "bubble") await bubbleSort(bars, dataArray);
    else if (name === "selection") await selectionSort(bars, dataArray);
    else if (name === "insertion") await insertionSort(bars, dataArray);
    else if (name === "merge") await mergeSort(bars, 0, dataArray.length - 1, dataArray);
    else if (name === "quick") await quickSort(bars, 0, dataArray.length - 1, dataArray);
    else if (name === "heap") await heapSort(bars, dataArray);
    else if (name === "counting") await countingSort(bars, dataArray);
    else if (name === "radix") await radixSort(bars, dataArray);
}

function resetArray() { isSorting = false; generateArray(); }
function pauseSort() { isPaused = true; }
function resumeSort() { isPaused = false; }
async function waitWhilePaused() { while (isPaused) await new Promise(r => setTimeout(r, 100)); }
function sleep() { return new Promise(r => setTimeout(r, 101 - speed)); }

// ================= COMPARISON =================
async function startComparison() {
    const a1_name = document.getElementById("algo1").value;
    const a2_name = document.getElementById("algo2").value;
    
    const data1 = [...arr];
    const data2 = [...arr];

    document.getElementById("leftTitle").innerText = a1_name.toUpperCase();
    document.getElementById("rightTitle").innerText = a2_name.toUpperCase();

    drawCompBars("bars1", data1);
    drawCompBars("bars2", data2);

    const b1 = document.getElementById("bars1").children;
    const b2 = document.getElementById("bars2").children;

    const t1_start = performance.now();
    const t2_start = performance.now();

    await Promise.all([
        runAlgorithm(a1_name, b1, data1).then(() => {
            document.getElementById("time1").innerText = `Time: ${Math.floor(performance.now() - t1_start)}ms`;
        }),
        runAlgorithm(a2_name, b2, data2).then(() => {
            document.getElementById("time2").innerText = `Time: ${Math.floor(performance.now() - t2_start)}ms`;
        })
    ]);
}

function drawCompBars(id, data) {
    const container = document.getElementById(id);
    container.innerHTML = "";
    data.forEach(v => {
        const b = document.createElement("div");
        b.className = "bar";
        b.style.height = `${v * 0.5}px`;
        container.appendChild(b);
    });
}

window.onload = () => generateArray();