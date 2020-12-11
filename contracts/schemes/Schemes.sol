pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./BaseScheme.sol";

contract Schemes {
    using SafeMath for uint256;

    struct Scheme {
        address schemeAddress;
        bool isScheme;
    }

    struct OngoingScheme {
        uint256 scheme;
        uint256 timeStarted;
        uint256 timeCompleting;
        bool hasActiveScheme;
    }

    mapping(uint256 => Scheme) public schemes;
    mapping(address => OngoingScheme) public ongoingSchemes;

    uint public nextSchemeId;

    constructor() public {
        nextSchemeId = 1;
    }

    function addScheme(address _schemeAddress) public {
        schemes[nextSchemeId] = Scheme({
        schemeAddress : _schemeAddress,
        isScheme : true
        });

        nextSchemeId = nextSchemeId.add(1);
    }

    function startScheme(uint256 _schemeId) public {
        require(schemes[_schemeId].isScheme, "Invalid scheme chosen");
        require(ongoingSchemes[msg.sender].hasActiveScheme == false, "An scheme is already in progress");

        BaseScheme(schemes[_schemeId].schemeAddress).start(msg.sender);

        ongoingSchemes[msg.sender].hasActiveScheme = true;
        ongoingSchemes[msg.sender].scheme = _schemeId;
        ongoingSchemes[msg.sender].timeStarted = block.timestamp;
        ongoingSchemes[msg.sender].timeCompleting = block.timestamp.add(
            BaseScheme(schemes[_schemeId].schemeAddress).duration()
        );
    }

    function completeScheme(uint256 _schemeId) public {
        require(ongoingSchemes[msg.sender].hasActiveScheme, "No scheme in progress");
        require(block.timestamp >= ongoingSchemes[msg.sender].timeCompleting, "Scheme is not complete");

        BaseScheme(schemes[_schemeId].schemeAddress).complete(msg.sender);

        ongoingSchemes[msg.sender].hasActiveScheme = false;
        ongoingSchemes[msg.sender].scheme = 0;
        ongoingSchemes[msg.sender].timeStarted = 0;
        ongoingSchemes[msg.sender].timeCompleting = 0;
    }

    function listSchemes() public view returns (bool[] memory _schemes) {
        bool[] memory activeSchemes = new bool[](nextSchemeId);

        for (uint256 i = 0; i < nextSchemeId; i++) {
            if (schemes[i].isScheme) {
                activeSchemes[i] = true;
            }
        }

        return activeSchemes;
    }
}
