const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let node of graph[src]) {
        if (hasPath(graph, node, dst) === true) {
            return true;
        }
    }
    return false;
}

const hasPathByBFS = (graph, src, dst) => {
    const queue = [src];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        for (let node of graph[current])
            queue.push(node);
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

//console.log(hasPath(graph, 'i', 'k'));
console.log(hasPathByBFS(graph, 'i', 'k'));