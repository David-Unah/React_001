const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>CopyWright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer