const LastName = ({ prop: { state, setState, setError } }) => {
  const handleInput = (value) => {
    setState((state) => ({
      ...state,
      fullname: state.fullname.split(' ')[0] + value,
    }))
    setError('')
  }
  return (
    <div className="profile-detail">
      <div className="label">
        <label for="lastname">Last Name</label>
      </div>
      <input
        id="lastname"
        className="textbox"
        placeholder="Last Name"
        type="text"
        value={state.fullname.split(' ')[1]}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default LastName
