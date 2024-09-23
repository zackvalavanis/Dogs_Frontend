import { DogsIndex } from "./DogsIndex"

export function DogsPage() {
  const dogs = [
    {
      id: 1,
      name: 'tim',
      age: 4,
      breed: 'Beagle'
    }
  ]
  return (
    <main>
      <DogsIndex dogs={dogs}/>
    </main>
  );
}
