export interface CategoryType {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryType;
}

export interface BanksTypes {
  _id: string;
  name: string;
  nameBank: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface checkoutTypes {
  voucher: String;
  nominal: String;
  payment: String;
  bank: String;
  fullname: String;
  accountUser: String;
}

export interface historyVoucherTopupTypes {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryPaymentTypes {
  bankName: string;
  name: string;
  type: string;
  noRekening: string;
}

export interface historyTransactionTypes {
  _id: string;
  historyVoucherTopup: historyVoucherTopupTypes;
  value: number;
  status: string;
  accountUser?: string;
  tax?: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}

export interface TopUpCategoriesTypes {
  _id: string;
  value: number;
  category: {
    name: string;
  };
}
