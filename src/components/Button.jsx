function Button({ children, onClick, title, disabled, type }) {
  return (
    <button onClick={onClick} tittle={title} disabled={disabled} type={type}>
      {children}
    </button>
  )
}

export default Button
