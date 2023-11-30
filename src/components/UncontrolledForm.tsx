function UncontrolledForm() {
  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" />
        </div>

        <div>
          <label>Gender:</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" />
            Accept Terms & Conditions
          </label>
        </div>

        <div>
          <label htmlFor="picture">Upload Picture:</label>
          <input type="file" id="picture" />
        </div>

        <div>
          <label htmlFor="country">Select Country:</label>
          <select id="country">
            <option value="country1">Country 1</option>
            <option value="country2">Country 2</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
