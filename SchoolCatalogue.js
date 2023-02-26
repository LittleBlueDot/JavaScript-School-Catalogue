// Main class

class School {
  static count = 0;
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this.instanceId = ++School.count;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if ((typeof newNumberOfStudents != "number") || (newNumberOfStudents < 0)) {
      console.log(
        "Invalid input: numberOfStudents must be set to a Number and it should be more than 0."
      );
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }

  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    );
  }

  pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

// Subclass

class PrimaryScool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Subclass

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

// Subclass

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

console.log("");
console.log("PRIMARY SCHOOL");

const lorraineHansbury = new PrimaryScool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();
lorraineHansbury.numberOfStudents = "test";
lorraineHansbury.numberOfStudents = -5;
lorraineHansbury.numberOfStudents = 800;

console.log(`New education year ${lorraineHansbury.name} school increased and now it has ${lorraineHansbury.numberOfStudents} students.`);

const sub = lorraineHansbury.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

console.log(`The substituite teacher this week is ${sub}`);

console.log("");
console.log("HIGH SCHOOL");

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(
  `${alSmith.name} has the following sports teams: ${alSmith.sportsTeams}`
);

console.log("");
console.log("MIDDLE SCHOOL");

const middleschool = new MiddleSchool('A. Block', 355);

console.log(middleschool.level);


// Count all created school objects
console.log(School.count);
