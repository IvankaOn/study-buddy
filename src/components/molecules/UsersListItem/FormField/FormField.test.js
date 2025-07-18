it("", () => {});

/* const InputWithButton = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input value={inputValue} onChange={inputChange} name="Name" id="name" placeholder="Enter your name"></input>
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe("inpit test", () => {
  it("rendet component", () => {
    render(<InputWithButton />);
    screen.getByText("Submit");
  });

  it("Properly handles value change", () => {
    render(<InputWithButton />);

    const input = screen.getByPlaceholderText("Enter your name");

    const btn = screen.getByText("Submit");
    expect(btn).toBeDisabled();

    fireEvent.change(input, { target: { value: "Test" } });
    expect(input).toHaveValue("Test");
    expect(btn).not.toBeDisabled();
  });
});
 */
