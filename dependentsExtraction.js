#!/usr/bin/env node

import execSync from 'child_process';
export function getDependents(packageName) {
    const command = `node_modules/.bin/yarn why ${packageName} -R --json`;
    let output = execSync.execSync(command, { encoding: 'utf-8' });
    output = JSON.parse(output);
    return Object.keys(output[`children`]);  
}
export function printTree(dependency){
    const command = `node_modules/.bin/yarn why ${dependency[0]} -R`;
    console.log(execSync.execSync( command ,{ encoding: 'utf-8' }));
}

