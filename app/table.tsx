import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  user_id: number;
  name: string;
  timestamp: string;
  pitchscore: number;
  speechrate: number;
  intonation: number;
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Date of Score</TableHeaderCell>
          <TableHeaderCell>Pitch Score</TableHeaderCell>
          <TableHeaderCell>Speech Rate</TableHeaderCell>
          <TableHeaderCell>Intonation</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.timestamp}>
            <TableCell>
              <Text>{user.timestamp}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.pitchscore}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.speechrate}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.intonation}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
