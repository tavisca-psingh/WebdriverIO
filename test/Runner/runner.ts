import Launcher from '@wdio/cli';
export class Runner {
    
    private wdio = "wdio.conf.js"
     wdioRun() {
        const wdio = new Launcher(this.wdio);
        wdio.run().then((code) => {
            process.exit(0);
        }, (error) => {
            console.error('Launcher failed to start the test', error.stacktrace)
            process.exit(1)
        })
    }
}

const runner = new Runner();
runner.wdioRun();