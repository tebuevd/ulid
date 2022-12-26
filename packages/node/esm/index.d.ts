/// <reference types="node" />
import crypto from "crypto";
export declare function getPrng(): typeof crypto.getRandomValues | undefined;
