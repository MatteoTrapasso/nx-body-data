import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Eat} from '@models/vo/eat';

export const adapter: EntityCrudAdapter<Eat> = createCrudEntityAdapter<Eat>({
	selectId: model => Eat.selectId(model),
});

export interface State extends EntityCrudState<Eat> {
};

export const initialState: State = adapter.getInitialCrudState();
