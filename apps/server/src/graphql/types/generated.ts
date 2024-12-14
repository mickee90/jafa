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

export type Exercise = {
  __typename?: 'Exercise';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instructions: Array<Scalars['String']['output']>;
  metadata: ExerciseMetadata;
  name: Scalars['String']['output'];
};

export type ExerciseMetadata = {
  __typename?: 'ExerciseMetadata';
  difficulty: Scalars['String']['output'];
  equipment: Array<Maybe<Scalars['String']['output']>>;
};

export type LoggedInUser = {
  __typename?: 'LoggedInUser';
  token: Scalars['String']['output'];
  user: User;
};

export type MuscleGroup = {
  __typename?: 'MuscleGroup';
  description: Scalars['String']['output'];
  exercises: Array<Exercise>;
  id: Scalars['ID']['output'];
  metadata: MuscleGroupMetadata;
  name: Scalars['String']['output'];
};

export type MuscleGroupMetadata = {
  __typename?: 'MuscleGroupMetadata';
  aliases: Array<Maybe<Scalars['String']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createUser: User;
  deleteUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<LoggedInUser>;
  updateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  exercise?: Maybe<Exercise>;
  exercises: Array<Maybe<Exercise>>;
  muscleGroup?: Maybe<MuscleGroup>;
  muscleGroupByName?: Maybe<MuscleGroup>;
  muscleGroups: Array<Maybe<MuscleGroup>>;
  searchExercises: Array<Maybe<Exercise>>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryExerciseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMuscleGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMuscleGroupByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchExercisesArgs = {
  word: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  birthDate: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  username: Scalars['String']['output'];
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



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Exercise: ResolverTypeWrapper<Exercise>;
  ExerciseMetadata: ResolverTypeWrapper<ExerciseMetadata>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LoggedInUser: ResolverTypeWrapper<LoggedInUser>;
  MuscleGroup: ResolverTypeWrapper<MuscleGroup>;
  MuscleGroupMetadata: ResolverTypeWrapper<MuscleGroupMetadata>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Exercise: Exercise;
  ExerciseMetadata: ExerciseMetadata;
  ID: Scalars['ID']['output'];
  LoggedInUser: LoggedInUser;
  MuscleGroup: MuscleGroup;
  MuscleGroupMetadata: MuscleGroupMetadata;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  User: User;
};

export type ExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Exercise'] = ResolversParentTypes['Exercise']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instructions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ExerciseMetadata'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExerciseMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExerciseMetadata'] = ResolversParentTypes['ExerciseMetadata']> = {
  difficulty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  equipment?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoggedInUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoggedInUser'] = ResolversParentTypes['LoggedInUser']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MuscleGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['MuscleGroup'] = ResolversParentTypes['MuscleGroup']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exercises?: Resolver<Array<ResolversTypes['Exercise']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['MuscleGroupMetadata'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MuscleGroupMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MuscleGroupMetadata'] = ResolversParentTypes['MuscleGroupMetadata']> = {
  aliases?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['LoggedInUser']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'email' | 'password'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, RequireFields<QueryExerciseArgs, 'id'>>;
  exercises?: Resolver<Array<Maybe<ResolversTypes['Exercise']>>, ParentType, ContextType>;
  muscleGroup?: Resolver<Maybe<ResolversTypes['MuscleGroup']>, ParentType, ContextType, RequireFields<QueryMuscleGroupArgs, 'id'>>;
  muscleGroupByName?: Resolver<Maybe<ResolversTypes['MuscleGroup']>, ParentType, ContextType, RequireFields<QueryMuscleGroupByNameArgs, 'name'>>;
  muscleGroups?: Resolver<Array<Maybe<ResolversTypes['MuscleGroup']>>, ParentType, ContextType>;
  searchExercises?: Resolver<Array<Maybe<ResolversTypes['Exercise']>>, ParentType, ContextType, RequireFields<QuerySearchExercisesArgs, 'word'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Exercise?: ExerciseResolvers<ContextType>;
  ExerciseMetadata?: ExerciseMetadataResolvers<ContextType>;
  LoggedInUser?: LoggedInUserResolvers<ContextType>;
  MuscleGroup?: MuscleGroupResolvers<ContextType>;
  MuscleGroupMetadata?: MuscleGroupMetadataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

