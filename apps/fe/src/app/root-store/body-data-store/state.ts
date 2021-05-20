import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {BodyData} from '@models/vo/body-data';

export const adapter: EntityCrudAdapter<BodyData> = createCrudEntityAdapter<BodyData>({
	selectId: model => BodyData.selectId(model),
});

export interface State extends EntityCrudState<BodyData> {
};

export const initialState: State = adapter.getInitialCrudState();
