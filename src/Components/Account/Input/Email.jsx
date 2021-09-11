const Email = ({ prop: { state, setState, setError } }) => {
  const handleInput = (value) => {
    setState((state) => ({ ...state, email: value }))
    setError('')
  }
  return (
    <div className="profile-detail">
      <div className="label">
        <label for="email">Email address</label>
      </div>
      <input
        id="email"
        className="textbox"
        placeholder="Email"
        type="text"
        value={state.email}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default Email
