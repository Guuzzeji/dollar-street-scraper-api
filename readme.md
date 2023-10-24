# Stats Data collection Automator 

Download docker for your system, https://www.docker.com/products/docker-desktop/ (Don't have to create a account)

Open up the terinmal or Command Prompt if you are on Windows and run the command below

```bash
docker-compose -f docker-compose.yml up
```

Then give it some time to download everything and soon you will see URLs be print onto your screen. Will auto generate 30 different families for you to use.

> **Note**: You should copy what the console print out to a text document or some where else rather than the console for safe keeping.


## Bug Note:
If you get this error,
```bash
root@328f7b4599d9:/_dev# node index.js 
file:///_dev/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:272
                    throw new Error(`Could not find Chrome (ver. ${this.puppeteer.browserRevision}). This can occur if either\n` +
                          ^

Error: Could not find Chrome (ver. 118.0.5993.70). This can occur if either
 1. you did not perform an installation before running the script (e.g. `npm install`) or
 2. your cache path is incorrectly configured (which is: /root/.cache/puppeteer).
For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.
    at ChromeLauncher.resolveExecutablePath (file:///_dev/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:272:27)
    at ChromeLauncher.executablePath (file:///_dev/node_modules/puppeteer-core/lib/esm/puppeteer/node/ChromeLauncher.js:190:25)
    at ChromeLauncher.computeLaunchArguments (file:///_dev/node_modules/puppeteer-core/lib/esm/puppeteer/node/ChromeLauncher.js:91:37)
    at async ChromeLauncher.launch (file:///_dev/node_modules/puppeteer-core/lib/esm/puppeteer/node/ProductLauncher.js:53:28)
    at async main (file:///_dev/index.js:50:21)
```

Run this command `node node_modules/puppeteer/install.mjs`