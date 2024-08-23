export const validatePhoneNumber = (number: string) => {
  const regex = /^(?:\+380|0)\d{9}$/;
  return regex;
};
