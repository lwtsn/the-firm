/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YieldFarm,
  YieldFarmInterface,
} from "../../../contracts/schemes/YieldFarm";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_experience",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_chanceOfSuccess",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_baseEarning",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_earningBonus",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "SchemeCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "SchemeStarted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "complete",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getScheme",
    outputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102e63803806102e683398101604081905261002f91610049565b600094909455600192909255600255600355600455610089565b600080600080600060a0868803121561006157600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b61024e806100986000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630fb5a6b41461005157806393af02921461006d578063dd0b281e14610080578063ff83298a14610093575b600080fd5b61005a60005481565b6040519081526020015b60405180910390f35b61007e61007b36600461014c565b50565b005b61007e61008e36600461014c565b6100a9565b61009b6100b2565b6040516100649291906101c9565b61007b816100e8565b600060606000546100e060408051808201909152600a8152695969656c64206661726d60b01b602082015290565b915091509091565b7f770ec39a627afda6de8b8d68f80104e297a2cd74a7544ee4f52b4912705c260861013060408051808201909152600a8152695969656c64206661726d60b01b602082015290565b8242604051610141939291906101ea565b60405180910390a150565b60006020828403121561015e57600080fd5b81356001600160a01b038116811461017557600080fd5b9392505050565b6000815180845260005b818110156101a257602081850181015186830182015201610186565b818111156101b4576000602083870101525b50601f01601f19169290920160200192915050565b8281526040602082015260006101e2604083018461017c565b949350505050565b6060815260006101fd606083018661017c565b6001600160a01b03949094166020830152506040015291905056fea2646970667358221220524b4bf17b726df6b25635e1377d21d2d02d91db615cc79f4dfaa5e18a77084364736f6c63430008090033";

type YieldFarmConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldFarmConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldFarm__factory extends ContractFactory {
  constructor(...args: YieldFarmConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _duration: BigNumberish,
    _experience: BigNumberish,
    _chanceOfSuccess: BigNumberish,
    _baseEarning: BigNumberish,
    _earningBonus: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldFarm> {
    return super.deploy(
      _duration,
      _experience,
      _chanceOfSuccess,
      _baseEarning,
      _earningBonus,
      overrides || {}
    ) as Promise<YieldFarm>;
  }
  override getDeployTransaction(
    _duration: BigNumberish,
    _experience: BigNumberish,
    _chanceOfSuccess: BigNumberish,
    _baseEarning: BigNumberish,
    _earningBonus: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _duration,
      _experience,
      _chanceOfSuccess,
      _baseEarning,
      _earningBonus,
      overrides || {}
    );
  }
  override attach(address: string): YieldFarm {
    return super.attach(address) as YieldFarm;
  }
  override connect(signer: Signer): YieldFarm__factory {
    return super.connect(signer) as YieldFarm__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldFarmInterface {
    return new utils.Interface(_abi) as YieldFarmInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldFarm {
    return new Contract(address, _abi, signerOrProvider) as YieldFarm;
  }
}
