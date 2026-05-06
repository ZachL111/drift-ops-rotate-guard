import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 63, slack: 21, drag: 16, confidence: 57 };
assert.equal(domainReviewScore(item), 156);
assert.equal(domainReviewLane(item), "ship");
