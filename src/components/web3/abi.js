let abi = {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string[]",
              "name": "_skills",
              "type": "string[]"
            }
          ],
          "name": "addSkills",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "bytes[]",
              "name": "_skills",
              "type": "bytes[]"
            }
          ],
          "name": "getCertainKudos",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "giver",
                      "type": "address"
                    },
                    {
                      "internalType": "string[]",
                      "name": "projectLink",
                      "type": "string[]"
                    }
                  ],
                  "internalType": "struct Kudos.UserRate[]",
                  "name": "giver",
                  "type": "tuple[]"
                },
                {
                  "internalType": "string",
                  "name": "skill",
                  "type": "string"
                }
              ],
              "internalType": "struct Kudos.KudosInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "_skill",
              "type": "bytes"
            }
          ],
          "name": "getKudos",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "giver",
                  "type": "address"
                },
                {
                  "internalType": "string[]",
                  "name": "projectLink",
                  "type": "string[]"
                }
              ],
              "internalType": "struct Kudos.UserRate[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getSkills",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getUserKudos",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "giver",
                      "type": "address"
                    },
                    {
                      "internalType": "string[]",
                      "name": "projectLink",
                      "type": "string[]"
                    }
                  ],
                  "internalType": "struct Kudos.UserRate[]",
                  "name": "giver",
                  "type": "tuple[]"
                },
                {
                  "internalType": "string",
                  "name": "skill",
                  "type": "string"
                }
              ],
              "internalType": "struct Kudos.KudosInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "_skill",
              "type": "bytes"
            },
            {
              "internalType": "string[]",
              "name": "_projectLink",
              "type": "string[]"
            }
          ],
          "name": "giveKudos",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "compilationTarget": {
        "contracts/3_Ballot.sol": "Kudos"
      },
      "evmVersion": "paris",
      "libraries": {},
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "remappings": []
    },
    "sources": {
      "contracts/3_Ballot.sol": {
        "keccak256": "0x3170ffe76ff346b31a703ba4ebc73d635741110283cf7826d5b596f854ff0495",
        "license": "UNLICENSED",
        "urls": [
          "bzz-raw://4f44835e77f6df61874fc62e87b0637a468080979d5cee8deb80fd32abb858e0",
          "dweb:/ipfs/QmZTGwAVRYrn6X2Yk34jXbDqvkEFWK8KneeTxWGDcySaEn"
        ]
      }
    },
    "version": 1
  }
  export {abi}