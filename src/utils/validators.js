import {packageTypes} from "../constants/appConstants";

const packageValidators = {
  count: count => count > 0 && count < 100,
  title: title => title.length > 3,
  desc: description => description.length > 3,
  price: price => price > 100,
  category: category => packageTypes[category]
}

export const validateName = name => name.length > 3;
export const validatePackage = ({title, price, description, noOfSessions, category}) =>
  packageValidators.title(title) &&
  packageValidators.desc(description) &&
  packageValidators.price(price) &&
  packageValidators.count(noOfSessions) &&
  packageValidators.category(category);

