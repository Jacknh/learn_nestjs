import { Controller, Get } from '@nestjs/common';
import { fork } from 'child_process';
import { AppService } from './app.service';
const path = require('path')


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate')
  generate(): string {
    const file = path.join(__dirname, './utils/compute')
    const compute = fork(file);
    compute.send('start');
    compute.on('message', (sum) => {
      console.log('the sum is: ', sum);
      compute.kill();
    })
    return "generate call invoked, please wait for the answer patently.";
  }
}
