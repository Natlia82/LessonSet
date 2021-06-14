import Team from '../team';

test('one character', () => {
    const rezult = new Team();
    rezult.add('one');
    rezult.toArray();
    expect(rezult).toEqual({ "member": ["one"] });
});

test('many character', () => {
    const rezult = new Team();
    rezult.addAll('one', 'two', 'three');
    rezult.toArray();
    expect(rezult).toEqual({ "member": ["one", "two", "three"] });
});

test('replay character', () => {
    const rezult = new Team();
    rezult.addAll('one', 'two', 'one', 'three');
    rezult.toArray();
    expect(rezult).toEqual({ "member": ["one", "two", "three"] });
});