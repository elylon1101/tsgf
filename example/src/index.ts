import { Application, CONTROLLERS } from "../../src/Application";
import { ApplicationContext } from "../../src/ApplicationContext";
import { OrderController } from "./controller/OrderController";

Application.run().then(() => {
    new OrderController().test()
    ApplicationContext.getIns().logger.info(CONTROLLERS)
    ApplicationContext.getIns().logger.info('project started')
})