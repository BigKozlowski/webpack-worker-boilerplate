import { Vector3 } from "three";

self.onmessage = (event) => {
  console.log(event);
  self.postMessage(event);
};

function handleMessage(data: any): void {
}
