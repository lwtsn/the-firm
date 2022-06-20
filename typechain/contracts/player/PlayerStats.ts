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

export interface PlayerStatsInterface extends utils.Interface {
  functions: {
    "ADMIN()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "PLAYER_MANAGER()": FunctionFragment;
    "createBasePlayer(address)": FunctionFragment;
    "getPlayerBattleStats(address)": FunctionFragment;
    "getPlayerFarmingStats(address)": FunctionFragment;
    "getPlayerStats(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "increaseBattleStats(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "increaseFarmingStats(address,uint256,uint256,uint256)": FunctionFragment;
    "playerManager()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setPlayerManager(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADMIN"
      | "DEFAULT_ADMIN_ROLE"
      | "PLAYER_MANAGER"
      | "createBasePlayer"
      | "getPlayerBattleStats"
      | "getPlayerFarmingStats"
      | "getPlayerStats"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "increaseBattleStats"
      | "increaseFarmingStats"
      | "playerManager"
      | "renounceRole"
      | "revokeRole"
      | "setPlayerManager"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PLAYER_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createBasePlayer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerBattleStats",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerFarmingStats",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerStats",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseBattleStats",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseFarmingStats",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "playerManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlayerManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PLAYER_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createBasePlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerBattleStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerFarmingStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseBattleStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseFarmingStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playerManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPlayerManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "PlayerBattleStatsUpdated(address,uint256,uint256,uint256,uint256)": EventFragment;
    "PlayerFarmingStatsUpdated(address,uint256,uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PlayerBattleStatsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerFarmingStatsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface PlayerBattleStatsUpdatedEventObject {
  who: string;
  strengthIncrease: BigNumber;
  dexterityIncrease: BigNumber;
  defenceIncrease: BigNumber;
  constitutionIncrease: BigNumber;
}
export type PlayerBattleStatsUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  PlayerBattleStatsUpdatedEventObject
>;

export type PlayerBattleStatsUpdatedEventFilter =
  TypedEventFilter<PlayerBattleStatsUpdatedEvent>;

export interface PlayerFarmingStatsUpdatedEventObject {
  who: string;
  degeneracyIncrease: BigNumber;
  chadaryIncrease: BigNumber;
  unrekableIncrease: BigNumber;
}
export type PlayerFarmingStatsUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  PlayerFarmingStatsUpdatedEventObject
>;

export type PlayerFarmingStatsUpdatedEventFilter =
  TypedEventFilter<PlayerFarmingStatsUpdatedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface PlayerStats extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PlayerStatsInterface;

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
    ADMIN(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PLAYER_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    createBasePlayer(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPlayerBattleStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseStrength: BigNumber;
        baseDexterity: BigNumber;
        baseDefence: BigNumber;
        baseConstitution: BigNumber;
      }
    >;

    getPlayerFarmingStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _degeneracy: BigNumber;
        _chadary: BigNumber;
        _unrekable: BigNumber;
      }
    >;

    getPlayerStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        level: BigNumber;
        experience: BigNumber;
        baseHealth: BigNumber;
        currentHealth: BigNumber;
        isPlayer: boolean;
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    increaseBattleStats(
      _who: string,
      _strength: BigNumberish,
      _dexterity: BigNumberish,
      _defence: BigNumberish,
      _constitution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseFarmingStats(
      _who: string,
      _chadary: BigNumberish,
      _degeneracy: BigNumberish,
      _unrekable: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    playerManager(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPlayerManager(
      _playerManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ADMIN(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  PLAYER_MANAGER(overrides?: CallOverrides): Promise<string>;

  createBasePlayer(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPlayerBattleStats(
    _who: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      baseStrength: BigNumber;
      baseDexterity: BigNumber;
      baseDefence: BigNumber;
      baseConstitution: BigNumber;
    }
  >;

  getPlayerFarmingStats(
    _who: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      _degeneracy: BigNumber;
      _chadary: BigNumber;
      _unrekable: BigNumber;
    }
  >;

  getPlayerStats(
    _who: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      level: BigNumber;
      experience: BigNumber;
      baseHealth: BigNumber;
      currentHealth: BigNumber;
      isPlayer: boolean;
    }
  >;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  increaseBattleStats(
    _who: string,
    _strength: BigNumberish,
    _dexterity: BigNumberish,
    _defence: BigNumberish,
    _constitution: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseFarmingStats(
    _who: string,
    _chadary: BigNumberish,
    _degeneracy: BigNumberish,
    _unrekable: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  playerManager(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPlayerManager(
    _playerManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ADMIN(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    PLAYER_MANAGER(overrides?: CallOverrides): Promise<string>;

    createBasePlayer(_who: string, overrides?: CallOverrides): Promise<void>;

    getPlayerBattleStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseStrength: BigNumber;
        baseDexterity: BigNumber;
        baseDefence: BigNumber;
        baseConstitution: BigNumber;
      }
    >;

    getPlayerFarmingStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _degeneracy: BigNumber;
        _chadary: BigNumber;
        _unrekable: BigNumber;
      }
    >;

    getPlayerStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        level: BigNumber;
        experience: BigNumber;
        baseHealth: BigNumber;
        currentHealth: BigNumber;
        isPlayer: boolean;
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseBattleStats(
      _who: string,
      _strength: BigNumberish,
      _dexterity: BigNumberish,
      _defence: BigNumberish,
      _constitution: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseFarmingStats(
      _who: string,
      _chadary: BigNumberish,
      _degeneracy: BigNumberish,
      _unrekable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    playerManager(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlayerManager(
      _playerManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "PlayerBattleStatsUpdated(address,uint256,uint256,uint256,uint256)"(
      who?: null,
      strengthIncrease?: null,
      dexterityIncrease?: null,
      defenceIncrease?: null,
      constitutionIncrease?: null
    ): PlayerBattleStatsUpdatedEventFilter;
    PlayerBattleStatsUpdated(
      who?: null,
      strengthIncrease?: null,
      dexterityIncrease?: null,
      defenceIncrease?: null,
      constitutionIncrease?: null
    ): PlayerBattleStatsUpdatedEventFilter;

    "PlayerFarmingStatsUpdated(address,uint256,uint256,uint256)"(
      who?: null,
      degeneracyIncrease?: null,
      chadaryIncrease?: null,
      unrekableIncrease?: null
    ): PlayerFarmingStatsUpdatedEventFilter;
    PlayerFarmingStatsUpdated(
      who?: null,
      degeneracyIncrease?: null,
      chadaryIncrease?: null,
      unrekableIncrease?: null
    ): PlayerFarmingStatsUpdatedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PLAYER_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    createBasePlayer(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPlayerBattleStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlayerFarmingStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlayerStats(_who: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseBattleStats(
      _who: string,
      _strength: BigNumberish,
      _dexterity: BigNumberish,
      _defence: BigNumberish,
      _constitution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseFarmingStats(
      _who: string,
      _chadary: BigNumberish,
      _degeneracy: BigNumberish,
      _unrekable: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    playerManager(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPlayerManager(
      _playerManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PLAYER_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createBasePlayer(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPlayerBattleStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayerFarmingStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayerStats(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseBattleStats(
      _who: string,
      _strength: BigNumberish,
      _dexterity: BigNumberish,
      _defence: BigNumberish,
      _constitution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseFarmingStats(
      _who: string,
      _chadary: BigNumberish,
      _degeneracy: BigNumberish,
      _unrekable: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    playerManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPlayerManager(
      _playerManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}