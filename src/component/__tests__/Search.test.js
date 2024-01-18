import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
//creating a mock fetch function  beacause when we test it cannot make a fetch api call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search", async () => {
  //whenever u r using fetch or any state update wrap your render function inaide act

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn=screen.getByRole('button',{name:'Search'});

  const searchInput=screen.getByTestId("searchInput");

  fireEvent.change(searchInput,{target:{value:"pizza"}});

  fireEvent.click(searchbtn);

  //console.log(searchbtn);

//   expect(searchbtn).toBeInTheDocument();
//screeen shd load 
const card=screen.getAllByTestId("resCard");

expect(card.length).toBe(3);
});

//when link err comes wrap component inside browser router

it('should filter top rated res',async()=>{

    await act(async ()=>{
        render(<BrowserRouter><Body /></BrowserRouter>)
    })

    const cardsBeforeFilter=screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    // const topratedBtn=screen.getByRole("button",
    // {name:'Top Rated Restaurant'});
    // fireEvent.click(topratedBtn);

    // const cardsAfterFilter= screen.getAllByTestId("resCard");
    // expect(cardsAfterFilter.length).toBe(1);

});
