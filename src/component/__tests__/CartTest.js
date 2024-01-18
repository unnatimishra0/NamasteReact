import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import { RestaurantMenu } from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'

it("should load Restaurant Menu component", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_NAME),
    })
  );

  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Chicken And Cheese Sandwich");
  fireEvent.click(accordianHeader);
});
