const FirstName = ({ prop: { state, setState } }) => {
  const handleInput = (value) => {
    setState((state) => ({
      ...state,
      fullname: value + state.fullname.split(' ')[1],
    }))
  }
  return (
    <div className="profile-detail">
      <div className="label">
        <label for="firstname">First Name</label>
      </div>
      <input
        id="firstname"
        className="textbox"
        placeholder="First Name"
        type="text"
        value={state.fullname.split(' ')[0]}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default FirstName
