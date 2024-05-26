const depthFirstPrint = (graph, source) => {
    const stack = [source];
    const result = [];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        result.push(current);
        for (let node of graph[current]) {
            stack.push(node);
        }
    }
    return result;
}

const depthFirstPrintRecurssive = (graph, source) => {
    console.log(source);
    for (let node of graph[source]) {
        depthFirstPrintRecurssive(graph, node);
    }
}

const breadthFirstPrint = (graph, source) => {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let node of graph[current]) {
            queue.push(node);
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// https://www.youtube.com/watch?v=tWVWeAqZ0WU

// console.log(depthFirstPrint(graph, 'a'));
// depthFirstPrintRecurssive(graph, 'a');
breadthFirstPrint(graph, 'a');
