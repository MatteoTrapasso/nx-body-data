import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Food} from "@models/vo/food";

export const adapter: EntityCrudAdapter<Food> = createCrudEntityAdapter<Food>({
	selectId: model => Food.selectId(model),
});

export interface State extends EntityCrudState<Food> {
};

export const initialState: State = adapter.getInitialCrudState();
