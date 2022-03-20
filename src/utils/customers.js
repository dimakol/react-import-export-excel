export const FILE_NAME = "Customers";
export const FILE_TYPE = "csv";

// make customers dummy data
export const makeCustomersData = () => {
  const customers = [];
  const headers = ["firstName", "lastName", "email", "address", "zipcode"];
  for (let i = 0; i <= 25; i++) {
    customers.push([
      `first${i}`,
      `last${i}`,
      `abc${i}@gmail.com`,
      `000${i} street city, ST`,
      `0000${i}`,
    ]);
  }
  customers.unshift(headers);
  return customers;
};
