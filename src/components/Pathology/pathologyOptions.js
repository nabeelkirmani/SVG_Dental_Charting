//src/components/Pathology/PathologyOptions.js

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
                        { value: "c1", label: "C1" },
                        { value: "c2", label: "C2" },
                        { value: "c3", label: "C3" },
                        { value: "c4", label: "C4" },
                      ],
                    },
                  },
                  {
                    value: "pulpNotInvolved",
                    label: "Pulp Not Involved",
                    next: {
                      level: [
                        { value: "c1", label: "C1" },
                        { value: "c2", label: "C2" },
                        { value: "c3", label: "C3" },
                        { value: "c4", label: "C4" },
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
                  { value: "c1", label: "C1" },
                  { value: "c2", label: "C2" },
                  { value: "c3", label: "C3" },
                  { value: "c4", label: "C4" },
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
                  { value: "c1", label: "C1" },
                  { value: "c2", label: "C2" },
                  { value: "c3", label: "C3" },
                  { value: "c4", label: "C4" },
                ],
              },
            },
            {
              value: "noCavitation",
              label: "No Cavitation",
              next: {
                level: [
                  { value: "c1", label: "C1" },
                  { value: "c2", label: "C2" },
                  { value: "c3", label: "C3" },
                  { value: "c4", label: "C4" },
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
            { value: "vertical", label: "Vertical" },
            { value: "horizontal", label: "Horizontal" },
          ],
        },
      },
      {
        value: "rootFracture",
        label: "Root Fracture",
        next: {
          direction: [
            { value: "vertical", label: "Vertical" },
            { value: "horizontal", label: "Horizontal" },
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
              { value: "buccal", label: "Buccal" },
              { value: "palatal", label: "Palatal" },
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
              { value: "buccal", label: "Buccal" },
              { value: "palatal", label: "Palatal" },
            ],
            multiple: true,
          },
        },
      },
    ],
  },
  discoloration: {
    color: [
      { value: "gray", label: "Gray" },
      { value: "red", label: "Red" },
      { value: "yellow", label: "Yellow" },
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
