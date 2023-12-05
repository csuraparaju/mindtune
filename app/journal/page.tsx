'use client';

// import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
// import Chart from './chart';

// const website = [
//   { name: '/home', value: 1230 },
//   { name: '/contact', value: 751 },
//   { name: '/gallery', value: 471 },
//   { name: '/august-discount-offer', value: 280 },
//   { name: '/case-studies', value: 78 }
// ];

// const shop = [
//   { name: '/home', value: 453 },
//   { name: '/imprint', value: 351 },
//   { name: '/shop', value: 271 },
//   { name: '/pricing', value: 191 }
// ];

// const app = [
//   { name: '/shop', value: 789 },
//   { name: '/product-features', value: 676 },
//   { name: '/about', value: 564 },
//   { name: '/login', value: 234 },
//   { name: '/downloads', value: 191 }
// ];

// const data = [
//   {
//     category: 'Website',
//     stat: '10,234',
//     data: website
//   },
//   {
//     category: 'Online Shop',
//     stat: '12,543',
//     data: shop
//   },
//   {
//     category: 'Mobile App',
//     stat: '2,543',
//     data: app
//   }
// ];

// export default function PlaygroundPage() {
//   return (
//     <main className="p-4 md:p-10 mx-auto max-w-7xl">
//       {/* <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
//         {data.map((item) => (
//           <Card key={item.category}>
//             <Title>{item.category}</Title>
//             <Flex
//               justifyContent="start"
//               alignItems="baseline"
//               className="space-x-2"
//             >
//               <Metric>{item.stat}</Metric>
//               <Text>Total views</Text>
//             </Flex>
//             <Flex className="mt-6">
//               <Text>Pages</Text>
//               <Text className="text-right">Views</Text>
//             </Flex>
//             <BarList
//               data={item.data}
//               valueFormatter={(number: number) =>
//                 Intl.NumberFormat('us').format(number).toString()
//               }
//               className="mt-2"
//             />
//           </Card>
//         ))}
//       </Grid>
//       <Chart /> */}

      
//     </main>
//   );
// }


import React, { useState } from 'react';

const AudioForm = () => {
  const [audioFile, setAudioFile] = useState(null);


  const handleFileChange = (e : any) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // TODO: Handle the form submission with the audio file
    if (audioFile) {
      console.log('Submitting audio file:', audioFile);
      // Add your logic for submitting the audio file here
      // Display a nice pop up page saying that the audio file was submitted

      // Reset the state
      setAudioFile(null);
      alert("Audio file submitted!")
      
    
    }
  };

  const prompts = [
    "How was your day?",
    "What did you do today?",
    "What are you looking forward to?",
    "What are you grateful for?",
    "What are you proud of?",
    "What are you worried about?",
    "What are you excited about?",
    "What are you feeling?",
    "What are you thinking?",
    "What are you struggling with?",
    "What are you happy about?",
    "What are you sad about?",
    "What are you angry about?",
    "What are you afraid of?",
    "What are you stressed about?"];

    const randomPrompt = prompts[5];

    const [question, setQuestion] = useState(randomPrompt);


  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Audio journal about today's prompt: {question}
      </h2>
      <h2 className="text-lg font-bold mb-6">Submit Audio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="audioFile" className="block text-sm font-medium text-gray-600">
            Choose Audio File
          </label>
          <input
            type="file"
            id="audioFile"
            accept="audio/*"
            onChange={handleFileChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"

          className="bg-sky-900 text-white hover:bg-slate-400 font-bold py-2 px-4 mt-3 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AudioForm;
