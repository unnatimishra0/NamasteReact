import { render ,screen} from "@testing-library/react"
import ContactUs from "../ContactUs"
import '@testing-library/jest-dom'

//to test multiple test cases in a group
describe('Contact Us Page Test Cases',()=>{
//we can write it also in place of test
//    beforeAll(() => {
//     console.log("Before All");
//   });

//   beforeEach(() => {
//     console.log("Before Each");
//   });

//   afterAll(() => {
//     console.log("After All");
//   });

//   afterEach(() => {
//     console.log("After Each");
//   });

    it('Should load contact us component',()=>{
        //trying to render inside jsdom
        render(<ContactUs/>);
    
        const heading=screen.getByRole("heading");
    //to check wether component is loading or not we use this method tobeDocument method
        expect(heading).toBeInTheDocument();
    
    });
    
    test('Should load  button inside contact us component',()=>{
        //trying to render inside jsdom
        render(<ContactUs/>);
         //can write like this also
        const button=screen.getByText('Submit');
        // const button=screen.getByRole("button");
        expect(button).toBeInTheDocument();
    
    });
    
    test('Should load input name inside contact us component',()=>{
        //trying to render inside jsdom
        render(<ContactUs/>);
    
        const input=screen.getByPlaceholderText('name');
    //to check wether component is loading or not we use this method tobeDocument method
        expect(input).toBeInTheDocument();
    
    });
    
    test('shoyld load all the input boxes',()=>{
        render(<ContactUs/>);
    // querying
        const inputBoxes= screen.getAllByRole("textbox");
    //Assertion
        expect(inputBoxes.length).toBe(2);
    
    })

})
