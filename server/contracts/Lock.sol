// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelancerMarketplace {
    enum ProfileType { Client, Freelancer }

    struct UserProfile {
        address userAddress;
        string name;
        string skills;
        ProfileType profileType;
    }

    mapping(address => UserProfile) public users;
    mapping(string => address) public usernameToAddress;

    event UserRegistered(address indexed userAddress, string name, ProfileType profileType);
    event UserLoggedIn(address indexed userAddress, ProfileType profileType);

    modifier onlyNotRegistered() {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        _;
    }

    modifier onlyRegistered() {
        require(users[msg.sender].userAddress != address(0), "User not registered");
        _;
    }

    function register(string memory name, string memory skills, ProfileType profileType) public onlyNotRegistered {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(profileType == ProfileType.Client || (profileType == ProfileType.Freelancer && bytes(skills).length > 0), "Invalid profile type or missing skills");

        users[msg.sender] = UserProfile({
            userAddress: msg.sender,
            name: name,
            skills: skills,
            profileType: profileType
        });

        usernameToAddress[name] = msg.sender;

        emit UserRegistered(msg.sender, name, profileType);
    }

    function login() public onlyRegistered {
        emit UserLoggedIn(msg.sender, users[msg.sender].profileType);
    }

    function getUserProfile() public view onlyRegistered returns (string memory, string memory, ProfileType) {
        UserProfile memory userProfile = users[msg.sender];
        return (userProfile.name, userProfile.skills, userProfile.profileType);
    }
}
