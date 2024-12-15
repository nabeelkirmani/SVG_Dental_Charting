// src/components/Pathology/pathologyOptions.js

const pathologyOptions = {
  decay: {
    stage: [
      {
        value: "dentin",
        label: "Dentin",
        next: {
          cavitation: [
            {
              value: "cavitation",
              label: "Cavitation",
              next: {
                pulp: [
                  {
                    value: "pulpInvolved",
                    label: "Pulp Involved",
                    next: {
                      level: [
                        { value: "C1", label: "C1" },
                        { value: "C2", label: "C2" },
                        { value: "C3", label: "C3" },
                        { value: "C4", label: "C4" },
                      ],
                    },
                  },
                  {
                    value: "pulpNotInvolved",
                    label: "Pulp Not Involved",
                    next: {
                      level: [
                        { value: "C1", label: "C1" },
                        { value: "C2", label: "C2" },
                        { value: "C3", label: "C3" },
                        { value: "C4", label: "C4" },
                      ],
                    },
                  },
                ],
              },
            },
            {
              value: "noCavitation",
              label: "No Cavitation",
              next: {
                level: [
                  { value: "C1", label: "C1" },
                  { value: "C2", label: "C2" },
                  { value: "C3", label: "C3" },
                  { value: "C4", label: "C4" },
                ],
              },
            },
          ],
        },
      },
      {
        value: "enamel",
        label: "Enamel",
        next: {
          cavitation: [
            {
              value: "cavitation",
              label: "Cavitation",
              next: {
                level: [
                  { value: "C1", label: "C1" },
                  { value: "C2", label: "C2" },
                  { value: "C3", label: "C3" },
                  { value: "C4", label: "C4" },
                ],
              },
            },
            {
              value: "noCavitation",
              label: "No Cavitation",
              next: {
                level: [
                  { value: "C1", label: "C1" },
                  { value: "C2", label: "C2" },
                  { value: "C3", label: "C3" },
                  { value: "C4", label: "C4" },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  fracture: {
    fractureType: [
      {
        value: "crownFracture",
        label: "Crown Fracture",
        next: {
          direction: [
            { value: "Vertical", label: "Vertical" },
            { value: "Horizontal", label: "Horizontal" },
          ],
        },
      },
      {
        value: "rootFracture",
        label: "Root Fracture",
        next: {
          direction: [
            { value: "Vertical", label: "Vertical" },
            { value: "Horizontal", label: "Horizontal" },
          ],
        },
      },
    ],
  },
  toothWear: {
    wearType: [
      {
        value: "abrasion",
        label: "Abrasion",
        next: {
          surface: {
            options: [
              { value: "Buccal", label: "Buccal" },
              { value: "Palatal", label: "Palatal" },
            ],
            multiple: true,
          },
        },
      },
      {
        value: "erosion",
        label: "Erosion",
        next: {
          surface: {
            options: [
              { value: "Buccal", label: "Buccal" },
              { value: "Palatal", label: "Palatal" },
            ],
            multiple: true,
          },
        },
      },
    ],
  },
  discoloration: {
    color: [
      { value: "Gray", label: "Gray" },
      { value: "Red", label: "Red" },
      { value: "Yellow", label: "Yellow" },
    ],
  },
  apical: {
    answer: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  "development disorder": {
    answer: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
};

export default pathologyOptions;
