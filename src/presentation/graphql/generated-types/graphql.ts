/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  sayHello?: Maybe<SayHelloPayload>;
};


export type MutationSayHelloArgs = {
  input: SayHelloInput;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  test: Test;
};

export type SayHelloInput = {
  name: Scalars['String']['input'];
};

export type SayHelloPayload = SayHelloRejection | SayHelloSuccessPayload;

export type SayHelloRejection = {
  __typename?: 'SayHelloRejection';
  message: Scalars['String']['output'];
};

export type SayHelloSuccessPayload = {
  __typename?: 'SayHelloSuccessPayload';
  message: Scalars['String']['output'];
};

export type Test = {
  __typename?: 'Test';
  test1: Scalars['String']['output'];
  test2: Scalars['String']['output'];
  test3: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  SayHelloPayload: ( SayHelloRejection ) | ( SayHelloSuccessPayload );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SayHelloInput: SayHelloInput;
  SayHelloPayload: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SayHelloPayload']>;
  SayHelloRejection: ResolverTypeWrapper<SayHelloRejection>;
  SayHelloSuccessPayload: ResolverTypeWrapper<SayHelloSuccessPayload>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Test: ResolverTypeWrapper<Test>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Mutation: {};
  Query: {};
  SayHelloInput: SayHelloInput;
  SayHelloPayload: ResolversUnionTypes<ResolversParentTypes>['SayHelloPayload'];
  SayHelloRejection: SayHelloRejection;
  SayHelloSuccessPayload: SayHelloSuccessPayload;
  String: Scalars['String']['output'];
  Test: Test;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  sayHello?: Resolver<Maybe<ResolversTypes['SayHelloPayload']>, ParentType, ContextType, RequireFields<MutationSayHelloArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Test'], ParentType, ContextType>;
};

export type SayHelloPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SayHelloPayload'] = ResolversParentTypes['SayHelloPayload']> = {
  __resolveType: TypeResolveFn<'SayHelloRejection' | 'SayHelloSuccessPayload', ParentType, ContextType>;
};

export type SayHelloRejectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SayHelloRejection'] = ResolversParentTypes['SayHelloRejection']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SayHelloSuccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SayHelloSuccessPayload'] = ResolversParentTypes['SayHelloSuccessPayload']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Test'] = ResolversParentTypes['Test']> = {
  test1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  test2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  test3?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SayHelloPayload?: SayHelloPayloadResolvers<ContextType>;
  SayHelloRejection?: SayHelloRejectionResolvers<ContextType>;
  SayHelloSuccessPayload?: SayHelloSuccessPayloadResolvers<ContextType>;
  Test?: TestResolvers<ContextType>;
};

