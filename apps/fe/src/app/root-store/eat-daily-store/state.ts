import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {EatDaily} from '@models/vo/eat-daily';

export const adapter: EntityCrudAdapter<EatDaily> = createCrudEntityAdapter<EatDaily>({
	selectId: model => EatDaily.selectId(model),
});

export interface State extends EntityCrudState<EatDaily> {
};

export const initialState: State = adapter.getInitialCrudState();
