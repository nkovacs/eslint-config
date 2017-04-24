function Readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

const person = {
    @Readonly
    decorated() {
    },
    Acquaintance() {
    },
};

const friend = new person.Acquaintance();

export { friend };

function Superhero(isSuperhero) {
    return function superheroDecorator(target) {
        target.isSuperhero = isSuperhero;
    };
}

@Superhero(true)
class MySuperHero {
    static staticProperty = 'superhero';
    static staticProperty2 = 'foo';
    b = '42';
    a = this.b;
}

console.log(MySuperHero.isSuperhero); // eslint-disable-line no-console

const foo = function foo() {}
;[1].map(foo);

console.log('unicorn'.green);
