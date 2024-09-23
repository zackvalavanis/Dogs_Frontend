import { DogsIndex } from "./DogsIndex"

export function DogsPage() {
  const dogs = [
    {
      id: 1,
      name: 'Tim',
      age: 4,
      breed: 'Beagle',
      image: 'https://www.bil-jac.com/media/ambgc3os/beagle2-184102750.jpg?anchor=center&mode=crop&width=600&height=400&rnd=132167289621930000&format=webp&quality=80'
    }
  ]
  return (
    <main>
      <DogsIndex dogs={dogs}/>
    </main>
  );
}
