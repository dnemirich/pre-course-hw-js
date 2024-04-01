let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressDeepCopy = structuredClone(passportWithAddress);
passportWithAddressDeepCopy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportWithAddressDeepCopy.address.city);
