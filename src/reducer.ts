import { ICityPayload, IState } from "./types";

export const TYPES = {
  TOGGLE_LOADING: "TOGGLE_LOADING",
  GET_CITY: "GET_CITY",
  STORE_CITY: "STORE_CITY",
} as const;

type TDispatchPayload = {
  id: number;
  city: string;
  data: ICityPayload[];
};

interface IReducerAction {
  type: keyof typeof TYPES;
  payload?: string | TDispatchPayload;
}

export function stateReducer(state: IState, action: IReducerAction): IState {
  switch (action.type) {
    case TYPES.TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case TYPES.GET_CITY:
      return {
        ...state,
        activeCity: action.payload as string,
      };

    case TYPES.STORE_CITY:
      const payload = action.payload as TDispatchPayload;

      return {
        ...state,
        loading: false,
        activeCity: payload.city,
        cities: {
          ...state.cities,
          [payload.city]: payload.data,
        },
      };
    default:
      return state;
  }
}
