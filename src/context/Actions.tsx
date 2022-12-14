export enum ActionTypes {
	TEST = "TEST",
	FETCH_ALL_COUNTRIES = "FETCH_ALL_COUNTRIES",
	CURRENT_FILTERED_COUNTRIES = "CURRENT_FILTERED_COUNTRIES",
	CURRENT_SINGLE_COUNTRY = "CURRENT_SINGLE_COUNTRY",
	SEARCH_FILTER = "SEARCH_FILTER",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: any;
}
