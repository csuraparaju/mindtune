import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import UsersTable from '../table';
import { auth } from '../auth';
import Chart from '../journal/chart';

interface User {
  user_id: number;
  name: string;
  timestamp: string;
  pitchscore: number;
  speechrate: number;
  intonation: number;
}



export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string },
}) {

  const session = await auth();
  const user = session?.user;

  if(!user) {
    return (
      <div>
        <h1>Not logged in</h1>
      </div>
    )
  }
   
  const search = searchParams.q ?? '';

  let selectuser = await sql`
    SELECT id FROM users WHERE email = ${user?.email};
  `;


  const scoreResult = await sql`
    SELECT CAST(Scores.timestamp as VARCHAR(255)), Scores.pitchScore, Scores.speechRate, Scores.intonation
    FROM scores WHERE Scores.timestamp::text ILIKE ${'%' + search + '%'} AND Scores.user_id = ${selectuser.rows[0].id};
  `;

  // const result = await sql`
  //   SELECT Scores.user_id, Users.name, CAST(Scores.timestamp as VARCHAR(255)), Scores.pitchScore, Scores.speechRate, Scores.intonation
  //   FROM scores 
  //   INNER JOIN users
  //   ON Scores.user_id = Users.id
  //   WHERE Users.email = ${user?.email} AND Scores.timestamp::text ILIKE ${'%' + search + '%'};
  // `; 

  const users = scoreResult.rows as User[];

  console.log(users);
  users.forEach(user => {
    user.timestamp = new Date(user.timestamp).toLocaleDateString("en-US", { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  });


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      {/* <Title>Previous Scores</Title> */}
      <h3 className="text-4xl font-bold mb-6">Previous Scores</h3>
      <p className="text-gray-600 mb-4">
      A list of previous scores from the Mindtune algorithm
      </p>
      {/* <Text>A list of previous scores from the Mindtune algorithm</Text> */}
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} /> 
      </Card>
      <Chart />
    </main>
  );
}
