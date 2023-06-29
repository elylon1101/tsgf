import { Application } from "../../src/Application";
import { ApplicationContext } from "../../src/ApplicationContext";

require('./TestComponent')
Application.run().then()

ApplicationContext.getIns().logger.log('project started')