/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Treasury,
  TreasuryInterface,
} from "../../../contracts/player/Treasury";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CASH_SPENDER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "balances",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cashAddress",
        type: "address",
      },
    ],
    name: "setCashAddress",
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
    name: "setCashSpender",
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
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "spendCash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610029600080516020610d9283398151915233610066565b6100617f376de48394d1421643e79d0b137a7965cab921c7926a2800d2ebe97274aedb92600080516020610d92833981519152610074565b61015d565b61007082826100bf565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610070576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556101193390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610c268061016c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806336568abe1161008c578063a217fddf11610066578063a217fddf146101e9578063bdf752bb146101f1578063cabdae7b14610204578063d547741f1461021757600080fd5b806336568abe146101b05780633743089a146101c357806391d14854146101d657600080fd5b806301ffc9a7146100d457806311b1b285146100fc578063248a9ca31461013157806327e235e3146101545780632a0acc6a146101745780632f2ff15d1461019b575b600080fd5b6100e76100e236600461097d565b61022a565b60405190151581526020015b60405180910390f35b6101237f376de48394d1421643e79d0b137a7965cab921c7926a2800d2ebe97274aedb9281565b6040519081526020016100f3565b61012361013f3660046109a7565b60009081526020819052604090206001015490565b6101236101623660046109dc565b60026020526000908152604090205481565b6101237fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4281565b6101ae6101a93660046109f7565b610261565b005b6101ae6101be3660046109f7565b61028b565b6101ae6101d13660046109dc565b61030e565b6100e76101e43660046109f7565b61039d565b610123600081565b6101ae6101ff3660046109dc565b6103c6565b6101ae610212366004610a23565b61044a565b6101ae6102253660046109f7565b61065e565b60006001600160e01b03198216637965db0b60e01b148061025b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008281526020819052604090206001015461027c81610683565b610286838361068d565b505050565b6001600160a01b03811633146103005760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61030a8282610711565b5050565b6103387fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec423361039d565b6103705760405162461bcd60e51b81526020600482015260096024820152682737ba1020b236b4b760b91b60448201526064016102f7565b61039a7f376de48394d1421643e79d0b137a7965cab921c7926a2800d2ebe97274aedb9282610261565b50565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6103f07fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec423361039d565b6104285760405162461bcd60e51b81526020600482015260096024820152682737ba1020b236b4b760b91b60448201526064016102f7565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6104747f376de48394d1421643e79d0b137a7965cab921c7926a2800d2ebe97274aedb923361039d565b6104b35760405162461bcd60e51b815260206004820152601060248201526f2737ba1021b0b9b41029b832b73232b960811b60448201526064016102f7565b6001546040516370a0823160e01b815232600482015282916001600160a01b0316906370a082319060240160206040518083038186803b1580156104f657600080fd5b505afa15801561050a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052e9190610a4d565b10156105715760405162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e742066756e647360701b60448201526064016102f7565b6001546040516323b872dd60e01b8152326004820152306024820152604481018390526001600160a01b03909116906323b872dd90606401602060405180830381600087803b1580156105c357600080fd5b505af11580156105d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fb9190610a66565b50600154604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b15801561064257600080fd5b505af1158015610656573d6000803e3d6000fd5b505050505050565b60008281526020819052604090206001015461067981610683565b6102868383610711565b61039a8133610776565b610697828261039d565b61030a576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556106cd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61071b828261039d565b1561030a576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610780828261039d565b61030a57610798816001600160a01b031660146107da565b6107a38360206107da565b6040516020016107b4929190610ab8565b60408051601f198184030181529082905262461bcd60e51b82526102f791600401610b2d565b606060006107e9836002610b76565b6107f4906002610b95565b67ffffffffffffffff81111561080c5761080c610bad565b6040519080825280601f01601f191660200182016040528015610836576020820181803683370190505b509050600360fc1b8160008151811061085157610851610bc3565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061088057610880610bc3565b60200101906001600160f81b031916908160001a90535060006108a4846002610b76565b6108af906001610b95565b90505b6001811115610927576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106108e3576108e3610bc3565b1a60f81b8282815181106108f9576108f9610bc3565b60200101906001600160f81b031916908160001a90535060049490941c9361092081610bd9565b90506108b2565b5083156109765760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102f7565b9392505050565b60006020828403121561098f57600080fd5b81356001600160e01b03198116811461097657600080fd5b6000602082840312156109b957600080fd5b5035919050565b80356001600160a01b03811681146109d757600080fd5b919050565b6000602082840312156109ee57600080fd5b610976826109c0565b60008060408385031215610a0a57600080fd5b82359150610a1a602084016109c0565b90509250929050565b60008060408385031215610a3657600080fd5b610a3f836109c0565b946020939093013593505050565b600060208284031215610a5f57600080fd5b5051919050565b600060208284031215610a7857600080fd5b8151801515811461097657600080fd5b60005b83811015610aa3578181015183820152602001610a8b565b83811115610ab2576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610af0816017850160208801610a88565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610b21816028840160208801610a88565b01602801949350505050565b6020815260008251806020840152610b4c816040850160208701610a88565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610b9057610b90610b60565b500290565b60008219821115610ba857610ba8610b60565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610be857610be8610b60565b50600019019056fea26469706673582212201fcd92514d17bfdc1012297ee047769157430fa6ed6891ac9102f055acfeb6de64736f6c63430008090033df8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42";

type TreasuryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Treasury__factory extends ContractFactory {
  constructor(...args: TreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Treasury> {
    return super.deploy(overrides || {}) as Promise<Treasury>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Treasury {
    return super.attach(address) as Treasury;
  }
  override connect(signer: Signer): Treasury__factory {
    return super.connect(signer) as Treasury__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryInterface {
    return new utils.Interface(_abi) as TreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Treasury {
    return new Contract(address, _abi, signerOrProvider) as Treasury;
  }
}
