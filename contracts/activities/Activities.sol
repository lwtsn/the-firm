pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./BaseActivity.sol";

contract Activities {
    using SafeMath for uint256;

    struct Activity {
        address activityAddress;
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

    uint public nextActivityId;

    constructor() public {
        nextActivityId = 1;
    }

    function addActivity(address _activityAddress) public {
        activities[nextActivityId] = Activity({
        activityAddress : _activityAddress,
        isActivity : true
        });

        nextActivityId = nextActivityId.add(1);
    }

    function startActivity(uint256 _activityId) public {
        require(activities[_activityId].isActivity, "Invalid activity chosen");
        require(ongoingActivities[msg.sender].hasActiveActivity == false, "An activity is already in progress");

        BaseActivity(activities[_activityId].activityAddress).start(msg.sender);

        ongoingActivities[msg.sender].hasActiveActivity = true;
        ongoingActivities[msg.sender].activity = _activityId;
        ongoingActivities[msg.sender].timeStarted = block.timestamp;
        ongoingActivities[msg.sender].timeCompleting = block.timestamp.add(
            BaseActivity(activities[_activityId].activityAddress).duration()
        );
    }

    function completeActivity(uint256 _activityId) public {
        require(ongoingActivities[msg.sender].hasActiveActivity, "No activity in progress");
        require(block.timestamp >= ongoingActivities[msg.sender].timeCompleting, "Activity is not complete");

        BaseActivity(activities[_activityId].activityAddress).complete(msg.sender);

        ongoingActivities[msg.sender].hasActiveActivity = false;
        ongoingActivities[msg.sender].activity = 0;
        ongoingActivities[msg.sender].timeStarted = 0;
        ongoingActivities[msg.sender].timeCompleting = 0;
    }

    function listActivities() public view returns (bool[] memory _schemes) {
        bool[] memory activeSchemes = new bool[](nextActivityId);

        for (uint256 i = 0; i < nextActivityId; i++) {
            if (activities[i].isActivity) {
                activeSchemes[i] = true;
            }
        }

        return activeSchemes;
    }
}
