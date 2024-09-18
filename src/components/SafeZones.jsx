function SafeZones({ className, title, children, colour }) {

  const varients ={
    red: 'heading bg-red-600 rounded-xl text-center text-xl font-black p-2 text-white',
    green: 'heading bg-green-500 rounded-xl text-center text-xl font-black p-2 text-white'
  }
  return (
    <div className={className}>
      <h1 className={varients[colour]}>
        {title}
      </h1>

      <div className="Emergency">{children}</div>
    </div>
  );
}

export default SafeZones;


