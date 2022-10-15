import add from '../Components/firstComp'

test('if add function adds two numbers correctly', () => {
  const a = 5
  const b = 6

  expect(add(a, b)).toEqual(11)
})
