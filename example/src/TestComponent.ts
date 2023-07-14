import { EcsComponent } from "../../src/ecs/decorators/EcsComponent";
import { EcsUpdate } from "../../src/ecs/decorators/EcsUpdate";
import { ApplicationContext } from "../../src/ApplicationContext";

@EcsComponent()
export class TestComponent {

    @EcsUpdate({period: 3000})
    public update() {
        ApplicationContext.getIns().logger.log('TestComponent.update')
    }
}