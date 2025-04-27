let arr = [1, 40, -5, 10, 0];

function customSort(arr, order = "up") {
    const sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++){
            const shouldSwap = order === "up"
                ? sorted[j] > sorted[j + 1] 
                : sorted[j] < sorted[j + 1];
            if (shouldSwap) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    
    return sorted;
}

console.log(customSort(arr))