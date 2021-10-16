import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", () => {
  render(<TransactionCreateStepTwo />);
  screen.debug();
});
