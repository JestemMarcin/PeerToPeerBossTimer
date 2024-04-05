import { Boss } from './Boss.js';
import { BossManager } from './BossManager.js';
import { Tests } from './Tests.js';


var bosses = [new Boss("Boss"), new Boss("Boss2")];


// TESTS

var tests = new Tests();
//tests.test_0();
tests.test_client_onconnection();

