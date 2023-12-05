'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  {
    Date: 'Tue Dec 05 2023 07:33:19 GMT-0500 (Eastern Standard Time',
    PitchScore: 2.3,
    SpeechRate: 4.1,
    Intonation: 1.5
  },
  {
    Date: 'Tue Dec 05 2023 07:45:00 GMT-0500 (Eastern Standard Time)	',
    PitchScore: 6.3	,
    SpeechRate: 4.2,
    Intonation: 10.44
  },
  {
    Date: 'Tue Dec 05 2023 08:10:36 GMT-0500 (Eastern Standard Time)',
    PitchScore: 2.3,
    SpeechRate : 5,
    Intonation: 7.3

  }
];


export default function Example() {
  return (
    <Card className="mt-8">
      {/* <Title>Performance</Title> */}
      <h3 className="text-4xl font-bold mb-6">Performance</h3>
      <Text>Comparisons of pitch score, speech rate, and intonation over various timestamps.</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['PitchScore', 'SpeechRate', 'Intonation']}
        index="Date"
        colors={['indigo', 'fuchsia', 'amber']}
        valueFormatter={(number: number) =>
          `${number.toFixed(2)}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
