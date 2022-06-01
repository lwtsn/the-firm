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
        name: "_cashContractAddress",
        type: "address",
      },
    ],
    name: "setCashContract",
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
    inputs: [
      {
        internalType: "address",
        name: "_randomNumberGenerator",
        type: "address",
      },
    ],
    name: "setRandomNumberGenerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasuryAddress",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b5060405161061738038061061783398101604081905261002f91610049565b600094909455600192909255600255600755600855610089565b600080600080600060a0868803121561006157600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b61057f806100986000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d07f8a431161005b578063d07f8a4314610101578063dd0b281e14610131578063f0f4426014610144578063ff83298a1461017457600080fd5b80630fb5a6b41461008d57806350fc2964146100a957806393af0292146100db5780639ecb7c41146100ee575b600080fd5b61009660005481565b6040519081526020015b60405180910390f35b6100d96100b7366004610442565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b005b6100d96100e9366004610442565b61018a565b6100d96100fc366004610442565b6101ae565b6100d961010f366004610442565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6100d961013f366004610442565b610249565b6100d9610152366004610442565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b61017c610255565b6040516100a09291906104bf565b600061019461028b565b905080600254106101aa576101aa82602161030f565b5050565b600480546001600160a01b0319166001600160a01b03838116918217835560055460405163095ea7b360e01b815291169281019290925260001960248301529063095ea7b390604401602060405180830381600087803b15801561021157600080fd5b505af1158015610225573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101aa91906104e0565b610252816103de565b50565b6000606060005461028360408051808201909152600a8152695969656c64206661726d60b01b602082015290565b915091509091565b600354604051631a1a799360e01b8152606460048201526000916001600160a01b031690631a1a799390602401602060405180830381600087803b1580156102d257600080fd5b505af11580156102e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030a9190610502565b905090565b600480546040516340c10f1960e01b81523092810192909252602482018390526001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561035c57600080fd5b505af1158015610370573d6000803e3d6000fd5b5050600554604051632913b8c560e21b81526001600160a01b03868116600483015260248201869052909116925063a44ee3149150604401600060405180830381600087803b1580156103c257600080fd5b505af11580156103d6573d6000803e3d6000fd5b505050505050565b7f770ec39a627afda6de8b8d68f80104e297a2cd74a7544ee4f52b4912705c260861042660408051808201909152600a8152695969656c64206661726d60b01b602082015290565b82426040516104379392919061051b565b60405180910390a150565b60006020828403121561045457600080fd5b81356001600160a01b038116811461046b57600080fd5b9392505050565b6000815180845260005b818110156104985760208185018101518683018201520161047c565b818111156104aa576000602083870101525b50601f01601f19169290920160200192915050565b8281526040602082015260006104d86040830184610472565b949350505050565b6000602082840312156104f257600080fd5b8151801515811461046b57600080fd5b60006020828403121561051457600080fd5b5051919050565b60608152600061052e6060830186610472565b6001600160a01b03949094166020830152506040015291905056fea26469706673582212206ee6bea0f89e35907c72bbac6e959f76cf5d324e3a4ba625a57654264d3fad3c64736f6c63430008090033";

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
