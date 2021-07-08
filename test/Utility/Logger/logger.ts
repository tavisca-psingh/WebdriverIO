import { configure, getLogger } from 'log4js';
import { LogLevel } from './log-level';
import { default as Reporter } from '@wdio/allure-reporter';

export class Logger {
  public log;

  public constructor() {

    configure({
      appenders: { console: { type: "console", category: "console", pattern: "%d %p %c %f %[%z%] %m%n" } },
      categories: { default: { appenders: ["console"], level: "debug" } }
    });
    this.log = getLogger('default');
    this.log.level = LogLevel.DEBUG;
  }

  public addFeatureAllureReporter(feature: string){
    Reporter.addFeature(feature);
  }

  public info(message: string) {
    this.log.info(message);
    Reporter.addStep(message);
  }

  public debug(message: string) {
    this.log.debug(message);
  }

  public error(message: string) {
    this.log.error(message);
  }

  public warn(message: string) {
    this.log.warn(message);
  }
}

