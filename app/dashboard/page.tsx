import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import UsersTable from '../table';

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
  searchParams: { q: string };
}) {
  // if table doesn't exist, create it

  // store pitchData, speechRate and intonation as 
  // comma separated values in a single column 

//   await sql`
//   CREATE TABLE IF NOT EXISTS Users (
//     id INTEGER PRIMARY KEY,
//     name VARCHAR(255),
//     email VARCHAR(255),
//     image VARCHAR(255),
//     createdAt TIMESTAMP DEFAULT NOW()
//     );
//   `;

//   await sql`
//   CREATE TABLE IF NOT EXISTS Scores (
//     user_id INTEGER,
//     timestamp TIMESTAMP DEFAULT NOW(),
//     pitchScore FLOAT,
//     speechRate FLOAT,
//     intonation FLOAT,
//     FOREIGN KEY (user_id) REFERENCES Users(id)
// );
  
//   `;

  //await sql`
  //INSERT INTO Users (id, name, email, image) VALUES (1, 'default', 'default@gmail.com', 'https://avatars.githubusercontent.com/u/47280503?v=4');`;

  //await sql`
  //INSERT INTO Scores (user_id, pitchScore, speechRate, intonation)
  //VALUES (1, 0, 0, 0);`;
  

  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT Scores.user_id, Users.name, CAST(Scores.timestamp as VARCHAR(255)), Scores.pitchScore, Scores.speechRate, Scores.intonation
    FROM scores 
    INNER JOIN users
    ON Scores.user_id = Users.id
    WHERE Scores.timestamp::text ILIKE ${'%' + search + '%'};
  `;

  const users = result.rows as User[];
  users.forEach(user => {
    user.timestamp = new Date(user.timestamp).toLocaleDateString("en-US", { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  });

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Previous Scores</Title>
      <Text>A list of previous scores from the Mindtune algorithm for { users[0].name }</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} /> 
      </Card>
    </main>
  );
}
