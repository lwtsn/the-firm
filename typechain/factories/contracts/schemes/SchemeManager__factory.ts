/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SchemeManager,
  SchemeManagerInterface,
} from "../../../contracts/schemes/SchemeManager";

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
        indexed: false,
        internalType: "address",
        name: "schemeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "SchemeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "schemeAddress",
        type: "address",
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
        name: "_schemeAddress",
        type: "address",
      },
    ],
    name: "addScheme",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "completeScheme",
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
    name: "getOngoingScheme",
    outputs: [
      {
        internalType: "bool",
        name: "_isOngoing",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_schemeId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_schemeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timeStarted",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeCompleting",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "listSchemes",
    outputs: [
      {
        internalType: "bool[]",
        name: "_schemes",
        type: "bool[]",
      },
      {
        internalType: "address[]",
        name: "_schemeAddress",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextSchemeId",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "schemes",
    outputs: [
      {
        internalType: "address",
        name: "schemeAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isScheme",
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
    inputs: [],
    name: "skipScheme",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_schemeId",
        type: "uint256",
      },
    ],
    name: "startScheme",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600055610c02806100256000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80639ecb7c41116100715780639ecb7c411461017f578063b1f7c7e014610192578063bb52085e146101a9578063cd8321c1146101fd578063d07f8a4314610205578063f0f442601461023557600080fd5b806301f66ef4146100b957806350fc2964146100ce57806351e65d64146100fe578063589de82d146101065780635b510dbb146101195780638657fa7914610169575b600080fd5b6100cc6100c7366004610a25565b610265565b005b6100cc6100dc366004610a3e565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6100cc6103f9565b6100cc610114366004610a3e565b61050c565b61012c610127366004610a3e565b6105bc565b60408051951515865260208601949094526001600160a01b03909216928401929092526060830191909152608082015260a0015b60405180910390f35b61017161064d565b604051610160929190610a67565b6100cc61018d366004610a3e565b61079a565b61019b60005481565b604051908152602001610160565b6101de6101b7366004610a25565b6007602052600090815260409020546001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b039093168352901515602083015201610160565b6100cc610838565b6100cc610213366004610a3e565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6100cc610243366004610a3e565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600081815260076020526040902054600160a01b900460ff166102c75760405162461bcd60e51b815260206004820152601560248201527424b73b30b634b21039b1b432b6b29031b437b9b2b760591b60448201526064015b60405180910390fd5b3360009081526006602052604090205460ff16156103275760405162461bcd60e51b815260206004820152601f60248201527f4120736368656d6520697320616c726561647920696e2070726f67726573730060448201526064016102be565b60008181526007602052604090819020549051636e85940f60e11b81523360048201526001600160a01b039091169063dd0b281e90602401600060405180830381600087803b15801561037957600080fd5b505af115801561038d573d6000803e3d6000fd5b5050505061039b3382610867565b6000818152600760209081526040918290205482516001600160a01b0390911681523391810191909152428183015290517f40cb373538b7861d93a435fa219ff941fb43218e6a163f4d76d175ba3c1d8c409181900360600190a150565b3360009081526006602052604090205460ff166104285760405162461bcd60e51b81526004016102be90610aed565b336000908152600560205260409020600201544210156104835760405162461bcd60e51b8152602060048201526016602482015275536368656d65206973206e6f7420636f6d706c65746560501b60448201526064016102be565b336000818152600560209081526040808320548084526007909252918290205491516349d7814960e11b81526004810193909352916001600160a01b03909116906393af029290602401600060405180830381600087803b1580156104e757600080fd5b505af11580156104fb573d6000803e3d6000fd5b5050505061050933826109a6565b50565b600054604080516001600160a01b038416815260208101929092524282820152517f1e674b98e7b5009696cddd1156cc26a69d6577667254d8b810d889d357128d9a9181900360600190a16040805180820182526001600160a01b0380841682526001602080840182815260008054815260079092529481209351845495511515600160a01b026001600160a81b031990961693169290921793909317909155546105b691610a12565b60005550565b6001600160a01b038116600090815260066020526040812054819081908190819060ff161561063457505050506001600160a01b038281166000818152600560208181526040808420805480865260078452918520549590945291905260018083015460029093015490955090939290921691610644565b5060009350839250829150819050805b91939590929450565b6060806000805467ffffffffffffffff81111561066c5761066c610b1c565b604051908082528060200260200182016040528015610695578160200160208202803683370190505b5090506000805467ffffffffffffffff8111156106b4576106b4610b1c565b6040519080825280602002602001820160405280156106dd578160200160208202803683370190505b50905060005b60005481101561079057600081815260076020526040902054600160a01b900460ff161561077e57600183828151811061071f5761071f610b32565b91151560209283029190910182015260008281526007909152604090205482516001600160a01b039091169083908390811061075d5761075d610b32565b60200260200101906001600160a01b031690816001600160a01b0316815250505b8061078881610b5e565b9150506106e3565b5090939092509050565b600280546001600160a01b0319166001600160a01b0383811691821790925560035460405163095ea7b360e01b81529216600483015260001960248301529063095ea7b390604401602060405180830381600087803b1580156107fc57600080fd5b505af1158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610b79565b5050565b3360009081526006602052604090205460ff166104835760405162461bcd60e51b81526004016102be90610aed565b6001600160a01b03821660009081526006602052604090205460ff16156108d05760405162461bcd60e51b815260206004820152601f60248201527f4120736368656d6520697320616c726561647920696e2070726f67726573730060448201526064016102be565b6001600160a01b038083166000908152600660209081526040808320805460ff19166001908117909155338452600583528184208681554291015584835260078252918290205482516303ed69ad60e21b8152925161098f949190911692630fb5a6b4926004808301939192829003018186803b15801561095057600080fd5b505afa158015610964573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109889190610b9b565b4290610a12565b336000908152600560205260409020600201555050565b3360009081526006602052604090205460ff166109d55760405162461bcd60e51b81526004016102be90610aed565b506001600160a01b03166000908152600660209081526040808320805460ff19169055338352600590915281208181556001810182905560020155565b6000610a1e8284610bb4565b9392505050565b600060208284031215610a3757600080fd5b5035919050565b600060208284031215610a5057600080fd5b81356001600160a01b0381168114610a1e57600080fd5b604080825283519082018190526000906020906060840190828701845b82811015610aa2578151151584529284019290840190600101610a84565b5050508381038285015284518082528583019183019060005b81811015610ae05783516001600160a01b031683529284019291840191600101610abb565b5090979650505050505050565b6020808252601590820152744e6f20736368656d6520696e2070726f677265737360581b604082015260600190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610b7257610b72610b48565b5060010190565b600060208284031215610b8b57600080fd5b81518015158114610a1e57600080fd5b600060208284031215610bad57600080fd5b5051919050565b60008219821115610bc757610bc7610b48565b50019056fea2646970667358221220fd0b9ac072bc679e0314444ea2901b12fbbcfe4bb7faec557f2fb85e0eb372c164736f6c63430008090033";

type SchemeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SchemeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SchemeManager__factory extends ContractFactory {
  constructor(...args: SchemeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SchemeManager> {
    return super.deploy(overrides || {}) as Promise<SchemeManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SchemeManager {
    return super.attach(address) as SchemeManager;
  }
  override connect(signer: Signer): SchemeManager__factory {
    return super.connect(signer) as SchemeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SchemeManagerInterface {
    return new utils.Interface(_abi) as SchemeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SchemeManager {
    return new Contract(address, _abi, signerOrProvider) as SchemeManager;
  }
}
