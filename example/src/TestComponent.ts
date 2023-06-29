import { Component } from "../../src/ecs/decorators/Component";
import { Update } from "../../src/ecs/decorators/Update";
import { ApplicationContext } from "../../src/ApplicationContext";

@Component()
export class TestComponent {

    @Update({period: 3000})
    public update() {
        ApplicationContext.getIns().logger.log('TestComponent.update')
    }
}