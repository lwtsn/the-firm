pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "../utils/Random.sol";

contract Activities {
    using SafeMath for uint256;

    struct Activity {
        string name;
        uint256 duration;
        uint256 experience;
        uint8 successChance;
        bool isActivity;
    }

    struct OngoingActivity {
        uint256 activity;
        uint256 timeStarted;
        uint256 timeCompleting;
        bool hasActiveActivity;
    }

    mapping(uint256 => Activity) public activities;
    mapping(address => OngoingActivity) public ongoingActivities;

    uint internal nextActivityId;

    address internal randomNumberGenerator;

    constructor() public {
        nextActivityId = 1;
    }

    function setRandomNumberGenerator(address _randomNumberGenerator) public {
        randomNumberGenerator = _randomNumberGenerator;
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
        successChance : successChance,
        isActivity : true
        });

        nextActivityId = nextActivityId.add(1);
    }

    function startActivity(uint256 _activityId) public {
        require(activities[_activityId].isActivity, "Invalid activity chosen");
        require(ongoingActivities[msg.sender].hasActiveActivity == false, "An activity is already in progress");

        ongoingActivities[msg.sender].hasActiveActivity = true;
        ongoingActivities[msg.sender].activity = _activityId;
        ongoingActivities[msg.sender].timeStarted = block.timestamp;
        ongoingActivities[msg.sender].timeCompleting = block.timestamp.add(activities[_activityId].duration);
    }

    function completeActivity(uint256 _activityId) public {
        require(ongoingActivities[msg.sender].hasActiveActivity, "No activity in progress");

        uint result = Random(randomNumberGenerator).random(100);

        if (activities[_activityId].successChance >= result) {
            // success
        } else {
            // fail
        }
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
