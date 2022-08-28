import { createAction, props  } from '@ngrx/store';

export const change = createAction('[Counter Component] Change', props<{ text: string }>());
