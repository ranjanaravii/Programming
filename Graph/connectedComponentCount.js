const connectedCompenentCount = (graph) => {
    const visited = new Set();
    let cnt = 0;
    for (let key in graph) {
        // console.log(visited);
        if (dfs(key, graph, visited) === true) {
            cnt += 1;
        }
    }
    return cnt;
}

const dfs = (current, graph, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));
    for (let node of graph[current]) {
        dfs(node, graph, visited);
    }
    return true;
}

const result = connectedCompenentCount({
    0: [8, 1, 5],
    1: [0],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
    5: [0, 8],
    8: [0, 5],
});
console.log(result);