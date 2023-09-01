import { Application } from "../../src/Application";
import { ApplicationContext } from "../../src/ApplicationContext";
import { serviceProto, ServiceType } from "./protocols/serviceProto";

export const server = Application.run<ServiceType>(serviceProto);
server.start().then(() => {
    ApplicationContext.getIns().logger.info('project started')
})
