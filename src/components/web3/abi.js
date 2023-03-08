export const abi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_skills",
        type: "string[]",
      },
    ],
    name: "addSkills",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "_skills",
        type: "bytes[]",
      },
    ],
    name: "getCertainKudos",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "count",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "giver",
                type: "address",
              },
              {
                internalType: "string[]",
                name: "projectLink",
                type: "string[]",
              },
            ],
            internalType: "struct Kudos.UserRate[]",
            name: "giver",
            type: "tuple[]",
          },
          {
            internalType: "string",
            name: "skill",
            type: "string",
          },
        ],
        internalType: "struct Kudos.KudosInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_skill",
        type: "bytes",
      },
    ],
    name: "getKudos",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "giver",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "projectLink",
            type: "string[]",
          },
        ],
        internalType: "struct Kudos.UserRate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSkills",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserKudos",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "count",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "giver",
                type: "address",
              },
              {
                internalType: "string[]",
                name: "projectLink",
                type: "string[]",
              },
            ],
            internalType: "struct Kudos.UserRate[]",
            name: "giver",
            type: "tuple[]",
          },
          {
            internalType: "string",
            name: "skill",
            type: "string",
          },
        ],
        internalType: "struct Kudos.KudosInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_skill",
        type: "bytes",
      },
    ],
    name: "getUsersKudosSkill",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "count",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "giver",
                type: "address",
              },
              {
                internalType: "string[]",
                name: "projectLink",
                type: "string[]",
              },
            ],
            internalType: "struct Kudos.UserRate[]",
            name: "givers",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Kudos.KudosDataPro[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_skill",
        type: "bytes",
      },
      {
        internalType: "string[]",
        name: "_projectLink",
        type: "string[]",
      },
    ],
    name: "giveKudos",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
