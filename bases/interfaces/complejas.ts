(() => {
  interface Client {
    name: string;
    age: number;
    address: Address;
  }

  interface Address {
    street: string;
    zip: string;
    city: string;
  }

  const client: Client = {
    age: 20,
    name: "Carlos",
    address: {
      city: "",
      street: "",
      zip: "",
    },
  };
})();
