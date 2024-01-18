const { Provider } = require("react-redux");
import { render ,screen,fireEvent} from "@testing-library/react"
import Header from '../Header'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        (<Header/>
        );
      </Provider>
    </BrowserRouter>
  );
  const loginButton=screen.getByRole('button');

  //const loginbutton=screen.getByText("login")
  //if there are multiple buttons
  //  const loginButton=screen.getByRole('button',{name:"Login"});


  expect(loginButton).toBeInTheDocument();
});

it("Should rendr header component with a Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          (<Header/>
          );
        </Provider>
      </BrowserRouter>
    );
    // const Cartitems=screen.getByText('Cart 0');
    // u can also pass like this in regex like(/Cart/)
    const Cartitems=screen.getByText(/Cart/);

  
    expect(Cartitems).toBeInTheDocument();
  });

  it("Should change login button to logout ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          (<Header/>
          );
        </Provider>
      </BrowserRouter>
    );
    
    const loginButton=screen.getByRole('button',{name:"Login"});

    fireEvent.click(loginButton)

    const logOutButton=screen.getByRole('button',{name:"Logout"});

  
  
    expect(logOutButton).toBeInTheDocument();
  });

