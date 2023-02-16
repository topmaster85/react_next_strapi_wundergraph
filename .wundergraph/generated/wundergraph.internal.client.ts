// Code generated by wunderctl. DO NOT EDIT.

import type { OperationArgsWithInput, InternalClient as BaseClient } from "@wundergraph/sdk/server";
import {
	AlldrugsResponse,
	CreateUserResponse,
	CreateUserInput,
	InternalCreateUserInput,
	InjectedCreateUserInput,
	DragonsResponse,
	LoginResponse,
	LoginInput,
	InternalLoginInput,
	InjectedLoginInput,
	NewDrugResponse,
	UsersGetResponse,
	UsersGetInput,
	InternalUsersGetInput,
	UsersSubscribeResponse,
	UsersSubscribeInput,
	InternalUsersSubscribeInput,
	UsersUpdateResponse,
	UsersUpdateInput,
	InternalUsersUpdateInput,
} from "./models";

export interface Queries {
	Alldrugs: () => Promise<AlldrugsResponse>;
	Dragons: () => Promise<DragonsResponse>;
	UsersGet: (options: OperationArgsWithInput<InternalUsersGetInput>) => Promise<UsersGetResponse>;
}

export interface Mutations {
	CreateUser: (options: OperationArgsWithInput<CreateUserInput>) => Promise<CreateUserResponse>;
	Login: (options: OperationArgsWithInput<LoginInput>) => Promise<LoginResponse>;
	NewDrug: () => Promise<NewDrugResponse>;
	UsersUpdate: (options: OperationArgsWithInput<UsersUpdateInput>) => Promise<UsersUpdateResponse>;
}

export interface InternalClient extends BaseClient<Queries, Mutations> {}
