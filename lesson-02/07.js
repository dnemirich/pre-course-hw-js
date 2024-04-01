let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedDeepCopy = structuredClone(passportMarried);
passportMarriedDeepCopy.married = true;


console.log(passportMarried);
console.log(passportMarriedDeepCopy);