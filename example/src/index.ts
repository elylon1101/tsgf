import { Application, CONTROLLERS } from "../../src/Application";
import { ApplicationContext } from "../../src/ApplicationContext";

// require('./TestComponent')
// require('./controller/OrderController')
// require('./controller/UserController')
Application.run().then()

ApplicationContext.getIns().logger.log(CONTROLLERS)
ApplicationContext.getIns().logger.log('project started')