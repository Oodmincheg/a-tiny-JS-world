/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const Inhabition = function(species, name, gender, legs, hands, saying){
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.legs = legs;
    this.hands = hands;
    this.saying = saying
}

const dog = new Inhabition('dog', 'Mr. Pickles', 'male', 4, 0, "MRRRR. PIIICLEEESSSS GOOOOD BOOOOOYYYY")
const cat = new Inhabition('cat', 'Felix', 'male', '4', '0', 'Felix the cat. The wonderful, wonderful cat!')
const man = new Inhabition('human', 'Luntik', 'male', '2', '2', 'Ya rodilsya')
const woman = new Inhabition('human', 'Eva', 'female', '2', '2', 'Ya sozdana iz rebra')
print(dog.species + ';' + dog.name + ';' + dog.gender + ';' + dog.legs + ';' + dog.hands + ';' + dog.saying)
print(cat.species + ';' + cat.name + ';' + cat.gender + ';' + cat.legs + ';' + cat.hands + ';' + cat.saying)
print(man.species + ';' + man.name + ';' + man.gender + ';' + man.legs + ';' + man.hands + ';' + man.saying)
print(woman.species + ';' + woman.name + ';' + woman.gender + ';' + woman.legs + ';' + woman.hands + ';' + woman.saying)

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


