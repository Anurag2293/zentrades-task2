
export const CORRECT_PASSWORD = "ZenTradesTest@123"

export const METRICS = [
    { title: "Total Revenue", stat: "$64,492", highlight: true },
    { title: "Total Jobs Avg", stat: "$608", highlight: false },
    { title: "Tickets Created", stat: "106", highlight: false },
    { title: "Tickets Scheduled", stat: "66", highlight: false },
    { title: "Outstanding Amount", stat: "$19,304.52", highlight: true },
    { title: "Memberships Sold", stat: "0", highlight: false },
    { title: "Jobs Completed", stat: "8", highlight: false },
    { title: "Total Canceled", stat: "2", highlight: false },
]

export const locationChartSetting = {
    xAxis: [
        {
            label: 'Revenue for December 2023 (in $)',
        },
    ],
    width: 600,
    height: 400,
    margin: { left: 100 },
};

export const locationDataset = [
    { location: 'Social Life', revenue: 15000 },
    { location: 'Malibu', revenue: 12500 },
    { location: 'Paris', revenue: 6200 },
    { location: 'NYC', revenue: 5900 },
    { location: 'Everett', revenue: 2200 },
    { location: 'Seattle', revenue: 2100 },
    { location: 'London', revenue: 1500 }
];

export const locationValueFormatter = (value: number) => `$ ${value}`;

export const jobTypeChartSetting = {
    xAxis: [
        {
            label: 'Revenue for December 2023 (in $)',
        },
    ],
    width: 600,
    height: 400,
    margin: { left: 120 },
};

export const jobTypeDataset = [
    { jobtype: 'alarm system', revenue: 28500 },
    { jobtype: 'Backflow Testing', revenue: 15000 },
    { jobtype: 'Diagnosis', revenue: 6100 },
    { jobtype: 'Fire Extinguisher', revenue: 5900 },
    { jobtype: 'pump', revenue: 1000 },
]

export const jobTypeValueFormatter = (value: number) => `$ ${value}`;
