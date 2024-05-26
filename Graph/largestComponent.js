const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;
    for (let key in graph) {
        const size = dfs(key, graph, visited);
        if (size > largest) largest = size;
    }
    return largest;
}

const dfs = (current, graph, visited) => {
    if (visited.has(String(current))) return 0;

    visited.add(String(current));
    let size = 1;

    for (let node of graph[current]) {
        size += dfs(node, graph, visited);
    }
    return size;
}

console.log(largestComponent({
    0: [8, 1, 5],
    1: [0],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
    5: [0, 8],
    8: [0, 5]
}))