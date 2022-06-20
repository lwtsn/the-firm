/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Training,
  TrainingInterface,
} from "../../../contracts/training/Training";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_STAT_MULTIPLIER",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialStat",
        type: "uint256",
      },
      {
        internalType: "enum Training.Duration",
        name: "_duration",
        type: "uint8",
      },
    ],
    name: "calculateStatIncrease",
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
    name: "finish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_playerStatsAddress",
        type: "address",
      },
    ],
    name: "setPlayerStats",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "skipFinish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Training.Stat",
        name: "_stat",
        type: "uint8",
      },
      {
        internalType: "enum Training.Duration",
        name: "_duration",
        type: "uint8",
      },
    ],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "trainingMapping",
    outputs: [
      {
        internalType: "enum Training.Stat",
        name: "stat",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256",
      },
      {
        internalType: "enum Training.Duration",
        name: "duration",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isTraining",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610f438061007e6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b146101785780639264b250146101935780639bc3b9df1461019b578063d56b2889146101ae578063f2fde38b146101b657600080fd5b80631d3ea5fe146100a3578063334182c21461010357806333d2ee661461011d57806350fc29641461013e578063715018a614610170575b600080fd5b6100e96100b1366004610d40565b6001602081905260009182526040909120805491810154600282015460039092015460ff938416939192918181169161010090041685565b6040516100fa959493929190610d7f565b60405180910390f35b61010b600381565b60405160ff90911681526020016100fa565b61013061012b366004610dde565b6101c9565b6040519081526020016100fa565b61016e61014c366004610d40565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b005b61016e61022d565b6000546040516001600160a01b0390911681526020016100fa565b61016e610298565b61016e6101a9366004610e0a565b610828565b61016e6109b1565b61016e6101c4366004610d40565b610a75565b60008060006101d784610b40565b909250905060006101ea610e1084610e50565b905060006101f9836003610e72565b905060008161020b620f42408a610e50565b6102159190610e72565b90506102218382610e72565b98975050505050505050565b6000546001600160a01b0316331461028c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6102966000610cdd565b565b33600090815260016020526040902060030154610100900460ff166102fa5760405162461bcd60e51b8152602060048201526018602482015277547261696e696e6720696e206e6f742070726f677265737360401b6044820152606401610283565b3360009081526001602052604090205460ff16600481111561031e5761031e610d69565b600114156104375760025460405163ab53bf0160e01b81523360048201526000916001600160a01b03169063ab53bf019060240160806040518083038186803b15801561036a57600080fd5b505afa15801561037e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a29190610e91565b5050600254336000818152600160205260409020600301549394506001600160a01b0390911692634ae76f7892506103de90859060ff166101c9565b60008060006040518663ffffffff1660e01b8152600401610403959493929190610ec7565b600060405180830381600087803b15801561041d57600080fd5b505af1158015610431573d6000803e3d6000fd5b50505050505b3360009081526001602052604090205460ff16600481111561045b5761045b610d69565b600214156105755760025460405163ab53bf0160e01b81523360048201526000916001600160a01b03169063ab53bf019060240160806040518083038186803b1580156104a757600080fd5b505afa1580156104bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104df9190610e91565b5050600254336000818152600160205260408120600301549395506001600160a01b039092169350634ae76f789290919061051e90869060ff166101c9565b6000806040518663ffffffff1660e01b8152600401610541959493929190610ec7565b600060405180830381600087803b15801561055b57600080fd5b505af115801561056f573d6000803e3d6000fd5b50505050505b3360009081526001602052604090205460ff16600481111561059957610599610d69565b600314156106b25760025460405163ab53bf0160e01b81523360048201526000916001600160a01b03169063ab53bf019060240160806040518083038186803b1580156105e557600080fd5b505afa1580156105f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061d9190610e91565b50600254336000818152600160205260408120600301549396506001600160a01b039092169450634ae76f78935091819061065c90879060ff166101c9565b60006040518663ffffffff1660e01b815260040161067e959493929190610ec7565b600060405180830381600087803b15801561069857600080fd5b505af11580156106ac573d6000803e3d6000fd5b50505050505b3360009081526001602052604090205460ff1660048111156106d6576106d6610d69565b600414156107f05760025460405163ab53bf0160e01b81523360048201526000916001600160a01b03169063ab53bf019060240160806040518083038186803b15801561072257600080fd5b505afa158015610736573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075a9190610e91565b600254336000818152600160205260408120600301549397506001600160a01b039092169550634ae76f7894509250908190819061079c90889060ff166101c9565b6040518663ffffffff1660e01b81526004016107bc959493929190610ec7565b600060405180830381600087803b1580156107d657600080fd5b505af11580156107ea573d6000803e3d6000fd5b50505050505b6102963360009081526001602081905260408220805460ff191681559081018290556002810191909155600301805461ff0019169055565b33600090815260016020526040902060030154610100900460ff16156108875760405162461bcd60e51b8152602060048201526014602482015273547261696e696e6720696e2070726f677265737360601b6044820152606401610283565b81600481111561089957610899610d69565b6108e55760405162461bcd60e51b815260206004820152601760248201527f54686973206973206e6f742061207265616c20737461740000000000000000006044820152606401610283565b60006108f082610b40565b5033600090815260016020819052604090912080549293508592909160ff199091169083600481111561092557610925610d69565b021790555033600090815260016020819052604090912042910181905561094c9082610d2d565b336000908152600160208190526040909120600281019290925560039091018054849260ff199091169083600881111561098857610988610d69565b021790555050336000908152600160205260409020600301805461ff0019166101001790555050565b33600090815260016020526040902060030154610100900460ff16610a135760405162461bcd60e51b8152602060048201526018602482015277547261696e696e6720696e206e6f742070726f677265737360401b6044820152606401610283565b336000908152600160205260409020600201544210156102fa5760405162461bcd60e51b815260206004820152601960248201527f547261696e696e6720686173206e6f742066696e6973686564000000000000006044820152606401610283565b6000546001600160a01b03163314610acf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610283565b6001600160a01b038116610b345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610283565b610b3d81610cdd565b50565b600080826008811115610b5557610b55610d69565b610b665750610e1092606492509050565b826008811115610b7857610b78610d69565b60011415610b8d5750611c2092606492509050565b826008811115610b9f57610b9f610d69565b60021415610bb4575061384092606692509050565b826008811115610bc657610bc6610d69565b60031415610bdb575061708092606892509050565b826008811115610bed57610bed610d69565b60041415610c02575061a8c092606a92509050565b826008811115610c1457610c14610d69565b60051415610c2a57506201518092606c92509050565b826008811115610c3c57610c3c610d69565b60061415610c5257506202a30092606e92509050565b826008811115610c6457610c64610d69565b60071415610c7a57506205460092607892509050565b826008811115610c8c57610c8c610d69565b60081415610ca2575062093a8092607d92509050565b60405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b210323ab930ba34b7b760811b6044820152606401610283565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610d398284610ef5565b9392505050565b600060208284031215610d5257600080fd5b81356001600160a01b0381168114610d3957600080fd5b634e487b7160e01b600052602160045260246000fd5b60a0810160058710610d9357610d93610d69565b86825285602083015284604083015260098410610db257610db2610d69565b83606083015282151560808301529695505050505050565b803560098110610dd957600080fd5b919050565b60008060408385031215610df157600080fd5b82359150610e0160208401610dca565b90509250929050565b60008060408385031215610e1d57600080fd5b823560058110610e2c57600080fd5b9150610e0160208401610dca565b634e487b7160e01b600052601160045260246000fd5b600082610e6d57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610e8c57610e8c610e3a565b500290565b60008060008060808587031215610ea757600080fd5b505082516020840151604085015160609095015191969095509092509050565b6001600160a01b03959095168552602085019390935260408401919091526060830152608082015260a00190565b60008219821115610f0857610f08610e3a565b50019056fea26469706673582212206b681a9b84176409c6a3010d06e0a534d35fd9cd958d844760d3459430e3082e64736f6c63430008090033";

type TrainingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrainingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Training__factory extends ContractFactory {
  constructor(...args: TrainingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Training> {
    return super.deploy(overrides || {}) as Promise<Training>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Training {
    return super.attach(address) as Training;
  }
  override connect(signer: Signer): Training__factory {
    return super.connect(signer) as Training__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrainingInterface {
    return new utils.Interface(_abi) as TrainingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Training {
    return new Contract(address, _abi, signerOrProvider) as Training;
  }
}