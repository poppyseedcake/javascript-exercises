const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        if (!("yearOfDeath" in a)) a.yearOfDeath = (new Date()).getFullYear();
        if (!("yearOfDeath" in b)) b.yearOfDeath = (new Date()).getFullYear();

        const lastguy = a.yearOfDeath - a.yearOfBirth;
        const nextguy = b.yearOfDeath - b.yearOfBirth;
        return lastguy > nextguy ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
