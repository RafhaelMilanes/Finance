import {
  TransactionsCategory,
  TransactionsPaymentMethod,
  TransactionsType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionsPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionsPaymentMethod.DEBIT_CARD]: "credit-card.sv",
  [TransactionsPaymentMethod.BANK_TRANSFER]: "boleto.svg",
  [TransactionsPaymentMethod.BANK_SPLIT]: "boleto.svg",
  [TransactionsPaymentMethod.CASH]: "money.svg",
  [TransactionsPaymentMethod.PIX]: "pix.svg",
  [TransactionsPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABEL = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entreterimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  BANK_TRANSFER: "Transferencia Bancária",
  BANK_SPLIT: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionsType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionsType.INVESTMENT,
    label: "Investimento",
  },
  {
    value: TransactionsType.DEPOSIT,
    label: "Depósito",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionsPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionsPaymentMethod.BANK_SPLIT,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.BANK_SPLIT],
  },
  {
    value: TransactionsPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.CASH],
  },
  {
    value: TransactionsPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionsPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionsPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.OTHER],
  },
  {
    value: TransactionsPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionsCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.EDUCATION],
  },
  {
    value: TransactionsCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.ENTERTAINMENT],
  },
  {
    value: TransactionsCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.FOOD],
  },
  {
    value: TransactionsCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.HEALTH],
  },
  {
    value: TransactionsCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.HOUSING],
  },
  {
    value: TransactionsCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.OTHER],
  },
  {
    value: TransactionsCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.SALARY],
  },
  {
    value: TransactionsCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.TRANSPORTATION],
  },
  {
    value: TransactionsCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.UTILITY],
  },
];
