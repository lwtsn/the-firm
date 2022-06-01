/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Cash, CashInterface } from "../../contracts/Cash";

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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    name: "CASH_MINTER",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "_who",
        type: "address",
      },
    ],
    name: "setCashMinter",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260048082526308682a6960e31b60208084019182528451808601909552828552630868248960e31b90850152825192939262000059929190620001cf565b5080516200006f906005906020840190620001cf565b50505062000093600080516020620015ba83398151915233620000d460201b60201c565b620000ce7f1ebd01cd98c76444424e6ba39db9b63ef827afb6dcc53302cd432aabb380ee79600080516020620015ba833981519152620000e4565b620002b2565b620000e082826200012f565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e0576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200018b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b828054620001dd9062000275565b90600052602060002090601f0160209004810192826200020157600085556200024c565b82601f106200021c57805160ff19168380011785556200024c565b828001600101855582156200024c579182015b828111156200024c5782518255916020019190600101906200022f565b506200025a9291506200025e565b5090565b5b808211156200025a57600081556001016200025f565b600181811c908216806200028a57607f821691505b60208210811415620002ac57634e487b7160e01b600052602260045260246000fd5b50919050565b6112f880620002c26000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806339ffb454116100c3578063a217fddf1161007c578063a217fddf146102d8578063a457c2d7146102e0578063a9059cbb146102f3578063d547741f14610306578063dd62ed3e14610319578063de5d3ed41461032c57600080fd5b806339ffb4541461025b57806340c10f191461026e57806342966c681461028157806370a082311461029457806391d14854146102bd57806395d89b41146102d057600080fd5b8063248a9ca311610115578063248a9ca3146101c75780632a0acc6a146101ea5780632f2ff15d14610211578063313ce5671461022657806336568abe14610235578063395093511461024857600080fd5b806301ffc9a71461015257806306fdde031461017a578063095ea7b31461018f57806318160ddd146101a257806323b872dd146101b4575b600080fd5b610165610160366004610fd6565b610353565b60405190151581526020015b60405180910390f35b61018261038a565b604051610171919061102c565b61016561019d36600461107b565b61041c565b6003545b604051908152602001610171565b6101656101c23660046110a5565b610434565b6101a66101d53660046110e1565b60009081526020819052604090206001015490565b6101a67fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4281565b61022461021f3660046110fa565b610458565b005b60405160128152602001610171565b6102246102433660046110fa565b610482565b61016561025636600461107b565b610505565b610224610269366004611126565b610527565b61022461027c36600461107b565b6105b6565b61022461028f3660046110e1565b610628565b6101a66102a2366004611126565b6001600160a01b031660009081526001602052604090205490565b6101656102cb3660046110fa565b610632565b61018261065b565b6101a6600081565b6101656102ee36600461107b565b61066a565b61016561030136600461107b565b6106e5565b6102246103143660046110fa565b6106f3565b6101a6610327366004611141565b610718565b6101a67f1ebd01cd98c76444424e6ba39db9b63ef827afb6dcc53302cd432aabb380ee7981565b60006001600160e01b03198216637965db0b60e01b148061038457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600480546103999061116b565b80601f01602080910402602001604051908101604052809291908181526020018280546103c59061116b565b80156104125780601f106103e757610100808354040283529160200191610412565b820191906000526020600020905b8154815290600101906020018083116103f557829003601f168201915b5050505050905090565b60003361042a818585610743565b5060019392505050565b600033610442858285610867565b61044d8585856108e1565b506001949350505050565b60008281526020819052604090206001015461047381610aaf565b61047d8383610ab9565b505050565b6001600160a01b03811633146104f75760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105018282610b3d565b5050565b60003361042a8185856105188383610718565b61052291906111bc565b610743565b6105517fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4233610632565b6105895760405162461bcd60e51b81526020600482015260096024820152682737ba1020b236b4b760b91b60448201526064016104ee565b6105b37f1ebd01cd98c76444424e6ba39db9b63ef827afb6dcc53302cd432aabb380ee7982610458565b50565b6105e07f1ebd01cd98c76444424e6ba39db9b63ef827afb6dcc53302cd432aabb380ee7933610632565b61061e5760405162461bcd60e51b815260206004820152600f60248201526e2737ba1021b0b9b41026b4b73a32b960891b60448201526064016104ee565b6105018282610ba2565b6105b33382610c81565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600580546103999061116b565b600033816106788286610718565b9050838110156106d85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104ee565b61044d8286868403610743565b60003361042a8185856108e1565b60008281526020819052604090206001015461070e81610aaf565b61047d8383610b3d565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6001600160a01b0383166107a55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104ee565b6001600160a01b0382166108065760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104ee565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006108738484610718565b905060001981146108db57818110156108ce5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104ee565b6108db8484848403610743565b50505050565b6001600160a01b0383166109455760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104ee565b6001600160a01b0382166109a75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104ee565b6001600160a01b03831660009081526001602052604090205481811015610a1f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104ee565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610a569084906111bc565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610aa291815260200190565b60405180910390a36108db565b6105b38133610dcf565b610ac38282610632565b610501576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610af93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610b478282610632565b15610501576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610bf85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104ee565b8060036000828254610c0a91906111bc565b90915550506001600160a01b03821660009081526001602052604081208054839290610c379084906111bc565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610ce15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104ee565b6001600160a01b03821660009081526001602052604090205481811015610d555760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104ee565b6001600160a01b0383166000908152600160205260408120838303905560038054849290610d849084906111d4565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610dd98282610632565b61050157610df1816001600160a01b03166014610e33565b610dfc836020610e33565b604051602001610e0d9291906111eb565b60408051601f198184030181529082905262461bcd60e51b82526104ee9160040161102c565b60606000610e42836002611260565b610e4d9060026111bc565b67ffffffffffffffff811115610e6557610e6561127f565b6040519080825280601f01601f191660200182016040528015610e8f576020820181803683370190505b509050600360fc1b81600081518110610eaa57610eaa611295565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610ed957610ed9611295565b60200101906001600160f81b031916908160001a9053506000610efd846002611260565b610f089060016111bc565b90505b6001811115610f80576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f3c57610f3c611295565b1a60f81b828281518110610f5257610f52611295565b60200101906001600160f81b031916908160001a90535060049490941c93610f79816112ab565b9050610f0b565b508315610fcf5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104ee565b9392505050565b600060208284031215610fe857600080fd5b81356001600160e01b031981168114610fcf57600080fd5b60005b8381101561101b578181015183820152602001611003565b838111156108db5750506000910152565b602081526000825180602084015261104b816040850160208701611000565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461107657600080fd5b919050565b6000806040838503121561108e57600080fd5b6110978361105f565b946020939093013593505050565b6000806000606084860312156110ba57600080fd5b6110c38461105f565b92506110d16020850161105f565b9150604084013590509250925092565b6000602082840312156110f357600080fd5b5035919050565b6000806040838503121561110d57600080fd5b8235915061111d6020840161105f565b90509250929050565b60006020828403121561113857600080fd5b610fcf8261105f565b6000806040838503121561115457600080fd5b61115d8361105f565b915061111d6020840161105f565b600181811c9082168061117f57607f821691505b602082108114156111a057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156111cf576111cf6111a6565b500190565b6000828210156111e6576111e66111a6565b500390565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611223816017850160208801611000565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611254816028840160208801611000565b01602801949350505050565b600081600019048311821515161561127a5761127a6111a6565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816112ba576112ba6111a6565b50600019019056fea264697066735822122019b1616f34579dd628163c309816ce1e85e5e2952726f59c61564a70774e872164736f6c63430008090033df8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42";

type CashConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CashConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cash__factory extends ContractFactory {
  constructor(...args: CashConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Cash> {
    return super.deploy(overrides || {}) as Promise<Cash>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Cash {
    return super.attach(address) as Cash;
  }
  override connect(signer: Signer): Cash__factory {
    return super.connect(signer) as Cash__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CashInterface {
    return new utils.Interface(_abi) as CashInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Cash {
    return new Contract(address, _abi, signerOrProvider) as Cash;
  }
}
