import { Button, Header } from 'ui';
import { add, square } from '@abccomp/test-lib';

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <Button />
      <div>{add(10, 20)}</div>
      <div>{square(10)}</div>
    </>
  );
}
