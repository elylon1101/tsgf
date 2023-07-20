import { ApplicationContext } from "../../src/ApplicationContext";
import { EcsComponent } from "../../src/ecs/decorators/EcsComponent";
import { EcsUpdate } from "../../src/ecs/decorators/EcsUpdate";

@EcsComponent()
export class TestComponent {

    @EcsUpdate({period: 3000})
    public update() {
        ApplicationContext.getIns().logger.log('TestComponent.update')
    }
}