import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Meal} from "@models/vo/meal";

export const adapter: EntityCrudAdapter<Meal> = createCrudEntityAdapter<Meal>({
	selectId: model => Meal.selectId(model),
});

export interface State extends EntityCrudState<Meal> {
};

export const initialState: State = adapter.getInitialCrudState();
