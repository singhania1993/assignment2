const Password = ({ prop: { state, setState, setError, label } }) => {
  const handleInput = (value) => {
    setState((state) => ({ ...state, password: value }))
    setError('')
  }
  return (
    <div>
      <div className="label">
        <label for="password">Password</label>
        <span className="blue">{label}</span>
      </div>
      <input
        id="password"
        placeholder="Enter your password"
        className="textbox"
        type="password"
        value={state.password}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default Password
