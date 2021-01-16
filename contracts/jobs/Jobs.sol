pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "../player/Treasury.sol";

contract Jobs is Ownable {
    using SafeMath for uint256;

    event IndustryCreated(uint256 id, string name);
    event JobCreated(uint256 id, uint256 salary, uint256 industry, Stats statsRequired, Stats statsDailyIncrease);

    struct Industry {
        string name;
        uint256 listPointer;
    }

    struct Job {
        uint256 salary;
        uint256 industry;
        Stats statsRequired;
        Stats statsDailyIncrease;
        uint256 listPointer;
    }

    struct Stats {
        uint256 chadary;
        uint256 degeneracy;
        uint256 unrekable;
    }

    mapping(uint256 => Industry) public industries;
    uint256[] public industryList;

    mapping(uint256 => Job) public jobs;
    uint256[] public jobList;

    function listJobIndustry(string memory _name) public returns (uint256 _id) {
        uint256 pointer = industryList.length;

        industries[pointer] = Industry({
        name : _name,
        listPointer : pointer
        });

        industryList.push(pointer);

        emit IndustryCreated(pointer, _name);

        return pointer;
    }

    function listJob(
        uint256 _salary,
        uint256 _industry,
        Stats memory _statsRequired,
        Stats memory _statsDailyIncrease
    ) public {
        uint256 pointer = jobList.length;

        jobs[pointer] = Job({
        salary : _salary,
        industry : _industry,
        statsRequired : _statsRequired,
        statsDailyIncrease : _statsDailyIncrease,
        listPointer : pointer
        });

        jobList.push(pointer);

        emit JobCreated(pointer, _salary, _industry, _statsRequired, _statsDailyIncrease);
    }

    function getJobCount() public view returns (uint256 itemCount) {
        return jobList.length;
    }

    function isEntity(uint256 _jobId) public view returns (bool) {
        if (jobList.length == 0) {
            return false;
        }

        return jobList[jobs[_jobId].listPointer] == _jobId;
    }

    //    function getItems() public view returns (
    //        uint256[] memory id,
    //        Stats[] memory statsRequired,
    //        Stats[] memory statsDailyIncrease
    //    ) {
    //        uint256[] memory salary = new uint256[](jobList.length);
    //        uint256[] memory industry = new uint256[](jobList.length);
    //        Stats[] memory statsRequired = new uint256[](jobList.length);
    //        Stats[] memory itemPrices = new uint256[](jobList.length);
    //
    //        for (uint256 i = 0; i < jobList.length; i++) {
    //            itemPrices[i] = jobs[jobList[i]].salary;
    //        }
    //
    //        return (salary, industry, statsRequired, itemPrices);
    //    }

    //    function updateJob(
    //        uint256 _jobId,
    //        uint256 _salary,
    //        Stats _statsRequired,
    //        Stats _statsDailyIncrease
    //    ) public {
    //        require(isEntity(_jobId), "Job not found");
    //
    //        jobStructs[_itemAddress].price = _itemPrice;
    //
    //        emit ItemUpdated(_itemAddress, _itemPrice, block.timestamp);
    //    }
    //
    //    function remove(address _itemAddress) public {
    //        require(isEntity(_itemAddress), "Item not found");
    //
    //        uint256 rowToDelete = jobStructs[_itemAddress].listPointer;
    //
    //        // If length is  1 or the row to delete is the final row we will just remove the record
    //        if (jobList.length > 1 && rowToDelete != jobList.length - 1) {
    //            // last row in list
    //            address rowToMove = jobList[jobList.length - 1];
    //
    //            // swap delete row with row ot move
    //            jobStructs[rowToMove].listPointer = rowToDelete;
    //        }
    //
    //        jobList.pop();
    //        delete jobStructs[_itemAddress];
    //
    //        emit ItemRemoved(_itemAddress, block.timestamp);
    //    }
}
