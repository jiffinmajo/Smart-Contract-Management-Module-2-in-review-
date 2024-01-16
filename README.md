# Smart-Contract-Management-Module-2-in-review-
Seperate repository for the 2nd module Smart Contract Management
For this module i have created a contract using some functions called MyBank. 
# Statements 
1. Ownership: The owner variable stores the contract's owner address.
2. Balance: The balance variable tracks the contract's available funds.
3. Constructor: Sets the initial owner to the contract deployer.
4. getBalance: Returns the current balance.
5. deposit: Accepts ETH payments and adds them to the balance.
6. onlyOwner modifier: Ensures only the owner can call functions with this modifier.
7. withdraw: Allows the owner to withdraw funds, with a balance check.
# Frontend Interaction-
1. Connect to Web3: Use a library like Web3.js to connect your frontend to the blockchain network.
2. Fetch Contract Address: Retrieve the deployed contract's address.
3. Create Contract Instance: Use Web3.js to create a contract instance for interaction.
4. Call Contract Functions: Use the contract instance to call functions like getBalance(), deposit(), and withdraw(), passing necessary parameters and handling responses.

Loom: https://www.loom.com/share/807d9915073244e8819fad125fa9de20?sid=893acc35-c6ec-41c3-8f4a-a17c68c5ad9b
