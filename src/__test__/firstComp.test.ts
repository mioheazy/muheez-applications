import add from '../Components/firstComp'

test('if add function adds two numbers correctly', () => { 
    let a = 5
    let b = 6

    expect(add(a, b)).toEqual(11)
})