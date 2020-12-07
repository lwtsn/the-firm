pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";

contract Activities {
    using SafeMath for uint256;

    struct Activity {
        string name;
        uint256 duration;
        uint256 experience;
        uint8 successChance;
    }

    mapping(uint256 => Activity) public activities;

    uint internal nextActivityId;

    constructor() public {
        nextActivityId = 1;
    }

    function addActivity(
        string memory name,
        uint256 duration,
        uint256 experience,
        uint8 successChance
    ) public {
        activities[nextActivityId] = Activity({
        name : name,
        duration : duration,
        experience : experience,
        successChance : successChance
        });

        nextActivityId = nextActivityId.add(1);
    }

    function getActivity(uint256 activityId) public view returns (
        string memory name,
        uint256 duration,
        uint256 experience,
        uint8 successChance
    ) {
        return (
        activities[activityId].name,
        activities[activityId].duration,
        activities[activityId].experience,
        activities[activityId].successChance
        );
    }
}
