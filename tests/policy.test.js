import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 81,
    "capacity": 94,
    "latency": 22,
    "risk": 14,
    "weight": 10,
    "score": 136,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 91,
    "capacity": 85,
    "latency": 15,
    "risk": 12,
    "weight": 9,
    "score": 177,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 69,
    "capacity": 73,
    "latency": 14,
    "risk": 13,
    "weight": 8,
    "score": 115,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
