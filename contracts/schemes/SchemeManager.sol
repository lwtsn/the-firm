pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./BaseScheme.sol";

contract SchemeManager {
    using SafeMath for uint256;

    event SchemeAdded(address schemeAddress, uint256 id, uint256 when);
    event SchemeStarted(address schemeAddress, address who, uint256 when);

    struct Scheme {
        address schemeAddress;
        bool isScheme;
    }

    struct OngoingScheme {
        uint256 schemeId;
        uint256 timeStarted;
        uint256 timeCompleting;
    }

    uint256 public nextSchemeId;

    mapping(address => OngoingScheme) internal ongoingSchemes;
    mapping(address => bool) internal hasOngoingScheme;

    mapping(uint256 => Scheme) public schemes;

    constructor() public {
        nextSchemeId = 1;
    }

    function addScheme(address _schemeAddress) public {
        emit SchemeAdded(_schemeAddress, nextSchemeId, block.timestamp);

        schemes[nextSchemeId] = Scheme({schemeAddress: _schemeAddress, isScheme: true});

        nextSchemeId = nextSchemeId.add(1);
    }

    function startScheme(uint256 _schemeId) public {
        require(schemes[_schemeId].isScheme, "Invalid scheme chosen");
        require(hasOngoingScheme[msg.sender] == false, "A scheme is already in progress");

        BaseScheme(schemes[_schemeId].schemeAddress).start(msg.sender);

        start(msg.sender, _schemeId);

        emit SchemeStarted(schemes[_schemeId].schemeAddress, msg.sender, block.timestamp);
    }

    // todo scheme logic sits here and calls complete
    function completeScheme() public {
        require(hasOngoingScheme[msg.sender], "No scheme in progress");
        require(block.timestamp >= ongoingSchemes[msg.sender].timeCompleting, "Scheme is not complete");

        uint256 schemeId = ongoingSchemes[msg.sender].schemeId;
        BaseScheme(schemes[schemeId].schemeAddress).complete(msg.sender);

        complete(msg.sender, schemeId);
    }

    function skipScheme() public {
        require(hasOngoingScheme[msg.sender], "No scheme in progress");

        uint256 schemeId = ongoingSchemes[msg.sender].schemeId;
        BaseScheme(schemes[schemeId].schemeAddress).complete(msg.sender);

        complete(msg.sender, schemeId);
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

    function start(address _who, uint256 _schemeId) internal {
        require(false == hasOngoingScheme[_who], "A scheme is already in progress");

        hasOngoingScheme[_who] = true;

        ongoingSchemes[msg.sender].schemeId = _schemeId;
        ongoingSchemes[msg.sender].timeStarted = block.timestamp;
        ongoingSchemes[msg.sender].timeCompleting = block.timestamp.add(
            BaseScheme(schemes[_schemeId].schemeAddress).duration()
        );
    }

    function complete(address _who, uint256 _schemeId) internal {
        require(hasOngoingScheme[msg.sender], "No scheme in progress");

        hasOngoingScheme[_who] = false;

        ongoingSchemes[msg.sender].schemeId = 0;
        ongoingSchemes[msg.sender].timeStarted = 0;
        ongoingSchemes[msg.sender].timeCompleting = 0;
    }

    function getOngoingScheme(address _who)
        public
        view
        returns (
            bool _isOngoing,
            uint256 _schemeId,
            address _schemeAddress,
            uint256 _timeStarted,
            uint256 _timeCompleting
        )
    {
        if (hasOngoingScheme[_who]) {
            uint256 schemeId = ongoingSchemes[_who].schemeId;

            return (
                true,
                schemeId,
                schemes[schemeId].schemeAddress,
                ongoingSchemes[_who].timeStarted,
                ongoingSchemes[_who].timeCompleting
            );
        }
        return (false, 0, address(0), 0, 0);
    }
}
