import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { environment } from "../../../environments/environment";
import { SystemInfoState } from "../states/system-info.state";
import { UserState } from "../states/user.state";
import { systemInfoReducer } from "./system-info.reducer";
import { userReducer } from "./user.reducer";
import { PageState } from "../states/page.state";
import { addPageReducer } from "./publish-page.reducer";

export interface State {
  user: UserState;
  systemInfo: SystemInfoState;
  router: RouterReducerState;
  pagesInfo: PageState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  systemInfo: systemInfoReducer,
  router: routerReducer,
  pagesInfo: addPageReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
