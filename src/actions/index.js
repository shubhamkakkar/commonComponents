export const USER_ESTABLISH = "USER_ESTABLISH";
export const USER_REMOVE = "USER_REMOVE";

export const User_Establish = (id, name, email) => {
  return {
    USER_ESTABLISH,
    id,
    name,
    email
  };
};

export const User_Remove = () => {
  return {
    type: USER_REMOVE,
    id: "",
    name: "",
    email: ""
  };
};
