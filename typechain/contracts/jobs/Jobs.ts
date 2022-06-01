/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace Jobs {
  export type StatsStruct = {
    chadary: BigNumberish;
    degeneracy: BigNumberish;
    unrekable: BigNumberish;
  };

  export type StatsStructOutput = [BigNumber, BigNumber, BigNumber] & {
    chadary: BigNumber;
    degeneracy: BigNumber;
    unrekable: BigNumber;
  };
}

export interface JobsInterface extends utils.Interface {
  functions: {
    "getJobCount()": FunctionFragment;
    "industries(uint256)": FunctionFragment;
    "industryList(uint256)": FunctionFragment;
    "isEntity(uint256)": FunctionFragment;
    "jobList(uint256)": FunctionFragment;
    "jobs(uint256)": FunctionFragment;
    "listJob(uint256,uint256,(uint256,uint256,uint256),(uint256,uint256,uint256))": FunctionFragment;
    "listJobIndustry(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getJobCount"
      | "industries"
      | "industryList"
      | "isEntity"
      | "jobList"
      | "jobs"
      | "listJob"
      | "listJobIndustry"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getJobCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "industries",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "industryList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isEntity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "jobList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "jobs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "listJob",
    values: [BigNumberish, BigNumberish, Jobs.StatsStruct, Jobs.StatsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "listJobIndustry",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getJobCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "industries", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "industryList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isEntity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jobList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jobs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listJob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listJobIndustry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "IndustryCreated(uint256,string)": EventFragment;
    "JobCreated(uint256,uint256,uint256,tuple,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "IndustryCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JobCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface IndustryCreatedEventObject {
  id: BigNumber;
  name: string;
}
export type IndustryCreatedEvent = TypedEvent<
  [BigNumber, string],
  IndustryCreatedEventObject
>;

export type IndustryCreatedEventFilter = TypedEventFilter<IndustryCreatedEvent>;

export interface JobCreatedEventObject {
  id: BigNumber;
  salary: BigNumber;
  industry: BigNumber;
  statsRequired: Jobs.StatsStructOutput;
  statsDailyIncrease: Jobs.StatsStructOutput;
}
export type JobCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    BigNumber,
    Jobs.StatsStructOutput,
    Jobs.StatsStructOutput
  ],
  JobCreatedEventObject
>;

export type JobCreatedEventFilter = TypedEventFilter<JobCreatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Jobs extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JobsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getJobCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { itemCount: BigNumber }>;

    industries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; listPointer: BigNumber }>;

    industryList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isEntity(
      _jobId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    jobList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    jobs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        Jobs.StatsStructOutput,
        Jobs.StatsStructOutput,
        BigNumber
      ] & {
        salary: BigNumber;
        industry: BigNumber;
        statsRequired: Jobs.StatsStructOutput;
        statsDailyIncrease: Jobs.StatsStructOutput;
        listPointer: BigNumber;
      }
    >;

    listJob(
      _salary: BigNumberish,
      _industry: BigNumberish,
      _statsRequired: Jobs.StatsStruct,
      _statsDailyIncrease: Jobs.StatsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listJobIndustry(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getJobCount(overrides?: CallOverrides): Promise<BigNumber>;

  industries(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { name: string; listPointer: BigNumber }>;

  industryList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isEntity(_jobId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  jobList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  jobs(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      Jobs.StatsStructOutput,
      Jobs.StatsStructOutput,
      BigNumber
    ] & {
      salary: BigNumber;
      industry: BigNumber;
      statsRequired: Jobs.StatsStructOutput;
      statsDailyIncrease: Jobs.StatsStructOutput;
      listPointer: BigNumber;
    }
  >;

  listJob(
    _salary: BigNumberish,
    _industry: BigNumberish,
    _statsRequired: Jobs.StatsStruct,
    _statsDailyIncrease: Jobs.StatsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listJobIndustry(
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getJobCount(overrides?: CallOverrides): Promise<BigNumber>;

    industries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; listPointer: BigNumber }>;

    industryList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isEntity(_jobId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    jobList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    jobs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        Jobs.StatsStructOutput,
        Jobs.StatsStructOutput,
        BigNumber
      ] & {
        salary: BigNumber;
        industry: BigNumber;
        statsRequired: Jobs.StatsStructOutput;
        statsDailyIncrease: Jobs.StatsStructOutput;
        listPointer: BigNumber;
      }
    >;

    listJob(
      _salary: BigNumberish,
      _industry: BigNumberish,
      _statsRequired: Jobs.StatsStruct,
      _statsDailyIncrease: Jobs.StatsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    listJobIndustry(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "IndustryCreated(uint256,string)"(
      id?: null,
      name?: null
    ): IndustryCreatedEventFilter;
    IndustryCreated(id?: null, name?: null): IndustryCreatedEventFilter;

    "JobCreated(uint256,uint256,uint256,tuple,tuple)"(
      id?: null,
      salary?: null,
      industry?: null,
      statsRequired?: null,
      statsDailyIncrease?: null
    ): JobCreatedEventFilter;
    JobCreated(
      id?: null,
      salary?: null,
      industry?: null,
      statsRequired?: null,
      statsDailyIncrease?: null
    ): JobCreatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    getJobCount(overrides?: CallOverrides): Promise<BigNumber>;

    industries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    industryList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isEntity(
      _jobId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jobList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    jobs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    listJob(
      _salary: BigNumberish,
      _industry: BigNumberish,
      _statsRequired: Jobs.StatsStruct,
      _statsDailyIncrease: Jobs.StatsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listJobIndustry(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getJobCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    industries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    industryList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEntity(
      _jobId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listJob(
      _salary: BigNumberish,
      _industry: BigNumberish,
      _statsRequired: Jobs.StatsStruct,
      _statsDailyIncrease: Jobs.StatsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listJobIndustry(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
