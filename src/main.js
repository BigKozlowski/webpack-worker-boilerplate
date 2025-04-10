const worker = new Worker("./dist/worker.bundle.js");

const start = new Date();

worker.onmessage = e => console.log(e.data);
worker.onerror = console.log;
worker.onmessageerror = e => console.log(e.data);

worker.postMessage({test: "test"});