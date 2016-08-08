import * as winston from 'winston';
winston.remove(winston.transports.Console);

import './util/path';
import './util/template';
import './util/createDir';
import './commands/create';
