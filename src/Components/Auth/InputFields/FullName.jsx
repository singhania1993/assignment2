const FullName = ({ prop: { state, setState, setError } }) => {
  const handleInput = (value) => {
    setState((state) => ({ ...state, fullname: value }))
    setError('')
  }
  return (
    <div>
      <div className="label">
        <label for="fullname">Full name</label>
      </div>
      <input
        id="fullname"
        className="textbox"
        placeholder="Enter your name"
        type="text"
        value={state.fullname}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default FullName
